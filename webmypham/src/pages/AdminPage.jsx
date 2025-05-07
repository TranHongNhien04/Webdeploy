import React, { useState } from 'react';

// AdminPage Component
export const AdminPage = () => {
    const [activeTab, setActiveTab] = useState('orders');

    // Sidebar Component
    const Sidebar = ({ activeTab, setActiveTab }) => {
        return (
            <div className="w-64 bg-indigo-600 text-white p-6">
                <div className="text-2xl font-bold mb-8">FRUVIA BEAUTY</div>
                <ul>
                    <li className={`mb-4 p-2 rounded ${activeTab === 'orders' ? 'bg-indigo-800' : ''}`}>
                        <button onClick={() => setActiveTab('orders')} className="w-full text-left">Quản lý đơn hàng</button>
                    </li>
                    <li className={`mb-4 p-2 rounded ${activeTab === 'products' ? 'bg-indigo-800' : ''}`}>
                        <button onClick={() => setActiveTab('products')} className="w-full text-left">Quản lý sản phẩm</button>
                    </li>
                    <li className={`mb-4 p-2 rounded ${activeTab === 'services' ? 'bg-indigo-800' : ''}`}>
                        <button onClick={() => setActiveTab('services')} className="w-full text-left">Quản lý dịch vụ</button>
                    </li>
                    <li className={`mb-4 p-2 rounded ${activeTab === 'contact' ? 'bg-indigo-800' : ''}`}>
                        <button onClick={() => setActiveTab('contact')} className="w-full text-left">Quản lý liên hệ</button>
                    </li>
                    <li className={`mb-4 p-2 rounded ${activeTab === 'users' ? 'bg-indigo-800' : ''}`}>
                        <button onClick={() => setActiveTab('users')} className="w-full text-left">Quản lý người dùng</button>
                    </li>
                    <li className={`mb-4 p-2 rounded ${activeTab === 'reports' ? 'bg-indigo-800' : ''}`}>
                        <button onClick={() => setActiveTab('reports')} className="w-full text-left">Báo cáo</button>
                    </li>
                    <li className={`mb-4 p-2 rounded ${activeTab === 'settings' ? 'bg-indigo-800' : ''}`}>
                        <button onClick={() => setActiveTab('settings')} className="w-full text-left">Cài đặt</button>
                    </li>
                </ul>
                <div className="mt-8 bg-pink-100 text-indigo-800 p-4 rounded-lg">
                    <p className="font-semibold">Phiên bản 2.0 đã có</p>
                    <button className="mt-2 bg-pink-500 text-white px-4 py-2 rounded">Thử ngay</button>
                </div>
            </div>
        );
    };

    // Dashboard Component (Quản lý đơn hàng)
    const Dashboard = () => {
        const reportData = [
            { name: 'Elizabeth Lee', company: 'AvatarSystems', value: '559.000 đ', date: '10/07/2023', status: 'Mới', statusColor: 'text-blue-500' },
            { name: 'Carlos Garcia', company: 'SnoozeShift', value: '747.000 đ', date: '24/07/2023', status: 'Mới', statusColor: 'text-blue-500' },
            { name: 'Elizabeth Bailey', company: 'Prime Time Telecom', value: '564.000 đ', date: '08/08/2023', status: 'Đang xử lý', statusColor: 'text-yellow-500' },
            { name: 'Ryan Brown', company: 'OmniTech Corporation', value: '541.000 đ', date: '31/08/2023', status: 'Đang xử lý', statusColor: 'text-yellow-500' },
            { name: 'Ryan Young', company: 'DataStream Inc.', value: '769.000 đ', date: '01/09/2023', status: 'Hoàn thành', statusColor: 'text-green-500' },
            { name: 'Hailey Adams', company: 'FlowRush', value: '922.000 đ', date: '10/06/2023', status: 'Hoàn thành', statusColor: 'text-green-500' },
        ];

        return (
            <div>
                {/* Metrics Cards */}
                <div className="grid grid-cols-3 gap-6 mb-6">
                    <div className="bg-white p-6 rounded-lg shadow">
                        <h2 className="text-lg font-semibold">Doanh thu</h2>
                        <p className="text-3xl font-bold">92,405.000 đ</p>
                        <p className="text-green-500">+5.39% so với kỳ trước</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow">
                        <h2 className="text-lg font-semibold">Lợi nhuận</h2>
                        <p className="text-3xl font-bold">32,218.000 đ</p>
                        <p className="text-green-500">+5.39% so với kỳ trước</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow">
                        <h2 className="text-lg font-semibold">Khách hàng mới</h2>
                        <p className="text-3xl font-bold">298</p>
                        <p className="text-green-500">+6.84% so với kỳ trước</p>
                    </div>
                </div>

                {/* Detailed Report Table */}
                <div className="bg-white p-6 rounded-lg shadow">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-semibold">Báo cáo chi tiết đơn hàng</h2>
                        <div>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2">Nhập</button>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded">Xuất</button>
                        </div>
                    </div>
                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-b">
                                <th className="p-2"><input type="checkbox" /></th>
                                <th className="p-2">Tên khách hàng</th>
                                <th className="p-2">Công ty</th>
                                <th className="p-2">Giá trị đơn hàng</th>
                                <th className="p-2">Ngày đặt hàng</th>
                                <th className="p-2">Trạng thái</th>
                                <th className="p-2"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {reportData.map((row, index) => (
                                <tr key={index} className="border-b">
                                    <td className="p-2"><input type="checkbox" /></td>
                                    <td className="p-2 flex items-center">
                                        <div className="w-8 h-8 bg-gray-300 rounded-full mr-2"></div>
                                        {row.name}
                                    </td>
                                    <td className="p-2">{row.company}</td>
                                    <td className="p-2">{row.value}</td>
                                    <td className="p-2">{row.date}</td>
                                    <td className={`p-2 ${row.statusColor}`}>{row.status}</td>
                                    <td className="p-2">✏️</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="flex justify-between items-center mt-4">
                        <p>63 kết quả</p>
                        <div className="flex space-x-2">
                            <button className="bg-blue-500 text-white px-3 py-1 rounded">1</button>
                            <button className="border px-3 py-1 rounded">2</button>
                            <button className="border px-3 py-1 rounded">3</button>
                            <button className="border px-3 py-1 rounded">4</button>
                            <button className="border px-3 py-1 rounded">...</button>
                            <button className="border px-3 py-1 rounded">10</button>
                            <button className="border px-3 py-1 rounded">11</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    // Products Component (Quản lý sản phẩm)
    const Products = () => {
        const products = [
            { id: 1, name: 'Sữa rửa mặt dịu nhẹ', description: 'Làm sạch sâu, không gây khô da', price: '200.000 đ', stock: 50 },
            { id: 2, name: 'Serum Vitamin C', description: 'Làm sáng da, mờ thâm nám', price: '150.000 đ', stock: 30 },
            { id: 3, name: 'Kem chống nắng SPF 50', description: 'Bảo vệ da khỏi tia UV', price: '210.000 đ', stock: 40 },
        ];

        return (
            <div>
                <h2 className="text-xl font-semibold mb-4">Quản lý sản phẩm</h2>
                <div className="bg-white p-6 rounded-lg shadow">
                    <div className="flex justify-end mb-4">
                        <button className="bg-green-500 text-white px-4 py-2 rounded">Thêm sản phẩm mới</button>
                    </div>
                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-b">
                                <th className="p-2">ID</th>
                                <th className="p-2">Tên sản phẩm</th>
                                <th className="p-2">Mô tả</th>
                                <th className="p-2">Giá</th>
                                <th className="p-2">Tồn kho</th>
                                <th className="p-2">Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product) => (
                                <tr key={product.id} className="border-b">
                                    <td className="p-2">{product.id}</td>
                                    <td className="p-2">{product.name}</td>
                                    <td className="p-2">{product.description}</td>
                                    <td className="p-2">{product.price}</td>
                                    <td className="p-2">{product.stock}</td>
                                    <td className="p-2 flex space-x-2">
                                        <button className="text-blue-500">Sửa</button>
                                        <button className="text-red-500">Xóa</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    };

    // Consultation Component (Quản lý dịch vụ)
    const Consultation = () => {
        const appointments = [
            { id: 1, customer: 'Nguyen Van A', date: '12/05/2025', status: 'Chờ xử lý' },
            { id: 2, customer: 'Tran Thi B', date: '13/05/2025', status: 'Đã xác nhận' },
        ];

        return (
            <div>
                <h2 className="text-xl font-semibold mb-4">Quản lý dịch vụ</h2>
                <div className="bg-white p-6 rounded-lg shadow">
                    <div className="flex justify-end mb-4">
                        <button className="bg-green-500 text-white px-4 py-2 rounded">Thêm lịch hẹn</button>
                    </div>
                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-b">
                                <th className="p-2">ID</th>
                                <th className="p-2">Tên khách hàng</th>
                                <th className="p-2">Ngày hẹn</th>
                                <th className="p-2">Trạng thái</th>
                                <th className="p-2">Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                            {appointments.map((appointment) => (
                                <tr key={appointment.id} className="border-b">
                                    <td className="p-2">{appointment.id}</td>
                                    <td className="p-2">{appointment.customer}</td>
                                    <td className="p-2">{appointment.date}</td>
                                    <td className="p-2">{appointment.status}</td>
                                    <td className="p-2 flex space-x-2">
                                        <button className="text-blue-500">Sửa</button>
                                        <button className="text-red-500">Xóa</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    };

    // Contact Component (Quản lý liên hệ)
    const Contact = () => {
        const inquiries = [
            { id: 1, name: 'Nguyen Van A', email: 'nguyen.a@example.com', message: 'Hỏi về sản phẩm Serum', date: '10/05/2025' },
            { id: 2, name: 'Tran Thi B', email: 'tran.b@example.com', message: 'Đặt lịch tư vấn', date: '11/05/2025' },
        ];

        return (
            <div>
                <h2 className="text-xl font-semibold mb-4">Quản lý liên hệ</h2>
                <div className="bg-white p-6 rounded-lg shadow">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-b">
                                <th className="p-2">ID</th>
                                <th className="p-2">Tên</th>
                                <th className="p-2">Email</th>
                                <th className="p-2">Lời nhắn</th>
                                <th className="p-2">Ngày gửi</th>
                                <th className="p-2">Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                            {inquiries.map((inquiry) => (
                                <tr key={inquiry.id} className="border-b">
                                    <td className="p-2">{inquiry.id}</td>
                                    <td className="p-2">{inquiry.name}</td>
                                    <td className="p-2">{inquiry.email}</td>
                                    <td className="p-2">{inquiry.message}</td>
                                    <td className="p-2">{inquiry.date}</td>
                                    <td className="p-2 flex space-x-2">
                                        <button className="text-blue-500">Phản hồi</button>
                                        <button className="text-red-500">Xóa</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    };

    // Users Component (Quản lý người dùng)
    const Users = () => {
        const users = [
            { id: 1, name: 'Nguyen Van A', role: 'Admin', email: 'nguyen.a@example.com' },
            { id: 2, name: 'Tran Thi B', role: 'Staff', email: 'tran.b@example.com' },
        ];

        return (
            <div>
                <h2 className="text-xl font-semibold mb-4">Quản lý người dùng</h2>
                <div className="bg-white p-6 rounded-lg shadow">
                    <div className="flex justify-end mb-4">
                        <button className="bg-green-500 text-white px-4 py-2 rounded">Thêm người dùng</button>
                    </div>
                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-b">
                                <th className="p-2">ID</th>
                                <th className="p-2">Tên</th>
                                <th className="p-2">Vai trò</th>
                                <th className="p-2">Email</th>
                                <th className="p-2">Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <tr key={user.id} className="border-b">
                                    <td className="p-2">{user.id}</td>
                                    <td className="p-2">{user.name}</td>
                                    <td className="p-2">{user.role}</td>
                                    <td className="p-2">{user.email}</td>
                                    <td className="p-2 flex space-x-2">
                                        <button className="text-blue-500">Sửa</button>
                                        <button className="text-red-500">Xóa</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    };

    // Reports Component (Báo cáo)
    const Reports = () => {
        return (
            <div>
                <h2 className="text-xl font-semibold mb-4">Báo cáo</h2>
                <div className="bg-white p-6 rounded-lg shadow">
                    <p className="text-lg">Xem báo cáo doanh thu, lợi nhuận, và hoạt động.</p>
                    <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Tải báo cáo</button>
                </div>
            </div>
        );
    };

    // Settings Component (Cài đặt)
    const Settings = () => {
        return (
            <div>
                <h2 className="text-xl font-semibold mb-4">Cài đặt</h2>
                <div className="bg-white p-6 rounded-lg shadow">
                    <p className="text-lg">Cấu hình hệ thống và thông tin admin.</p>
                    <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Lưu cài đặt</button>
                </div>
            </div>
        );
    };

    return (
        <div className="flex h-screen bg-gray-100 font-sans">
            {/* Sidebar */}
            <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

            {/* Main Content */}
            <div className="flex-1 p-6">
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold">Quản lý Admin</h1>
                    <div className="flex items-center space-x-4">
                        <input type="text" placeholder="Tìm kiếm..." className="border rounded px-3 py-1" />
                        <button className="text-gray-600">🔔</button>
                        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                    </div>
                </div>

                {/* Render Content Based on Active Tab */}
                {activeTab === 'orders' && <Dashboard />}
                {activeTab === 'products' && <Products />}
                {activeTab === 'services' && <Consultation />}
                {activeTab === 'contact' && <Contact />}
                {activeTab === 'users' && <Users />}
                {activeTab === 'reports' && <Reports />}
                {activeTab === 'settings' && <Settings />}
            </div>
        </div>
    );
};