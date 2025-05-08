import BackgroundImage from '../assets/img/backgrounds.png';

export default function Hero() {
    return (
        <section className="relative h-[600px] bg-cover bg-center">
            <img
                src={BackgroundImage}
                alt=""
                className="absolute top-2 w-full h-full"
            />
            <div className="absolute left-[50px] right-[50px] bg-gray-800 bg-opacity-40 flex items-center justify-center mt-20 shadow-lg p-8 rounded-2xl">
                <div className="text-center text-white drop-shadow-md">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        Khơi nguồn vẻ đẹp tự nhiên – Tỏa sáng theo cách của bạn
                    </h1>
                    <p className="text-lg md:text-xl mb-6">
                        Fruvia Beauty – Vẻ đẹp tinh khiết, chuẩn phong cách mới
                    </p>
                </div>
            </div>
        </section>
    );
}
