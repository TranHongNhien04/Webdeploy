import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import EditProfileModal from './EditProfileModal';

export default function UserProfileDetails({ user, onUserUpdate }) {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Tải lịch đặt tư vấn của người dùng
        async function fetchUserBookings() {
            if (!user || !user.id) return;

            setLoading(true);
            try {
                // Tìm tất cả các booking có userId trùng với id của người dùng hiện tại
                const response = await fetch(
                    `http://localhost:3001/bookings?userId=${user.id}`
                );

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();
                console.log('Lịch đặt tư vấn của người dùng:', data);
                setBookings(data);
                setError(null);
            } catch (err) {
                console.error('Error fetching user bookings:', err);
                setError(
                    'Không thể tải lịch đặt tư vấn. Vui lòng thử lại sau.'
                );
            } finally {
                setLoading(false);
            }
        }

        fetchUserBookings();
    }, [user]);

    if (!user) return null;

    const getServiceName = (serviceId) => {
        const serviceMap = {
            skincare: 'Tư vấn chăm sóc da mặt',
            makeup: 'Tư vấn trang điểm',
            body: 'Tư vấn chăm sóc cơ thể',
            hair: 'Tư vấn chăm sóc tóc',
            bodycare: 'Tư vấn chăm sóc cơ thể',
            haircare: 'Tư vấn chăm sóc tóc',
        };

        return serviceMap[serviceId] || 'Dịch vụ khác';
    };

    const getSkinTypeName = (skinType) => {
        const skinTypeMap = {
            oily: 'Da dầu',
            dry: 'Da khô',
            sensitive: 'Da nhạy cảm',
            combination: 'Da hỗn hợp',
            normal: 'Da thường',
        };

        return skinTypeMap[skinType] || skinType || 'Chưa xác định';
    };

    const getStatusName = (status) => {
        const statusMap = {
            pending: 'Chờ xác nhận',
            confirmed: 'Đã xác nhận',
            completed: 'Đã hoàn thành',
            cancelled: 'Đã hủy',
        };

        return statusMap[status] || 'Không xác định';
    };

    const getStatusColor = (status) => {
        const statusColorMap = {
            pending: 'bg-yellow-100 text-yellow-800',
            confirmed: 'bg-blue-100 text-blue-800',
            completed: 'bg-green-100 text-green-800',
            cancelled: 'bg-red-100 text-red-800',
        };

        return statusColorMap[status] || 'bg-gray-100 text-gray-800';
    };

    const formatDate = (dateString) => {
        try {
            const date = new Date(dateString);
            return date.toLocaleDateString('vi-VN');
        } catch (error) {
            return dateString;
        }
    };

    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="bg-gray-100 p-6 flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-800">
                    Thông tin cá nhân
                </h2>
                <button
                    onClick={() => setIsEditModalOpen(true)}
                    className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors">
                    Chỉnh sửa
                </button>
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
                        {getSkinTypeName(user.skinType)}
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

                {/* Hiển thị lịch đặt tư vấn */}
                {loading ? (
                    <div className="border-t border-gray-200 pt-4 mt-4">
                        <h4 className="font-semibold mb-2">Lịch đặt tư vấn</h4>
                        <p className="text-gray-500">
                            Đang tải lịch đặt tư vấn...
                        </p>
                    </div>
                ) : error ? (
                    <div className="border-t border-gray-200 pt-4 mt-4">
                        <h4 className="font-semibold mb-2">Lịch đặt tư vấn</h4>
                        <p className="text-red-500">{error}</p>
                    </div>
                ) : bookings.length > 0 ? (
                    <div className="border-t border-gray-200 pt-4 mt-4">
                        <h4 className="font-semibold mb-2">Lịch đặt tư vấn</h4>
                        <div className="space-y-4">
                            {bookings.map((booking) => (
                                <div
                                    key={booking.id}
                                    className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                                    <div className="flex justify-between items-start mb-2">
                                        <div>
                                            <h5 className="font-medium text-lg">
                                                {getServiceName(
                                                    booking.service
                                                )}
                                            </h5>
                                            <p className="text-sm text-gray-600">
                                                Ngày hẹn:{' '}
                                                {formatDate(booking.date)}
                                            </p>
                                        </div>
                                        <span
                                            className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                                                booking.status
                                            )}`}>
                                            {getStatusName(booking.status)}
                                        </span>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm mb-2">
                                        <p>
                                            <span className="font-medium">
                                                Loại da:
                                            </span>{' '}
                                            {getSkinTypeName(booking.skinType)}
                                        </p>
                                        <p>
                                            <span className="font-medium">
                                                Số điện thoại:
                                            </span>{' '}
                                            {booking.phone}
                                        </p>
                                    </div>
                                    <p className="text-sm text-gray-700 border-t pt-2 mt-2">
                                        <span className="font-medium">
                                            Nhu cầu:
                                        </span>{' '}
                                        {booking.message}
                                    </p>
                                    <p className="text-xs text-gray-500 mt-2">
                                        Đặt lịch vào:{' '}
                                        {new Date(
                                            booking.createdAt
                                        ).toLocaleString('vi-VN')}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="border-t border-gray-200 pt-4 mt-4">
                        <h4 className="font-semibold mb-2">Lịch đặt tư vấn</h4>
                        <p className="text-gray-500">
                            Bạn chưa có lịch đặt tư vấn nào.
                        </p>
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

            <EditProfileModal
                isOpen={isEditModalOpen}
                onClose={() => setIsEditModalOpen(false)}
                user={user}
                onUserUpdate={onUserUpdate}
            />
        </div>
    );
}
