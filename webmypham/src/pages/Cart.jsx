import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Trash2, Plus, Minus } from 'lucide-react';

export default function Cart() {
    const {
        cartItems,
        removeFromCart,
        updateQuantity,
        getCartTotal,
        clearCart,
    } = useCart();

    if (cartItems.length === 0) {
        return (
            <div className="container mx-auto px-4 py-24 min-h-screen">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-3xl font-bold mb-6">
                        Giỏ hàng của bạn
                    </h1>
                    <div className="bg-white p-8 rounded-lg shadow-sm">
                        <p className="text-gray-600 mb-6">
                            Giỏ hàng của bạn đang trống
                        </p>
                        <Link
                            to="/san-pham"
                            className="inline-block bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition">
                            Tiếp tục mua sắm
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-24 min-h-screen">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold mb-8">Giỏ hàng của bạn</h1>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Danh sách sản phẩm */}
                    <div className="lg:w-2/3">
                        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                            <div className="hidden md:grid grid-cols-12 gap-4 p-4 bg-gray-50 text-sm font-medium text-gray-600">
                                <div className="col-span-6">Sản phẩm</div>
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
                                        {/* Sản phẩm */}
                                        <div className="col-span-6 flex items-center gap-4">
                                            <img
                                                src={
                                                    item.image ||
                                                    '/placeholder.svg'
                                                }
                                                alt={item.title}
                                                className="w-16 h-16 object-cover rounded"
                                            />
                                            <div>
                                                <h3 className="font-medium text-gray-800">
                                                    {item.title}
                                                </h3>
                                                <button
                                                    onClick={() =>
                                                        removeFromCart(
                                                            item.productId
                                                        )
                                                    }
                                                    className="text-sm text-red-500 flex items-center gap-1 mt-1 hover:text-red-700">
                                                    <Trash2 size={14} />
                                                    <span>Xóa</span>
                                                </button>
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

                            <div className="p-4 border-t border-gray-100 flex justify-between">
                                <button
                                    onClick={clearCart}
                                    className="text-sm text-red-500 hover:text-red-700">
                                    Xóa tất cả
                                </button>
                                <Link
                                    to="/san-pham"
                                    className="text-sm text-blue-600 hover:text-blue-800">
                                    Tiếp tục mua sắm
                                </Link>
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
                                <div className="flex justify-between text-gray-600">
                                    <span>Tạm tính</span>
                                    <span>${getCartTotal().toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span>Phí vận chuyển</span>
                                    <span>Miễn phí</span>
                                </div>
                                <div className="border-t pt-3 mt-3 flex justify-between font-bold text-lg">
                                    <span>Tổng cộng</span>
                                    <span>${getCartTotal().toFixed(2)}</span>
                                </div>
                            </div>

                            <button className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition">
                                Tiến hành thanh toán
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
