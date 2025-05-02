import React from 'react';
import { Link } from 'react-router-dom';

export default function UserProfileDetails({ user }) {
    if (!user) return null;

    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="bg-gray-100 p-6">
                <h2 className="text-2xl font-bold text-gray-800">
                    Thông tin cá nhân
                </h2>
            </div>

            <div className="p-6">
                <div className="flex items-center space-x-4 mb-6">
                    <div className="bg-gray-200 rounded-full h-16 w-16 flex items-center justify-center">
                        <span className="text-2xl font-bold text-gray-600">
                            {user.name.charAt(0).toUpperCase()}
                        </span>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold">{user.name}</h3>
                        <p className="text-gray-600">{user.email}</p>
                    </div>
                </div>

                <div className="border-t border-gray-200 pt-4 mt-4">
                    <h4 className="font-semibold mb-2">Thông tin chi tiết</h4>
                    <p className="text-sm text-gray-600 mb-1">
                        <span className="font-medium">Loại da:</span>{' '}
                        {user.skinType || 'Chưa cập nhật'}
                    </p>
                    <p className="text-sm text-gray-600">
                        <span className="font-medium">Sản phẩm yêu thích:</span>{' '}
                        {user.wishlist?.length || 0} sản phẩm
                    </p>
                </div>

                {user.wishlist && user.wishlist.length > 0 && (
                    <div className="border-t border-gray-200 pt-4 mt-4">
                        <h4 className="font-semibold mb-2">
                            Sản phẩm yêu thích
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {user.wishlist.map((productId) => (
                                <div
                                    key={productId}
                                    className="border rounded p-3 flex justify-between items-center">
                                    <p>Sản phẩm ID: {productId}</p>
                                    <Link
                                        to={`/san-pham/${productId}`}
                                        className="text-sm text-blue-600 hover:underline">
                                        Xem chi tiết
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {user.orders && user.orders.length > 0 && (
                    <div className="border-t border-gray-200 pt-4 mt-4">
                        <h4 className="font-semibold mb-2">Lịch sử đơn hàng</h4>
                        <div className="space-y-4">
                            {user.orders.map((order) => (
                                <div
                                    key={order.id}
                                    className="border rounded p-4">
                                    <div className="flex justify-between mb-2">
                                        <p className="font-medium">
                                            Đơn hàng: {order.id}
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            {order.date}
                                        </p>
                                    </div>
                                    <p className="text-sm mb-2">
                                        <span className="font-medium">
                                            Trạng thái:
                                        </span>{' '}
                                        <span className="capitalize">
                                            {order.status}
                                        </span>
                                    </p>
                                    <p className="text-sm mb-2">
                                        <span className="font-medium">
                                            Số lượng sản phẩm:
                                        </span>{' '}
                                        {order.items.length}
                                    </p>
                                    <p className="text-sm font-medium">
                                        Tổng tiền: ${order.total}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
