import { useState, useEffect } from 'react';

const Services = () => {
    const [appointments, setAppointments] = useState([]);
    const [filteredAppointments, setFilteredAppointments] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [filters, setFilters] = useState({
        startDate: '',
        endDate: '',
        status: '',
    });

    const formatDate = (dateStr) => {
        const [year, month, day] = dateStr.split('-');
        return `${day.padStart(2, '0')}/${month.padStart(2, '0')}/${year}`;
    };

    const parseDate = (dateStr) => {
        const [year, month, day] = dateStr.split('-').map(Number);
        return new Date(year, month - 1, day);
    };

    useEffect(() => {
        fetch('http://localhost:3001/bookings')
            .then((response) => response.json())
            .then((data) => {
                const formattedData = data.map((booking) => ({
                    id: booking.id,
                    customer: booking.name,
                    date: formatDate(booking.date),
                    rawDate: booking.date,
                    status: booking.status === 'pending' ? 'Chờ xử lý' : 'Đã xác nhận',
                }));
                setAppointments(formattedData);
                setFilteredAppointments(formattedData);
            })
            .catch((error) => console.error('Error fetching bookings:', error));
    }, []);

    useEffect(() => {
        let filtered = appointments;

        if (filters.startDate) {
            const start = new Date(filters.startDate);
            filtered = filtered.filter((app) => parseDate(app.rawDate) >= start);
        }
        if (filters.endDate) {
            const end = new Date(filters.endDate);
            filtered = filtered.filter((app) => parseDate(app.rawDate) <= end);
        }
        if (filters.status) {
            filtered = filtered.filter((app) => app.status === filters.status);
        }

        setFilteredAppointments(filtered);
        setCurrentPage(1);
    }, [filters, appointments]);

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters((prev) => ({ ...prev, [name]: value }));
    };

    const totalPages = Math.ceil(filteredAppointments.length / rowsPerPage);
    const paginatedAppointments = filteredAppointments.slice(
        (currentPage - 1) * rowsPerPage,
        currentPage * rowsPerPage
    );

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const handleRowsPerPageChange = (e) => {
        setRowsPerPage(Number(e.target.value));
        setCurrentPage(1);
    };

    return (
        <div>
            <h2 className="text-xl font-semibold mb-4">Quản lý dịch vụ</h2>
            <div className="bg-white p-6 rounded-lg shadow">
                <div className="mb-4 p-4 border rounded">
                    <h3 className="text-lg font-semibold mb-2">Bộ lọc lịch hẹn</h3>
                    <div className="grid grid-cols-3 gap-4">
                        <div>
                            <label className="block mb-1">Từ ngày</label>
                            <input
                                type="date"
                                name="startDate"
                                value={filters.startDate}
                                onChange={handleFilterChange}
                                className="w-full p-2 border rounded"
                            />
                        </div>
                        <div>
                            <label className="block mb-1">Đến ngày</label>
                            <input
                                type="date"
                                name="endDate"
                                value={filters.endDate}
                                onChange={handleFilterChange}
                                className="w-full p-2 border rounded"
                            />
                        </div>
                        <div>
                            <label className="block mb-1">Trạng thái</label>
                            <select
                                name="status"
                                value={filters.status}
                                onChange={handleFilterChange}
                                className="w-full p-2 border rounded"
                            >
                                <option value="">Tất cả</option>
                                <option value="Chờ xử lý">Chờ xử lý</option>
                                <option value="Đã xác nhận">Đã xác nhận</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="flex justify-end mb-4">
                    <button className="bg-green-500 text-white px-4 py-2 rounded">
                        Thêm lịch hẹn
                    </button>
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
                        {paginatedAppointments.map((appointment) => (
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
                <div className="flex justify-between items-center mt-4">
                    <p>{filteredAppointments.length} kết quả</p>
                    <div className="flex items-center space-x-2">
                        <div className="flex space-x-2">
                            <button
                                onClick={() => handlePageChange(currentPage - 1)}
                                disabled={currentPage === 1}
                                className="border px-3 py-1 rounded disabled:opacity-50"
                            >
                                Trước
                            </button>
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                <button
                                    key={page}
                                    onClick={() => handlePageChange(page)}
                                    className={`px-3 py-1 rounded ${currentPage === page ? 'bg-blue-500 text-white' : 'border'
                                        }`}
                                >
                                    {page}
                                </button>
                            ))}
                            <button
                                onClick={() => handlePageChange(currentPage + 1)}
                                disabled={currentPage === totalPages}
                                className="border px-3 py-1 rounded disabled:opacity-50"
                            >
                                Sau
                            </button>
                        </div>
                        <select
                            value={rowsPerPage}
                            onChange={handleRowsPerPageChange}
                            className="border p-2 rounded"
                        >
                            <option value={5}>5 hàng/trang</option>
                            <option value={10}>10 hàng/trang</option>
                            <option value={20}>20 hàng/trang</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;