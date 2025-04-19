export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-12">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Fruvia Beauty</h3>
                        <p>Địa chỉ: 12 Nguyễn văn Bảo, Gò Vấp, TP.HCM</p>
                        <p>Hotline: 028-3894-0390</p>
                        <p>Email: contact@innovative-fruits-beauty.vn</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Liên kết</h3>
                        <a href="#" className="block hover:text-blue-300">Điều khoản sử dụng</a>
                        <a href="#" className="block hover:text-blue-300">Chính sách bảo mật</a>
                        <a href="#" className="block hover:text-blue-300">Tuyển dụng</a>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Kết nối với chúng tôi</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-blue-300">Facebook</a>
                            <a href="#" className="hover:text-blue-300">Instagram</a>
                            <a href="#" className="hover:text-blue-300">Twitter</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

