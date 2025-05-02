import { Link } from 'react-router-dom';
import SearchIcon from '../assets/img/icons/loupe.png';
import BasketIcon from '../assets/img/icons/basket.png';
import { useState, useRef, useEffect } from 'react';
import LoginModal from './LoginModal';
import { useAuth } from '../context/AuthContext';
import { ChevronDown, User, LogOut, Settings } from 'lucide-react';

export default function Header() {
    const [count, setCount] = useState(0);
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const { user, logout, isAuthenticated } = useAuth();

    // Debug logs
    useEffect(() => {
        console.log('Header - User:', user);
        console.log('Header - isAuthenticated:', isAuthenticated);
    }, [user, isAuthenticated]);

    const openLoginModal = () => setIsLoginModalOpen(true);
    const closeLoginModal = () => setIsLoginModalOpen(false);
    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

    // Đóng dropdown khi click ra ngoài
    useEffect(() => {
        function handleClickOutside(event) {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setIsDropdownOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Render user section based on authentication status
    const renderUserSection = () => {
        if (user) {
            return (
                <div className="relative" ref={dropdownRef}>
                    <button
                        className="flex items-center gap-2 text-sm font-medium hover:underline"
                        onClick={toggleDropdown}>
                        <span>Xin chào, {user.name}</span>
                        <ChevronDown size={16} />
                    </button>

                    {isDropdownOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                            <Link
                                to="/tai-khoan"
                                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                onClick={() => setIsDropdownOpen(false)}>
                                <User size={16} className="mr-2" />
                                Hồ sơ người dùng
                            </Link>

                            <button
                                className="flex items-center w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                onClick={() => {
                                    logout();
                                    setIsDropdownOpen(false);
                                    window.location.reload();
                                }}>
                                <LogOut size={16} className="mr-2" />
                                Đăng xuất
                            </button>
                        </div>
                    )}
                </div>
            );
        } else {
            return (
                <button
                    className="bg-black text-white text-sm font-medium px-4 py-1.5 rounded-full hover:bg-gray-900 transition"
                    onClick={openLoginModal}>
                    Đăng nhập
                </button>
            );
        }
    };

    return (
        <>
            <header className="bg-white shadow-md">
                <div className="px-6 py-4 flex justify-between items-center rounded-b-lg bg-white/20 space-x-5">
                    <div className="flex items-baseline">
                        <span className="text-2xl font-extrabold text-gray-900 tracking-wide uppercase">
                            FRUVIA
                        </span>
                        <span className="text-2xl font-medium text-gray-500 tracking-widest uppercase">
                            BEAUTY
                        </span>
                    </div>

                    <nav className="hidden md:flex space-x-10 text-base text-gray-800 font-semibold">
                        <Link to="/" className="hover:text-black">
                            Trang chủ
                        </Link>
                        <Link to="/san-pham" className="hover:text-black">
                            Sản phẩm
                        </Link>
                        <Link to="/dich-vu" className="hover:text-black">
                            Dịch vụ
                        </Link>
                        <Link to="/gioi-thieu" className="hover:text-black">
                            Giới thiệu
                        </Link>
                        <Link to="/lien-he" className="hover:text-black">
                            Liên hệ
                        </Link>
                    </nav>

                    <div className="w-64 hidden md:flex items-center bg-white bg-opacity-40 rounded-full px-3 py-2 mx-6">
                        <img
                            src={SearchIcon}
                            alt="Search Icon"
                            className="w-4 h-4 mr-2 opacity-60"
                        />
                        <input
                            type="text"
                            placeholder="Tìm kiếm..."
                            className="bg-transparent flex-1 focus:outline-none text-sm text-gray-800"
                        />
                    </div>

                    <div className="flex items-center space-x-4">
                        <Link
                            to="/gio-hang"
                            className="hidden md:flex text-base text-gray-800 font-semibold gap-1">
                            <img
                                src={BasketIcon}
                                alt="Giỏ hàng"
                                className="h-6"
                            />
                            <span>Giỏ hàng ({count})</span>
                        </Link>

                        {renderUserSection()}
                    </div>
                </div>
            </header>

            <LoginModal isOpen={isLoginModalOpen} onClose={closeLoginModal} />
        </>
    );
}
