
export default function Hero() {
    return (
        <section
            className="relative h-screen bg-cover bg-center"
        >
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="text-center text-white">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        Khơi nguồn vẻ đẹp tự nhiên – Tỏa sáng theo cách của bạn
                    </h1>
                    <p className="text-lg md:text-xl mb-6">
                        Fruvia Beauty – Vẻ đẹp tinh khiết, chuẩn phong cách mới
                    </p>
                    <button className="bg-white text-blue-600 px-6 py-3 rounded hover:bg-gray-100">
                        Khám phá thêm
                    </button>
                </div>
            </div>
        </section>
    );
}
