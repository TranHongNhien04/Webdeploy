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

export default Users;