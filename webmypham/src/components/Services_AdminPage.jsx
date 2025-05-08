const Services = () => {
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

export default Services;