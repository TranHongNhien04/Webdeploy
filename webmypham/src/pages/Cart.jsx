import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Cart() {
    const {
        cartItems,
        removeFromCart,
        updateQuantity,
        getCartTotal,
        clearCart,
    } = useCart();
    const [products, setProducts] = useState({});
    const [loading, setLoading] = useState(true);
    const [selectedItems, setSelectedItems] = useState([]);

    // Tính tổng tiền cho các sản phẩm đã chọn
    const getSelectedTotal = () => {
        return cartItems
            .filter((item) => selectedItems.includes(item.productId))
            .reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const toggleItemSelection = (productId) => {
        if (selectedItems.includes(productId)) {
            setSelectedItems(selectedItems.filter((id) => id !== productId));
        } else {
            setSelectedItems([...selectedItems, productId]);
        }
    };

    // Lấy thông tin chi tiết của sản phẩm từ API
    useEffect(() => {
        async function fetchProductDetails() {
            if (cartItems.length === 0) {
                setLoading(false);
                return;
            }

            try {
                const productIds = cartItems.map((item) => item.productId);
                const uniqueProductIds = [...new Set(productIds)];

                const productDetails = {};

                // Lấy thông tin chi tiết cho từng sản phẩm
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

        fetchProductDetails();
    }, [cartItems]);

    if (loading) {
        return (
            <div className="container mx-auto px-4 py-24 min-h-screen">
                <div className="max-w-6xl mx-auto text-center">
                    <p>Đang tải thông tin giỏ hàng...</p>
                </div>
            </div>
        );
    }

    if (cartItems.length === 0) {
        return (
            <div className="container mx-auto px-4 py-24 min-h-screen">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-3xl font-bold mb-8">
                        Giỏ hàng của bạn
                    </h1>
                    <p className="text-gray-600 mb-8">
                        Giỏ hàng của bạn đang trống.
                    </p>
                    <Link
                        to="/san-pham"
                        className="inline-block bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors">
                        Tiếp tục mua sắm
                    </Link>
                </div>
            </div>
        );
    }

    // Lấy hình ảnh sản phẩm từ thông tin chi tiết nếu có
    const getProductImage = (productId) => {
        return products[productId]?.image || '/placeholder.svg';
    };

    return (
        <div className="container mx-auto px-4 py-24 min-h-screen">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold mb-8">Giỏ hàng của bạn</h1>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Danh sách sản phẩm */}
                    <div className="lg:w-2/3">
                        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                            <div className="hidden md:grid grid-cols-12 gap-4 p-4 bg-gray-50 text-sm font-medium text-gray-600">
                                <div className="col-span-1"></div>
                                <div className="col-span-5">Sản phẩm</div>
                                <div className="col-span-2 text-center">
                                    Giá
                                </div>
                                <div className="col-span-2 text-center">
                                    Số lượng
                                </div>
                                <div className="col-span-2 text-center">
                                    Tổng
                                </div>
                            </div>

                            {cartItems.map((item) => (
                                <div
                                    key={item.productId}
                                    className="border-t border-gray-100 p-4">
                                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                                        {/* Checkbox */}
                                        <div className="md:col-span-1 flex items-center">
                                            <input
                                                type="checkbox"
                                                checked={selectedItems.includes(
                                                    item.productId
                                                )}
                                                onChange={() =>
                                                    toggleItemSelection(
                                                        item.productId
                                                    )
                                                }
                                                className="w-4 h-4"
                                            />
                                        </div>

                                        {/* Sản phẩm */}
                                        <div className="col-span-5 flex items-center gap-4">
                                            <img
                                                src={getProductImage(
                                                    item.productId
                                                )}
                                                alt={item.title}
                                                className="w-16 h-16 object-cover rounded"
                                            />
                                            <div>
                                                <h3 className="font-medium text-gray-800">
                                                    {item.title}
                                                </h3>
                                                <div className="flex items-center gap-2 mt-1">
                                                    <button
                                                        onClick={() =>
                                                            removeFromCart(
                                                                item.productId
                                                            )
                                                        }
                                                        className="text-sm text-red-500 flex items-center gap-1 hover:text-red-700">
                                                        <Trash2 size={14} />
                                                        <span>Xóa</span>
                                                    </button>
                                                    <Link
                                                        to={`/san-pham/${item.productId}`}
                                                        className="text-sm text-blue-500 hover:text-blue-700">
                                                        Xem chi tiết
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Giá */}
                                        <div className="col-span-2 text-center">
                                            <span className="md:hidden inline-block w-20 font-medium">
                                                Giá:
                                            </span>
                                            ${item.price}
                                        </div>

                                        {/* Số lượng */}
                                        <div className="col-span-2 flex justify-center">
                                            <div className="flex items-center border rounded-md">
                                                <button
                                                    onClick={() =>
                                                        updateQuantity(
                                                            item.productId,
                                                            item.quantity - 1
                                                        )
                                                    }
                                                    className="px-2 py-1 text-gray-600 hover:bg-gray-100">
                                                    <Minus size={16} />
                                                </button>
                                                <span className="w-10 text-center">
                                                    {item.quantity}
                                                </span>
                                                <button
                                                    onClick={() =>
                                                        updateQuantity(
                                                            item.productId,
                                                            item.quantity + 1
                                                        )
                                                    }
                                                    className="px-2 py-1 text-gray-600 hover:bg-gray-100">
                                                    <Plus size={16} />
                                                </button>
                                            </div>
                                        </div>

                                        {/* Tổng */}
                                        <div className="col-span-2 text-center font-medium">
                                            <span className="md:hidden inline-block w-20 font-medium">
                                                Tổng:
                                            </span>
                                            $
                                            {(
                                                item.price * item.quantity
                                            ).toFixed(2)}
                                        </div>
                                    </div>
                                </div>
                            ))}

                            <div className="p-4 border-t border-gray-100">
                                <button
                                    onClick={clearCart}
                                    className="text-sm text-red-500 hover:text-red-700">
                                    Xóa tất cả
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Tổng đơn hàng */}
                    <div className="lg:w-1/3">
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <h2 className="text-xl font-bold mb-4">
                                Tổng đơn hàng
                            </h2>

                            <div className="space-y-3 mb-6">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">
                                        Tạm tính ({selectedItems.length} sản
                                        phẩm)
                                    </span>
                                    <span>
                                        ${getSelectedTotal().toFixed(2)}
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">
                                        Phí vận chuyển
                                    </span>
                                    <span>Miễn phí</span>
                                </div>
                                <div className="border-t pt-3 flex justify-between font-bold">
                                    <span>Tổng cộng</span>
                                    <span>
                                        ${getSelectedTotal().toFixed(2)}
                                    </span>
                                </div>
                            </div>

                            <button
                                className={`w-full py-3 rounded-md transition-colors ${
                                    selectedItems.length > 0
                                        ? 'bg-black text-white hover:bg-gray-800'
                                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                }`}
                                disabled={selectedItems.length === 0}>
                                Thanh toán
                            </button>

                            <div className="mt-4">
                                <Link
                                    to="/san-pham"
                                    className="text-sm text-gray-600 hover:text-gray-800">
                                    ← Tiếp tục mua sắm
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
