import DichVuBanner from '../assets/img/DichVuBanner.png';

const HeroSection = () => (
    <section className="relative h-[600px] mb-16 -mx-4 overflow-hidden">
        <img
            src={DichVuBanner}
            alt="Dịch vụ tư vấn mỹ phẩm"
            className="w-full h-full object-cover"
            loading="lazy"
        />

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 z-10">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Dịch Vụ Tư Vấn Chọn Sản Phẩm
            </h1>
            <p className="text-lg md:text-xl text-white max-w-2xl mb-8">
                Để có làn da khỏe đẹp, việc lựa chọn sản phẩm phù hợp là vô cùng
                quan trọng. Hãy để chuyên gia của chúng tôi giúp bạn!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-black hover:bg-gray-100 py-3 px-6 rounded-md text-lg">
                    Đặt Lịch Tư Vấn
                </button>
                <button className="text-white border border-white hover:bg-white/20 py-3 px-6 rounded-md text-lg">
                    Tìm Hiểu Thêm
                </button>
            </div>
        </div>
    </section>
);

const BenefitsSection = () => {
    const benefits = [
        {
            title: 'Sản Phẩm Phù Hợp',
            description:
                'Tìm ra sản phẩm phù hợp với loại da và nhu cầu cụ thể của bạn, tránh lãng phí tiền bạc cho sản phẩm không hiệu quả',
        },
        {
            title: 'Chuyên Gia Tư Vấn',
            description:
                'Được tư vấn bởi đội ngũ chuyên gia có kinh nghiệm và kiến thức chuyên sâu về các sản phẩm mỹ phẩm',
        },
        {
            title: 'Hỗ Trợ Liên Tục',
            description:
                'Được hỗ trợ liên tục trong quá trình sử dụng sản phẩm, giải đáp thắc mắc và điều chỉnh phù hợp',
        },
    ];

    return (
        <section className="mb-16">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">
                    Lợi Ích Khi Sử Dụng Dịch Vụ Tư Vấn
                </h2>
                <p className="text-gray-500 max-w-2xl mx-auto">
                    Chúng tôi cung cấp dịch vụ tư vấn chuyên nghiệp giúp bạn tìm
                    ra sản phẩm phù hợp nhất với làn da và nhu cầu của bạn
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => (
                    <div
                        key={index}
                        className="border border-gray-200 bg-white rounded-lg p-6">
                        <div className="text-center">
                            <h3 className="text-xl font-semibold mb-2">
                                {benefit.title}
                            </h3>
                            <p className="text-gray-600">
                                {benefit.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

const ServicesTabsSection = () => {
    const services = [
        {
            value: 'skincare',
            title: 'Tư Vấn Chăm Sóc Da Mặt',
            description: 'Giải pháp chăm sóc da mặt toàn diện',
            content:
                'Chúng tôi sẽ phân tích loại da của bạn và đề xuất quy trình chăm sóc da phù hợp với các sản phẩm cụ thể cho từng bước.',
            items: [
                'Phân tích loại da (dầu, khô, hỗn hợp, nhạy cảm)',
                'Tư vấn quy trình chăm sóc da cơ bản và nâng cao',
                'Đề xuất sản phẩm phù hợp cho từng bước skincare',
                'Giải pháp cho các vấn đề da cụ thể (mụn, thâm, lão hóa)',
            ],
        },
        {
            value: 'makeup',
            title: 'Tư Vấn Trang Điểm',
            description: 'Giải pháp trang điểm phù hợp phong cách',
            content:
                'Chúng tôi sẽ giúp bạn tìm ra các sản phẩm trang điểm phù hợp với tông da, kiểu dáng khuôn mặt và phong cách cá nhân.',
            items: [
                'Phân tích tông da và màu sắc phù hợp',
                'Tư vấn kỹ thuật trang điểm cơ bản và nâng cao',
                'Đề xuất sản phẩm phù hợp với từng loại da',
                'Hướng dẫn trang điểm theo từng dịp khác nhau',
            ],
        },
        {
            value: 'body',
            title: 'Tư Vấn Chăm Sóc Cơ Thể',
            description: 'Giải pháp chăm sóc cơ thể toàn diện',
            content:
                'Chúng tôi sẽ giúp bạn xây dựng quy trình chăm sóc cơ thể toàn diện với các sản phẩm phù hợp với loại da và nhu cầu.',
            items: [
                'Phân tích loại da cơ thể và các vấn đề cụ thể',
                'Tư vấn quy trình chăm sóc cơ thể hàng ngày',
                'Đề xuất sản phẩm phù hợp cho từng nhu cầu',
                'Giải pháp cho các vấn đề da cơ thể (khô, sần, thâm)',
            ],
        },
        {
            value: 'hair',
            title: 'Tư Vấn Chăm Sóc Tóc',
            description: 'Giải pháp chăm sóc tóc và da đầu',
            content:
                'Chúng tôi sẽ phân tích tình trạng tóc và da đầu của bạn để đề xuất các sản phẩm chăm sóc tóc phù hợp nhất.',
            items: [
                'Phân tích loại tóc và tình trạng da đầu',
                'Tư vấn quy trình chăm sóc tóc hàng ngày và định kỳ',
                'Đề xuất sản phẩm phù hợp cho từng loại tóc',
                'Giải pháp cho các vấn đề tóc (khô, gãy, rụng, chẻ ngọn)',
            ],
        },
    ];

    return (
        <section className="mb-16">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">
                    Dịch Vụ Tư Vấn Theo Nhu Cầu
                </h2>
                <p className="text-gray-500 max-w-2xl mx-auto">
                    Chúng tôi cung cấp dịch vụ tư vấn chuyên biệt cho từng danh
                    mục sản phẩm và nhu cầu của bạn
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="border border-gray-200 hover:shadow-lg transition-shadow bg-white rounded-lg p-6">
                        <div>
                            <h3 className="text-xl font-semibold mb-2">
                                {service.title}
                            </h3>
                            <p className="text-gray-500 mb-2">
                                {service.description}
                            </p>
                            <p className="text-gray-600 mb-4">
                                {service.content}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {service.items.map((item, itemIndex) => (
                                    <span
                                        key={itemIndex}
                                        className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

const SkinTypeSection = () => {
    const skinTypes = [
        {
            title: 'Da Dầu',
            description: 'Giải pháp kiểm soát dầu và ngăn ngừa mụn',
            content:
                'Các sản phẩm phù hợp với da dầu giúp kiểm soát lượng dầu thừa, se khít lỗ chân lông và ngăn ngừa mụn hiệu quả.',
            tags: [
                'Sữa rửa mặt dành cho da dầu',
                'Toner cân bằng dầu',
                'Kem dưỡng oil-free',
            ],
        },
        {
            title: 'Da Khô',
            description: 'Giải pháp cấp ẩm và phục hồi da',
            content:
                'Các sản phẩm dành cho da khô giúp cung cấp độ ẩm, nuôi dưỡng và phục hồi hàng rào bảo vệ da.',
            tags: [
                'Sữa rửa mặt dịu nhẹ',
                'Serum cấp ẩm',
                'Kem dưỡng giàu độ ẩm',
            ],
        },
        {
            title: 'Da Nhạy Cảm',
            description: 'Giải pháp làm dịu và bảo vệ da',
            content:
                'Các sản phẩm dành cho da nhạy cảm giúp làm dịu, giảm kích ứng và tăng cường hàng rào bảo vệ da.',
            tags: [
                'Sữa rửa mặt không xà phòng',
                'Serum làm dịu',
                'Kem dưỡng không hương liệu',
            ],
        },
        {
            title: 'Da Mụn',
            description: 'Giải pháp trị mụn và ngăn ngừa thâm',
            content:
                'Các sản phẩm dành cho da mụn giúp kháng khuẩn, giảm viêm, làm lành da và ngăn ngừa thâm sau mụn.',
            tags: [
                'Sữa rửa mặt kháng khuẩn',
                'Serum trị mụn',
                'Kem dưỡng không gây mụn',
            ],
        },
        {
            title: 'Da Hỗn Hợp',
            description: 'Giải pháp cân bằng vùng da khác nhau',
            content:
                'Các sản phẩm dành cho da hỗn hợp giúp cân bằng vùng da dầu (chữ T) và vùng da khô (hai má).',
            tags: ['Sữa rửa mặt cân bằng', 'Toner đa năng', 'Kem dưỡng vùng'],
        },
        {
            title: 'Da Lão Hóa',
            description: 'Giải pháp chống lão hóa và phục hồi da',
            content:
                'Các sản phẩm dành cho da lão hóa giúp làm mờ nếp nhăn, tăng cường đàn hồi và cải thiện kết cấu da.',
            tags: ['Serum chống lão hóa', 'Kem mắt', 'Kem dưỡng tái tạo'],
        },
    ];

    return (
        <section className="mb-16">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Tư Vấn Theo Loại Da</h2>
                <p className="text-gray-500 max-w-2xl mx-auto">
                    Mỗi loại da cần được chăm sóc với những sản phẩm và phương
                    pháp khác nhau. Chúng tôi cung cấp tư vấn chuyên biệt cho
                    từng loại da.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {skinTypes.map((skin, index) => (
                    <div
                        key={index}
                        className="border border-gray-200 hover:shadow-lg transition-shadow bg-white rounded-lg p-6">
                        <div>
                            <h3 className="text-xl font-semibold mb-2">
                                {skin.title}
                            </h3>
                            <p className="text-gray-500 mb-2">
                                {skin.description}
                            </p>
                            <p className="text-gray-600 mb-4">{skin.content}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {skin.tags.map((tag, tagIndex) => (
                                    <span
                                        key={tagIndex}
                                        className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

const BookingFormSection = () => (
    <section className="mb-16">
        <div className="max-w-3xl mx-auto border rounded-lg p-8 bg-gray-50">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Đặt Lịch Tư Vấn</h2>
                <p className="text-gray-500">
                    Điền thông tin của bạn để đặt lịch tư vấn với chuyên gia của
                    chúng tôi
                </p>
            </div>
            <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label htmlFor="name" className="font-medium">
                            Họ và tên
                        </label>
                        <input
                            id="name"
                            type="text"
                            className="w-full p-3 border rounded-md"
                            placeholder="Nhập họ và tên của bạn"
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="phone" className="font-medium">
                            Số điện thoại
                        </label>
                        <input
                            id="phone"
                            type="tel"
                            className="w-full p-3 border rounded-md"
                            placeholder="Nhập số điện thoại của bạn"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label htmlFor="email" className="font-medium">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            className="w-full p-3 border rounded-md"
                            placeholder="Nhập email của bạn"
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="date" className="font-medium">
                            Ngày hẹn
                        </label>
                        <input
                            id="date"
                            type="date"
                            className="w-full p-3 border rounded-md"
                        />
                    </div>
                </div>
                <div className="space-y-2">
                    <label htmlFor="service" className="font-medium">
                        Dịch vụ tư vấn
                    </label>
                    <select
                        id="service"
                        className="w-full p-3 border rounded-md">
                        <option value="">Chọn dịch vụ tư vấn</option>
                        <option value="skincare">Tư vấn chăm sóc da mặt</option>
                        <option value="makeup">Tư vấn trang điểm</option>
                        <option value="body">Tư vấn chăm sóc cơ thể</option>
                        <option value="hair">Tư vấn chăm sóc tóc</option>
                    </select>
                </div>
                <div className="space-y-2">
                    <label htmlFor="skin-type" className="font-medium">
                        Loại da của bạn
                    </label>
                    <select
                        id="skin-type"
                        className="w-full p-3 border rounded-md">
                        <option value="">Chọn loại da của bạn</option>
                        <option value="oily">Da dầu</option>
                        <option value="dry">Da khô</option>
                        <option value="sensitive">Da nhạy cảm</option>
                        <option value="acne">Da mụn</option>
                        <option value="combination">Da hỗn hợp</option>
                        <option value="aging">Da lão hóa</option>
                        <option value="normal">Da thường</option>
                    </select>
                </div>
                <div className="space-y-2">
                    <label htmlFor="message" className="font-medium">
                        Nhu cầu cụ thể
                    </label>
                    <textarea
                        id="message"
                        className="w-full p-3 border rounded-md h-32"
                        placeholder="Mô tả nhu cầu và vấn đề da của bạn"></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full bg-black hover:bg-gray-800 text-white py-6 rounded-md text-lg">
                    Đặt Lịch Ngay
                </button>
            </form>
        </div>
    </section>
);

const CTASection = () => (
    <section className="bg-gradient-to-r from-gray-800 to-black rounded-lg p-8 text-white text-center mb-5">
        <h2 className="text-3xl font-bold mb-4">
            Bắt Đầu Hành Trình Làm Đẹp Của Bạn Ngay Hôm Nay
        </h2>
        <p className="max-w-2xl mx-auto mb-8 text-gray-200">
            Đừng để làn da của bạn phải "thử và sai" với hàng loạt sản phẩm
            không phù hợp. Hãy để chuyên gia của chúng tôi giúp bạn tìm ra giải
            pháp tốt nhất!
        </p>
        <button className="bg-white text-black hover:bg-gray-100 py-3 px-6 rounded-md text-lg">
            Đặt Lịch Tư Vấn Ngay
        </button>
    </section>
);

export default function Service() {
    return (
        <div className="container mx-auto px-4 pt-20">
            <HeroSection />
            <BenefitsSection />
            <ServicesTabsSection />
            <SkinTypeSection />
            <CTASection />
            <BookingFormSection />
        </div>
    );
}
