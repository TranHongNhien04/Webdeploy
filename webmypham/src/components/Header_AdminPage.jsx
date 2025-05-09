import bellIcon from "../assets/img/Icons/bell.png";

const Header = () => {
    return (
        <header className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Quản lý Admin</h1>
            <div className="flex items-center gap-4">
                <button
                    className="text-gray-600 hover:text-gray-800 focus:outline-none"
                    aria-label="Thông báo"
                >
                    <img src={bellIcon} alt="Thông báo" className="w-5 h-5" />
                </button>
                <div className="w-8 h-8 bg-gray-300 rounded-full" aria-label="Ảnh đại diện người dùng"></div>
            </div>
        </header>
    );
};

export default Header;
