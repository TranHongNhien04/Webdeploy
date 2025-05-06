import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const OrderDetailsModal = ({ isOpen, onClose, order }) => {
    const [products, setProducts] = useState({});
    const [loading, setLoading] = useState(true);

    // Format tiền VND
    const formatVND = (amount) => {
        return new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
            minimumFractionDigits: 0,
        }).format(amount);
    };

    // Lấy thông tin chi tiết sản phẩm
    useEffect(() => {
        async function fetchProductDetails() {
            if (!order || !order.items || order.items.length === 0) {
                setLoading(false);
                return;
            }

            try {
                const productIds = order.items.map((item) => item.productId);
                const uniqueProductIds = [...new Set(productIds)];
                const productDetails = {};

                for (const id of uniqueProductIds) {
                    const response = await fetch(
                        `http://localhost:3001/products?productId=${id}`
                    );
                    if (response.ok) {
                        const data = await response.json();
                        if (data.length > 0) {
                            productDetails[id] = data[0];
                        }
                    }
                }

                setProducts(productDetails);
            } catch (error) {
                console.error('Error fetching product details:', error);
            } finally {
                setLoading(false);
            }
        }

        if (isOpen && order) {
            fetchProductDetails();
        }
    }, [isOpen, order]);

    if (!isOpen || !order) return null;

    // Lấy hình ảnh sản phẩm
    const getProductImage = (productId) => {
        return products[productId]?.image || '/placeholder.svg';
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                <div className="flex justify-between items-center p-6 border-b">
                    <h2 className="text-xl font-bold">
                        Chi tiết đơn hàng #{order.id}
                    </h2>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700">
                        <X size={24} />
                    </button>
                </div>

                <div className="p-6">
                    {loading ? (
                        <p className="text-center py-4">
                            Đang tải thông tin...
                        </p>
                    ) : (
                        <>
                            <div className="mb-6">
                                <div className="flex justify-between mb-2">
                                    <p className="font-medium">
                                        Ngày đặt hàng:
                                    </p>
                                    <p>{order.date}</p>
                                </div>
                                <div className="flex justify-between mb-2">
                                    <p className="font-medium">
                                        Thời gian đặt:
                                    </p>
                                    <p>{order.time || 'Không có thông tin'}</p>
                                </div>
                            </div>

                            <div className="mb-6">
                                <h3 className="font-semibold text-lg mb-3">
                                    Thông tin người nhận
                                </h3>
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <p className="mb-2">
                                        <span className="font-medium">
                                            Họ tên:
                                        </span>{' '}
                                        {order.customerInfo.fullName}
                                    </p>
                                    <p className="mb-2">
                                        <span className="font-medium">
                                            Số điện thoại:
                                        </span>{' '}
                                        {order.customerInfo.phone}
                                    </p>
                                    <p className="mb-2">
                                        <span className="font-medium">
                                            Địa chỉ:
                                        </span>{' '}
                                        {order.customerInfo.address},{' '}
                                        {order.customerInfo.ward},{' '}
                                        {order.customerInfo.district},{' '}
                                        {order.customerInfo.city}
                                    </p>
                                    {order.customerInfo.note && (
                                        <p className="mb-2">
                                            <span className="font-medium">
                                                Ghi chú:
                                            </span>{' '}
                                            {order.customerInfo.note}
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div className="mb-6">
                                <h3 className="font-semibold text-lg mb-3">
                                    Sản phẩm đã đặt
                                </h3>
                                <div className="border rounded-lg overflow-hidden">
                                    <div className="grid grid-cols-12 gap-4 p-4 bg-gray-50 text-sm font-medium text-gray-600">
                                        <div className="col-span-6">
                                            Sản phẩm
                                        </div>
                                        <div className="col-span-2 text-center">
                                            Đơn giá
                                        </div>
                                        <div className="col-span-2 text-center">
                                            Số lượng
                                        </div>
                                        <div className="col-span-2 text-center">
                                            Thành tiền
                                        </div>
                                    </div>

                                    {order.items.map((item) => (
                                        <div
                                            key={item.productId}
                                            className="border-t border-gray-100 p-4">
                                            <div className="grid grid-cols-12 gap-4 items-center">
                                                <div className="col-span-6 flex items-center gap-4">
                                                    <div className="relative">
                                                        <img
                                                            src={getProductImage(
                                                                item.productId
                                                            )}
                                                            alt={
                                                                item.title ||
                                                                'Sản phẩm'
                                                            }
                                                            className="w-16 h-16 object-cover rounded"
                                                        />
                                                    </div>
                                                    <div>
                                                        <h3 className="font-medium text-gray-800">
                                                            {item.title ||
                                                                products[
                                                                    item
                                                                        .productId
                                                                ]?.title ||
                                                                `Sản phẩm #${item.productId}`}
                                                        </h3>
                                                    </div>
                                                </div>

                                                <div className="col-span-2 text-center">
                                                    {formatVND(
                                                        item.price ||
                                                            products[
                                                                item.productId
                                                            ]?.price ||
                                                            0
                                                    )}
                                                </div>

                                                <div className="col-span-2 text-center">
                                                    {item.quantity}
                                                </div>

                                                <div className="col-span-2 text-center font-medium text-red-500">
                                                    {formatVND(
                                                        (item.price ||
                                                            products[
                                                                item.productId
                                                            ]?.price ||
                                                            0) * item.quantity
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="border-t pt-4">
                                <div className="flex justify-between mb-2">
                                    <p className="font-medium">Tạm tính:</p>
                                    <p>
                                        {formatVND(
                                            order.subtotal || order.totalAmount
                                        )}
                                    </p>
                                </div>
                                <div className="flex justify-between mb-2">
                                    <p className="font-medium">
                                        Phí vận chuyển:
                                    </p>
                                    {order.shippingFee === 0 ? (
                                        <p className="text-green-500">
                                            Miễn phí
                                        </p>
                                    ) : (
                                        <p>
                                            {formatVND(order.shippingFee || 0)}
                                        </p>
                                    )}
                                </div>
                                <div className="flex justify-between font-bold text-lg">
                                    <p>Tổng cộng:</p>
                                    <p className="text-red-500">
                                        {formatVND(order.totalAmount)}
                                    </p>
                                </div>
                            </div>
                        </>
                    )}
                </div>

                <div className="flex justify-end p-6 border-t">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300">
                        Đóng
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OrderDetailsModal;
