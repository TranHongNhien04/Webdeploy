import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-[#83C5BE] text-black py-8">
            <div className="container px-6 flex flex-col md:flex-row gap-x-48">
                <div className="w-full md:w-1/3">
                    <h3 className="text-xl mb-2">
                        <span className="text-black font-bold ">FRUVIA</span>
                        <span className="text-black">BEAUTY</span>
                    </h3>
                    <h4 className="font-semibold text-black mt-4 mb-2">
                        Đăng ký nhận bản tin
                    </h4>
                    <p className="text-black text-sm mb-2">
                        Để nhận thông báo sản phẩm và thông tin độc quyền
                    </p>
                    <div className="flex items-center space-x-2">
                        <input
                            type="email"
                            placeholder="Nhập email của bạn"
                            className="border px-3 py-2 text-sm text-black focus:outline-none"
                        />
                        <button className="bg-[#48978F] text-white font-semibold py-2 px-6 hover:bg-[#006D77] rounded-md transition">
                            Đăng ký
                        </button>
                    </div>
                </div>
                <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-4 gap-8">
                    <div>
                        <h4 className="font-semibold text-black mb-2">
                            Trang chính
                        </h4>
                        <Link
                            to="/"
                            className="block text-black text-sm hover:font-bold">
                            Trang chủ
                        </Link>
                        <Link
                            to="/san-pham"
                            className="block text-black text-sm hover:font-bold">
                            Sản phẩm
                        </Link>
                        <Link
                            to="/dich-vu"
                            className="block text-black text-sm hover:font-bold">
                            Dịch vụ
                        </Link>
                        <Link
                            to="/gioi-thieu"
                            className="block text-black text-sm hover:font-bold">
                            Giới thiệu
                        </Link>
                        <Link
                            to="/lien-he"
                            className="block text-black text-sm hover:font-bold">
                            Liên hệ
                        </Link>
                    </div>
                    <div>
                        <h4 className="font-semibold text-black mb-2">
                            Liên kết
                        </h4>
                        <a
                            href="#"
                            className="block text-black text-sm hover:font-bold">
                            Điều khoản sử dụng
                        </a>
                        <a
                            href="#"
                            className="block text-black text-sm hover:font-bold">
                            Chính sách bảo mật
                        </a>
                        <a
                            href="#"
                            className="block text-black text-sm hover:font-bold">
                            Tuyển dụng
                        </a>
                    </div>
                    <div>
                        <h4 className="font-semibold text-black mb-2">
                            Kết nối với chúng tôi
                        </h4>
                        <a
                            href="#"
                            className="block text-black text-sm hover:font-bold">
                            Facebook
                        </a>
                        <a
                            href="#"
                            className="block text-black text-sm hover:font-bold">
                            Instagram
                        </a>
                        <a
                            href="#"
                            className="block text-black text-sm hover:font-bold">
                            Twitter
                        </a>
                    </div>
                    <div>
                        <h4 className="font-semibold text-black mb-2">
                            Thông tin liên hệ
                        </h4>
                        <p className="text-black text-sm">
                            Địa chỉ: 12 Nguyễn Văn Bảo, Gò Vấp, TP Hồ Chí Minh
                        </p>
                        <p className="text-black text-sm">SĐT: 0999 999 999</p>
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-6 mt-8 border-t border-black pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-black">
                <p className="text-center md:text-left">
                    © 2025 Fruvia Beauty, Inc. ·{' '}
                    <a href="#" className="hover:font-bold">
                        Quyền riêng tư
                    </a>{' '}
                    ·{' '}
                    <a href="#" className="hover:font-bold">
                        Điều khoản
                    </a>{' '}
                    ·{' '}
                    <a href="#" className="hover:font-bold">
                        Sơ đồ trang
                    </a>
                </p>
            </div>
        </footer>
    );
}
