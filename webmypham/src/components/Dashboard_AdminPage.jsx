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

export default Dashboard;