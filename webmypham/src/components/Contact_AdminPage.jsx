import { useState, useEffect } from 'react';

const Contact = () => {
    const [inquiries, setInquiries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showReplyModal, setShowReplyModal] = useState(false);
    const [selectedInquiry, setSelectedInquiry] = useState(null);
    const [replyMessage, setReplyMessage] = useState('');

    const formatDate = (dateStr) => {
        const [year, month, day] = dateStr.split('-');
        return `${day.padStart(2, '0')}/${month.padStart(2, '0')}/${year}`;
    };

    useEffect(() => {
        setLoading(true);
        fetch('http://localhost:3001/contacts')
            .then((response) => {
                if (!response.ok) throw new Error('Network response was not ok');
                return response.json();
            })
            .then((data) => {
                setInquiries(data);
            })
            .catch((error) => {
                console.error('Error fetching inquiries:', error);
                setInquiries([]);
            })
            .finally(() => setLoading(false));
    }, []);

    const handleDelete = (id) => {
        if (window.confirm('Bạn có chắc chắn muốn xóa liên hệ này?')) {
            fetch(`http://localhost:3001/contacts/${id}`, {
                method: 'DELETE',
            })
                .then((response) => {
                    if (!response.ok) throw new Error('Failed to delete inquiry');
                    setInquiries(inquiries.filter((inquiry) => inquiry.id !== id));
                })
                .catch((error) => console.error('Error deleting inquiry:', error));
        }
    };

    const handleReply = (inquiry) => {
        setSelectedInquiry(inquiry);
        setShowReplyModal(true);
    };

    const handleSendReply = () => {
        if (!replyMessage.trim()) {
            alert('Vui lòng nhập nội dung phản hồi.');
            return;
        }
        console.log(`Gửi phản hồi tới ${selectedInquiry.email}: ${replyMessage}`);
        setShowReplyModal(false);
        setReplyMessage('');
        setSelectedInquiry(null);
        alert('Phản hồi đã được gửi!'); // Placeholder for actual email sending
    };

    const handleCloseModal = () => {
        setShowReplyModal(false);
        setReplyMessage('');
        setSelectedInquiry(null);
    };

    return (
        <div>
            <h2 className="text-xl font-semibold mb-4">Quản lý liên hệ</h2>
            <div className="bg-white p-6 rounded-lg shadow">
                {loading ? (
                    <div className="flex justify-center items-center h-32">Đang tải...</div>
                ) : inquiries.length === 0 ? (
                    <div className="text-center text-gray-500 py-4">Không có liên hệ nào.</div>
                ) : (
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
                                    <td className="p-2">{formatDate(inquiry.date)}</td>
                                    <td className="p-2 flex space-x-2">
                                        <button
                                            onClick={() => handleReply(inquiry)}
                                            className="text-blue-500 hover:underline"
                                        >
                                            Phản hồi
                                        </button>
                                        <button
                                            onClick={() => handleDelete(inquiry.id)}
                                            className="text-red-500 hover:underline"
                                        >
                                            Xóa
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>

            {showReplyModal && selectedInquiry && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                        <h3 className="text-lg font-semibold mb-4">Phản hồi liên hệ</h3>
                        <div className="space-y-2 mb-4">
                            <p><strong>Tên:</strong> {selectedInquiry.name}</p>
                            <p><strong>Email:</strong> {selectedInquiry.email}</p>
                            <p><strong>Lời nhắn:</strong> {selectedInquiry.message}</p>
                        </div>
                        <textarea
                            value={replyMessage}
                            onChange={(e) => setReplyMessage(e.target.value)}
                            placeholder="Nhập nội dung phản hồi..."
                            className="w-full p-2 border rounded mb-4"
                            rows="4"
                        />
                        <div className="flex justify-end space-x-2">
                            <button
                                onClick={handleCloseModal}
                                className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
                            >
                                Hủy
                            </button>
                            <button
                                onClick={handleSendReply}
                                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                            >
                                Gửi
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Contact;