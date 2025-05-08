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

export default Contact;