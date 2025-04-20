import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-white bg-opacity-70 backdrop-blur-md text-white py-12">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    <div>
                        <h3 className="text-xl font-extrabold text-gray-900 tracking-wide uppercase mb-4">
                            Fruvia Beauty
                        </h3>
                        <p className="text-gray-600 text-sm">
                            Địa chỉ: 12 Nguyễn văn Bảo, Gò Vấp, TP.HCM
                        </p>
                        <p className="text-gray-600 text-sm">Hotline: 028-3894-0390</p>
                        <p className="text-gray-600 text-sm">
                            Email: contact@innovative-fruits-beauty.vn
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-extrabold text-gray-900 tracking-wide uppercase mb-4">
                            Liên kết
                        </h3>
                        <a
                            href="#"
                            className="block text-gray-600 text-sm hover:text-blue-300 transition-colors duration-200"
                        >
                            Điều khoản sử dụng
                        </a>
                        <a
                            href="#"
                            className="block text-gray-600 text-sm hover:text-blue-300 transition-colors duration-200"
                        >
                            Chính sách bảo mật
                        </a>
                        <a
                            href="#"
                            className="block text-gray-600 text-sm hover:text-blue-300 transition-colors duration-200"
                        >
                            Tuyển dụng
                        </a>
                    </div>

                    <div>
                        <h3 className="text-xl font-extrabold text-gray-900 tracking-wide uppercase mb-4">
                            Kết nối với chúng tôi
                        </h3>
                        <div className="flex space-x-4">
                            <a
                                href="#"
                                className="text-gray-600 text-sm hover:text-blue-300 transition-colors duration-200"
                            >
                                Facebook
                            </a>
                            <a
                                href="#"
                                className="text-gray-600 text-sm hover:text-blue-300 transition-colors duration-200"
                            >
                                Instagram
                            </a>
                            <a
                                href="#"
                                className="text-gray-600 text-sm hover:text-blue-300 transition-colors duration-200"
                            >
                                Twitter
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}