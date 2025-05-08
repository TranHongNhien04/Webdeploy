const Header = () => {
    return (
        <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Quản lý Admin</h1>
            <div className="flex items-center space-x-4">
                <input type="text" placeholder="Tìm kiếm..." className="border rounded px-3 py-1" />
                <button className="text-gray-600">🔔</button>
                <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
            </div>
        </div>
    );
};

export default Header;