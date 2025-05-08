import { useState, useEffect } from 'react';
import * as XLSX from 'xlsx'; // Requires: npm install xlsx

const Dashboard = () => {
    const [reportData, setReportData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [revenue, setRevenue] = useState(0);
    const [profit, setProfit] = useState(0);
    const [newCustomers, setNewCustomers] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [filters, setFilters] = useState({
        startDate: '',
        endDate: '',
        status: '',
    });
    const [selectAll, setSelectAll] = useState(false);
    const [selectedOrders, setSelectedOrders] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState(null);

    // Helper to format date from "6/5/2025" to "06/05/2025"
    const formatDate = (dateStr) => {
        const [day, month, year] = dateStr.split('/');
        return `${day.padStart(2, '0')}/${month.padStart(2, '0')}/${year}`;
    };

    // Helper to format currency in VND
    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
        }).format(amount);
    };

    // Helper to determine delivery status based on order age
    const getStatus = (orderDate) => {
        const [day, month, year] = orderDate.split('/').map(Number);
        const orderDateObj = new Date(year, month - 1, day);
        const today = new Date('2025-05-08'); // Current date from context
        const diffDays = Math.floor((today - orderDateObj) / (1000 * 60 * 60 * 24));

        if (diffDays <= 7) {
            return { status: 'Chưa giao', statusColor: 'text-blue-500' };
        } else if (diffDays <= 14) {
            return { status: 'Đang giao', statusColor: 'text-yellow-500' };
        } else {
            return { status: 'Đã giao', statusColor: 'text-green-500' };
        }
    };

    // Convert date string "DD/MM/YYYY" to Date object for comparison
    const parseDate = (dateStr) => {
        const [day, month, year] = dateStr.split('/').map(Number);
        return new Date(year, month - 1, day);
    };

    // Fetch and process order data
    useEffect(() => {
        fetch('http://localhost:3001/users')
            .then((response) => response.json())
            .then((users) => {
                const orders = users
                    .filter((user) => user.orders && user.orders.length > 0)
                    .flatMap((user) =>
                        user.orders.map((order) => ({
                            ...order,
                            customerName: user.name,
                            userId: user.id,
                        }))
                    );

                const formattedData = orders.map((order) => {
                    const statusInfo = getStatus(order.date);
                    return {
                        orderId: order.id,
                        name: order.customerInfo.fullName,
                        value: formatCurrency(order.totalAmount),
                        date: formatDate(order.date),
                        rawDate: order.date,
                        status: statusInfo.status,
                        statusColor: statusInfo.statusColor,
                    };
                });
                setReportData(formattedData);
                setFilteredData(formattedData);

                const totalRevenue = orders.reduce((sum, order) => sum + order.totalAmount, 0);
                setRevenue(totalRevenue);
                const profitMargin = 0.35;
                setProfit(totalRevenue * profitMargin);
                const uniqueUsers = new Set(
                    orders.filter((order) => order.date.startsWith('5/')).map((order) => order.userId)
                );
                setNewCustomers(uniqueUsers.size);
            })
            .catch((error) => console.error('Error fetching orders:', error));
    }, []);

    // Apply filters
    useEffect(() => {
        let filtered = reportData;

        if (filters.startDate) {
            const start = new Date(filters.startDate);
            filtered = filtered.filter((order) => parseDate(order.rawDate) >= start);
        }
        if (filters.endDate) {
            const end = new Date(filters.endDate);
            filtered = filtered.filter((order) => parseDate(order.rawDate) <= end);
        }
        if (filters.status) {
            filtered = filtered.filter((order) => order.status === filters.status);
        }

        setFilteredData(filtered);
        setCurrentPage(1);
        setSelectedOrders([]);
        setSelectAll(false);
    }, [filters, reportData]);

    // Handle filter changes
    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Pagination logic
    const totalPages = Math.ceil(filteredData.length / rowsPerPage);
    const paginatedData = filteredData.slice(
        (currentPage - 1) * rowsPerPage,
        currentPage * rowsPerPage
    );

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
            setSelectAll(false);
            setSelectedOrders([]);
        }
    };

    const handleRowsPerPageChange = (e) => {
        setRowsPerPage(Number(e.target.value));
        setCurrentPage(1);
        setSelectAll(false);
        setSelectedOrders([]);
    };

    // Handle select all checkbox
    const handleSelectAll = () => {
        setSelectAll(!selectAll);
        if (!selectAll) {
            const currentPageIndices = paginatedData.map((_, index) =>
                getGlobalIndex(index)
            );
            setSelectedOrders(currentPageIndices);
        } else {
            setSelectedOrders([]);
        }
    };

    // Helper to get global index in filteredData
    const getGlobalIndex = (localIndex) => {
        return (currentPage - 1) * rowsPerPage + localIndex;
    };

    // Handle individual row checkbox
    const handleRowSelect = (index) => {
        const globalIndex = getGlobalIndex(index);
        setSelectedOrders((prev) => {
            if (prev.includes(globalIndex)) {
                const newSelected = prev.filter((i) => i !== globalIndex);
                setSelectAll(newSelected.length === paginatedData.length);
                return newSelected;
            } else {
                const newSelected = [...prev, globalIndex];
                setSelectAll(newSelected.length === paginatedData.length);
                return newSelected;
            }
        });
    };

    // Update status of selected orders
    const handlePrepareAndDeliver = () => {
        const updatedData = [...reportData];
        let changesMade = false;

        selectedOrders.forEach((globalIndex) => {
            const order = updatedData[globalIndex];
            if (order && order.status === 'Chưa giao') {
                order.status = 'Đang giao';
                order.statusColor = 'text-yellow-500';
                changesMade = true;
            }
        });

        if (changesMade) {
            setReportData(updatedData);
            setFilteredData(updatedData);
            setSelectedOrders([]);
            setSelectAll(false);
        }
    };

    // Export to Excel
    const handleExport = () => {
        const exportData = filteredData.map((row) => ({
            'Tên khách hàng': row.name,
            'Giá trị đơn hàng': row.value,
            'Ngày đặt hàng': row.date,
            'Trạng thái': row.status,
        }));

        const worksheet = XLSX.utils.json_to_sheet(exportData);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Orders');
        XLSX.writeFile(workbook, 'orders_export.xlsx');
    };

    // Handle view order details
    const handleViewDetails = (order) => {
        setSelectedOrder(order);
        setShowModal(true);
    };

    // Close modal
    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedOrder(null);
    };

    return (
        <div>
            <div className="grid grid-cols-3 gap-6 mb-6">
                <div className="bg-white p-6 rounded-lg shadow">
                    <h2 className="text-lg font-semibold">Doanh thu</h2>
                    <p className="text-3xl font-bold">{formatCurrency(revenue)}</p>
                    <p className="text-green-500">+5.39% so với kỳ trước</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                    <h2 className="text-lg font-semibold">Lợi nhuận</h2>
                    <p className="text-3xl font-bold">{formatCurrency(profit)}</p>
                    <p className="text-green-500">+5.39% so với kỳ trước</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                    <h2 className="text-lg font-semibold">Khách hàng mới</h2>
                    <p className="text-3xl font-bold">{newCustomers}</p>
                    <p className="text-green-500">+6.84% so với kỳ trước</p>
                </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
                <div className="mb-4 p-4 border rounded">
                    <h3 className="text-lg font-semibold mb-2">Bộ lọc đơn hàng</h3>
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
                                <option value="Chưa giao">Chưa giao</option>
                                <option value="Đang giao">Đang giao</option>
                                <option value="Đã giao">Đã giao</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold">Báo cáo chi tiết đơn hàng</h2>
                    <div className="flex items-center space-x-2">
                        <button
                            onClick={handlePrepareAndDeliver}
                            disabled={selectedOrders.length === 0}
                            className={`px-4 py-2 rounded font-semibold ${selectedOrders.length === 0
                                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                : 'bg-green-500 text-white'
                                }`}
                        >
                            Chuẩn bị và giao
                        </button>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded">Nhập</button>
                        <button
                            onClick={handleExport}
                            className="bg-blue-500 text-white px-4 py-2 rounded"
                        >
                            Xuất
                        </button>
                    </div>
                </div>
                <table className="w-full text-left">
                    <thead>
                        <tr className="border-b">
                            <th className="p-2">
                                <input
                                    type="checkbox"
                                    checked={selectAll}
                                    onChange={handleSelectAll}
                                />
                            </th>
                            <th className="p-2">Tên khách hàng</th>
                            <th className="p-2">Giá trị đơn hàng</th>
                            <th className="p-2">Ngày đặt hàng</th>
                            <th className="p-2">Trạng thái</th>
                            <th className="p-2">Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paginatedData.map((row, index) => (
                            <tr key={index} className="border-b">
                                <td className="p-2">
                                    <input
                                        type="checkbox"
                                        checked={selectedOrders.includes(getGlobalIndex(index))}
                                        onChange={() => handleRowSelect(index)}
                                    />
                                </td>
                                <td className="p-2 flex items-center">
                                    <div className="w-8 h-8 bg-gray-300 rounded-full mr-2"></div>
                                    {row.name}
                                </td>
                                <td className="p-2">{row.value}</td>
                                <td className="p-2">{row.date}</td>
                                <td className={`p-2 ${row.statusColor}`}>{row.status}</td>
                                <td className="p-2">
                                    <button
                                        onClick={() => handleViewDetails(row)}
                                        className="text-blue-500 hover:underline"
                                    >
                                        Xem
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Modal for Order Details */}
                {showModal && selectedOrder && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                            <h3 className="text-lg font-semibold mb-4">Chi tiết đơn hàng</h3>
                            <div className="space-y-2">
                                <p><strong>Mã đơn hàng:</strong> {selectedOrder.orderId}</p>
                                <p><strong>Tên khách hàng:</strong> {selectedOrder.name}</p>
                                <p><strong>Giá trị đơn hàng:</strong> {selectedOrder.value}</p>
                                <p><strong>Ngày đặt hàng:</strong> {selectedOrder.date}</p>
                                <p><strong>Trạng thái:</strong> {selectedOrder.status}</p>
                            </div>
                            <div className="mt-6 text-right">
                                <button
                                    onClick={handleCloseModal}
                                    className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
                                >
                                    Đóng
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                <div className="flex justify-between items-center mt-4">
                    <p>{filteredData.length} kết quả</p>
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
                                    className={`px-3 py-1 rounded ${currentPage === page
                                        ? 'bg-blue-500 text-white'
                                        : 'border'
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

export default Dashboard;