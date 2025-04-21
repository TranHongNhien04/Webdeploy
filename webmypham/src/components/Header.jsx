import { Link } from 'react-router-dom';
import SearchIcon from '../assets/img/icons/loupe.png';
import BasketIcon from '../assets/img/icons/basket.png';

export default function Header() {
    return (
        <header className="absolute top-0 left-0 w-full z-20 backdrop-blur-md bg-white/30 shadow-sm">
            <div className=" px-6 py-4 flex justify-between items-center rounded-b-lg bg-white/20  space-x-5">
                <div className="flex items-baseline ">
                    <span className="text-2xl font-extrabold text-gray-900 tracking-wide uppercase">
                        FRUVIA
                    </span>
                    <span className="text-2xl font-medium text-gray-500 tracking-widest uppercase">
                        BEAUTY
                    </span>
                </div>

                <nav className="hidden md:flex space-x-10 text-sm text-gray-800 font-medium">
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
                        className="text-gray-800 text-sm font-medium hover:text-black flex items-center space-x-1">
                        <img
                            src={BasketIcon}
                            alt="Giỏ hàng"
                            className="w-4 h-4"
                        />
                        <span>Giỏ hàng (0)</span>
                    </Link>

                    <button className="bg-black text-white text-sm font-medium px-4 py-1.5 rounded-full hover:bg-gray-900 transition">
                        Đăng nhập
                    </button>
                </div>
            </div>
        </header>
    );
}
