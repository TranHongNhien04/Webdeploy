import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-white text-black py-8">
            <div className="container px-6 flex flex-col md:flex-row gap-x-48">
                {/* Khối 1: Logo + Đăng ký nhận bản tin */}
                <div className="w-full md:w-1/3">
                    <h3 className="text-xl font-bold mb-2">
                        <span className="text-gray-900">FRUVIA</span>
                        <span className="text-gray-500"> BEAUTY</span>
                    </h3>
                    <h4 className="font-semibold text-gray-900 mt-4 mb-2">
                        Đăng ký nhận bản tin
                    </h4>
                    <p className="text-gray-600 text-sm mb-2">
                        Để nhận thông báo sản phẩm và thông tin độc quyền
                    </p>
                    <div className="flex items-center space-x-2">
                        <input
                            type="email"
                            placeholder="Nhập email của bạn"
                            className="border px-3 py-2 text-sm text-gray-600 focus:outline-none"
                        />
                        <button className="bg-gray-700 text-white font-semibold py-2 px-6 hover:bg-white hover:text-black border border-gray-500 transition">
                            Đăng ký
                        </button>
                    </div>
                </div>

                {/* Khối 2: 4 cột thông tin */}
                <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-4 gap-8">
                    {/* Trang chính */}
                    <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Trang chính</h4>
                        <Link to="/" className="block text-gray-600 text-sm hover:text-blue-500">Trang chủ</Link>
                        <Link to="/san-pham" className="block text-gray-600 text-sm hover:text-blue-500">Sản phẩm</Link>
                        <Link to="/dich-vu" className="block text-gray-600 text-sm hover:text-blue-500">Dịch vụ</Link>
                        <Link to="/gioi-thieu" className="block text-gray-600 text-sm hover:text-blue-500">Giới thiệu</Link>
                        <Link to="/lien-he" className="block text-gray-600 text-sm hover:text-blue-500">Liên hệ</Link>
                    </div>

                    {/* Liên kết */}
                    <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Liên kết</h4>
                        <a href="#" className="block text-gray-600 text-sm hover:text-blue-500">Điều khoản sử dụng</a>
                        <a href="#" className="block text-gray-600 text-sm hover:text-blue-500">Chính sách bảo mật</a>
                        <a href="#" className="block text-gray-600 text-sm hover:text-blue-500">Tuyển dụng</a>
                    </div>

                    {/* Kết nối với chúng tôi */}
                    <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Kết nối với chúng tôi</h4>
                        <a href="#" className="block text-gray-600 text-sm hover:text-blue-500">Facebook</a>
                        <a href="#" className="block text-gray-600 text-sm hover:text-blue-500">Instagram</a>
                        <a href="#" className="block text-gray-600 text-sm hover:text-blue-500">Twitter</a>
                    </div>

                    {/* Địa chỉ */}
                    <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Thông tin liên hệ</h4>
                        <p className="text-gray-600 text-sm">Địa chỉ: 12 Nguyễn Văn Bảo, Gò Vấp, TP Hồ Chí Minh</p>
                        <p className="text-gray-600 text-sm">SĐT: 0999 999 999</p>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="container mx-auto px-6 mt-8 border-t pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
                <p className="text-center md:text-left">
                    © 2025 Fruvia Beauty, Inc. ·{' '}
                    <a href="#" className="hover:text-blue-500">Quyền riêng tư</a> ·{' '}
                    <a href="#" className="hover:text-blue-500">Điều khoản</a> ·{' '}
                    <a href="#" className="hover:text-blue-500">Sơ đồ trang</a>
                </p>
            </div>
        </footer>
    );
}