import SearchIcon from "../assets/img/icons/loupe.png";
import BasketIcon from "../assets/img/icons/basket.png";
import AccountIcon from "../assets/img/icons/avatar.png";

export default function Header() {
    return (
        <header className="fixed top-0 w-full bg-white shadow-md z-10">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">

                <div className="text-xl font-extrabold text-gray-900 uppercase tracking-wide">
                    Fruvia Beauty
                </div>

                <div className="flex-1 mx-6 hidden md:flex items-center bg-gray-100 rounded-lg px-4 py-2">
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
                    <nav className="hidden md:flex space-x-4 text-sm text-gray-800 font-medium">
                        <a href="#" className="hover:text-black">Trang chủ</a>
                        <a href="#" className="hover:text-black">Sản phẩm</a>
                        <a href="#" className="hover:text-black">Dịch vụ</a>
                        <a href="#" className="hover:text-black">Giới thiệu</a>
                        <a href="#" className="hover:text-black">Liên hệ</a>
                    </nav>

                    <a href="#" className="text-gray-700 hover:opacity-80">
                        <img
                            src={BasketIcon}
                            alt="Giỏ hàng"
                            className="w-5 h-5"
                        />
                    </a>

                    <a href="#" className="hover:opacity-80">
                        <img
                            src={AccountIcon}
                            alt="Avatar / Login"
                            className="w-6 h-6 rounded-full"
                        />
                    </a>
                </div>
            </div>
        </header>
    );
}
