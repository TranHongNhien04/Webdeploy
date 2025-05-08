import { useState, useEffect } from 'react';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [filters, setFilters] = useState({
        name: '',
        role: '',
    });

    // Fetch user data
    useEffect(() => {
        fetch('http://localhost:3001/users')
            .then((response) => response.json())
            .then((data) => {
                setUsers(data);
                setFilteredUsers(data);
            })
            .catch((error) => console.error('Error fetching users:', error));
    }, []);

    // Apply filters
    useEffect(() => {
        let filtered = users;

        if (filters.name) {
            filtered = filtered.filter((user) =>
                user.name.toLowerCase().includes(filters.name.toLowerCase())
            );
        }
        if (filters.role) {
            filtered = filtered.filter((user) => user.role === filters.role);
        }

        setFilteredUsers(filtered);
        setCurrentPage(1);
    }, [filters, users]);

    // Handle filter changes
    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Pagination logic
    const totalPages = Math.ceil(filteredUsers.length / rowsPerPage);
    const paginatedUsers = filteredUsers.slice(
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
            <h2 className="text-xl font-semibold mb-4">Quản lý người dùng</h2>
            <div className="bg-white p-6 rounded-lg shadow">
                <div className="mb-4 p-4 border rounded">
                    <h3 className="text-lg font-semibold mb-2">Bộ lọc người dùng</h3>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block mb-1">Tên</label>
                            <input
                                type="text"
                                name="name"
                                value={filters.name}
                                onChange={handleFilterChange}
                                className="w-full p-2 border rounded"
                                placeholder="Nhập tên..."
                            />
                        </div>
                        <div>
                            <label className="block mb-1">Vai trò</label>
                            <select
                                name="role"
                                value={filters.role}
                                onChange={handleFilterChange}
                                className="w-full p-2 border rounded"
                            >
                                <option value="">Tất cả</option>
                                <option value="Admin">Admin</option>
                                <option value="Staff">Staff</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="flex justify-end mb-4">
                    <button className="bg-green-500 text-white px-4 py-2 rounded">
                        Thêm người dùng
                    </button>
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
                        {paginatedUsers.map((user) => (
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
                <div className="flex justify-between items-center mt-4">
                    <p>{filteredUsers.length} kết quả</p>
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

export default Users;