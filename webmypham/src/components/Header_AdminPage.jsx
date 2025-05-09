import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
const Header = () => {
    return (
        <header className="w-full flex justify-between items-center mb-6 px-6">
            <h1 className="text-2xl font-bold text-gray-800">Quản lý Admin</h1>
            <Link
                to="/"
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors">
                <Home size={18} />
                <span>Quay lại trang chủ</span>
            </Link>
        </header>
    );
};



export default Header;
