import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-white text-black py-6 border-t">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                {/* Logo Section */}
                <div>
                    <h3 className="text-xl font-bold mb-2">
                        <span className="text-gray-900">FRUVIA</span>
                        <span className="text-gray-500"> BEAUTY</span>
                    </h3>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-12">
                    {/* Liên kết Column */}
                    <div>
                        <h4 className="font-semibold text-gray-900 mb-2">
                            Liên kết
                        </h4>
                        <a
                            href="#"
                            className="block text-gray-600 text-sm hover:text-blue-500">
                            Điều khoản sử dụng
                        </a>
                        <a
                            href="#"
                            className="block text-gray-600 text-sm hover:text-blue-500">
                            Chính sách bảo mật
                        </a>
                        <a
                            href="#"
                            className="block text-gray-600 text-sm hover:text-blue-500">
                            Tuyển dụng
                        </a>
                    </div>

                    {/* Kết nối với chúng tôi Column */}
                    <div>
                        <h4 className="font-semibold text-gray-900 mb-2">
                            Kết nối với chúng tôi
                        </h4>
                        <div className="flex space-x-4">
                            <a
                                href="#"
                                className="text-gray-600 text-sm hover:text-blue-500">
                                Facebook
                            </a>
                            <a
                                href="#"
                                className="text-gray-600 text-sm hover:text-blue-500">
                                Instagram
                            </a>
                            <a
                                href="#"
                                className="text-gray-600 text-sm hover:text-blue-500">
                                Twitter
                            </a>
                        </div>
                    </div>
                </div>

                {/* Newsletter Subscription */}
                <div className="w-full md:w-auto">
                    <h4 className="font-semibold text-gray-900 mb-2">
                        Đăng ký nhận bản tin
                    </h4>
                    <p className="text-gray-600 text-sm mb-2">
                        Để nhận thông báo sản phẩm và thông tin độc quyền
                    </p>
                    <div className="flex items-center space-x-2">
                        <input
                            type="email"
                            placeholder="Nhập email của bạn"
                            className="border rounded-l px-3 py-2 text-sm text-gray-600 focus:outline-none"
                        />
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-r text-sm hover:bg-blue-700">
                            Đăng ký
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom Section: Language Selector, Copyright, and Social Icons */}
            <div className="container mx-auto px-6 mt-6 flex flex-col md:flex-row justify-between items-center border-t pt-4">
                <div className="flex items-center space-x-4">
                    <p className="text-gray-600 text-sm">
                        © 2025 Fruvia Beauty, Inc. ·{' '}
                        <a href="#" className="hover:text-blue-500">
                            Quyền riêng tư
                        </a>{' '}
                        ·{' '}
                        <a href="#" className="hover:text-blue-500">
                            Điều khoản
                        </a>{' '}
                        ·{' '}
                        <a href="#" className="hover:text-blue-500">
                            Sơ đồ trang
                        </a>
                    </p>
                </div>
                <div className="flex space-x-4 mt-4 md:mt-0">
                    <a href="#" className="text-gray-600 hover:text-blue-500">
                        <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24">
                            <path d="M24 4.6a10 10 0 01-2.9.8 5 5 0 002.2-2.7 10 10 0 01-3.2 1.2 5 5 0 00-8.6 4.6A14 14 0 011.7 3.2a5 5 0 001.5 6.6A5 5 0 01.9 9.2v.1a5 5 0 004 4.9 5 5 0 01-2.2.1 5 5 0 004.7 3.5A10 10 0 010 19.5a14 14 0 007.6 2.2c9 0 14-7.5 14-14 0-.2 0-.4-.1-.6A10 10 0 0024 4.6z" />
                        </svg>
                    </a>
                    <a href="#" className="text-gray-600 hover:text-blue-500">
                        <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24">
                            <path d="M12 2.1c-5.5 0-9.9 4.4-9.9 9.9s4.4 9.9 9.9 9.9 9.9-4.4 9.9-9.9-4.4-9.9-9.9-9.9zm0 1.8c4.5 0 8.1 3.6 8.1 8.1s-3.6 8.1-8.1 8.1-8.1-3.6-8.1-8.1 3.6-8.1 8.1-8.1zm0 2.7c-3 0-5.4 2.4-5.4 5.4s2.4 5.4 5.4 5.4 5.4-2.4 5.4-5.4-2.4-5.4-5.4-5.4zm0 1.8c2 0 3.6 1.6 3.6 3.6s-1.6 3.6-3.6 3.6-3.6-1.6-3.6-3.6 1.6-3.6 3.6-3.6z" />
                        </svg>
                    </a>
                    <a href="#" className="text-gray-600 hover:text-blue-500">
                        <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24">
                            <path d="M22.5 0h-21C.7 0 0 .7 0 1.5v21C0 23.3.7 24 1.5 24h21c.8 0 1.5-.7 1.5-1.5v-21C24 .7 23.3 0 22.5 0zM7.5 21H3V9h4.5v12zM5.3 7.5c-1.5 0-2.6-1.2-2.6-2.6 0-1.5 1.2-2.6 2.6-2.6 1.5 0 2.6 1.2 2.6 2.6 0 1.5-1.2 2.6-2.6 2.6zM21 21h-4.5v-6c0-1.4-.5-2.3-1.7-2.3-1 0-1.6.7-1.9 1.4v7H8.3V9h4.5v1.6c.6-.9 1.7-2.2 4-2.2 2.9 0 5.2 1.9 5.2 6V21z" />
                        </svg>
                    </a>
                    <a href="#" className="text-gray-600 hover:text-blue-500">
                        <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24">
                            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm5.3 17.3c-.2.5-.7.8-1.2.8h-8c-.5 0-1-.3-1.2-.8-.2-.5-.1-1 .3-1.4l4-4.5c.4-.5 1.1-.5 1.5 0l4 4.5c.4.4.5 1 .3 1.4zm-5.3-9.8c-1.5 0-2.7 1.2-2.7 2.7s1.2 2.7 2.7 2.7 2.7-1.2 2.7-2.7-1.2-2.7-2.7-2.7z" />
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    );
}
