import React, { useState } from 'react';
import LeftArrow from '../assets/img/icons/left-arrow.png';
import RightArrow from '../assets/img/icons/right-arrow.png';
import ChamSocDaMat from '../assets/img/ChamSocDaMat.webp';

const NewsCard = ({ image, title }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden h-[100px] flex">
        <img src={image} alt={title} className="w-[100px] h-full object-cover" />
        <div className="p-3 flex-1">
            <h3 className="text-md font-semibold line-clamp-2">{title}</h3>
        </div>
    </div>
);

const CategoryCard = ({ image, title, onPrev, onNext }) => (
    <div
        className="bg-gray-900 rounded-lg shadow-md overflow-hidden text-white h-[332px] relative"
        style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}
    >
        <button
            onClick={onPrev}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 w-8 h-8 flex items-center justify-center z-10"
        >
            <img src={LeftArrow} alt="" />
        </button>
        <button
            onClick={onNext}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 w-8 h-8 flex items-center justify-center z-10"
        >
            <img src={RightArrow} alt="" />
        </button>
        <div className="absolute bottom-0 p-4 w-full">
            <h3 className="text-xl font-semibold relative z-10">{title}</h3>
        </div>
    </div>
);

export default function CategorySection() {
    const categories = [
        {
            title: "Chăm sóc da mặt",
            image: ChamSocDaMat,
            subCategories: [
                { title: "Sữa rửa mặt", image: "https://via.placeholder.com/400x200" },
                { title: "Toner/Nước hoa hồng", image: "https://via.placeholder.com/400x200" },
                { title: "Serum/Essence", image: "https://via.placeholder.com/400x200" },
                { title: "Kem dưỡng da", image: "https://via.placeholder.com/400x200" },
                { title: "Mặt nạ", image: "https://via.placeholder.com/400x200" },
                { title: "Tẩy tế bào chết", image: "https://via.placeholder.com/400x200" },
                { title: "Kem chống nắng", image: "https://via.placeholder.com/400x200" },
            ],
        },
        {
            title: "Trang điểm",
            image: "https://via.placeholder.com/400x300",
            subCategories: [
                { title: "Kem nền", image: "https://via.placeholder.com/400x200" },
                { title: "Phấn phủ", image: "https://via.placeholder.com/400x200" },
                { title: "Che khuyết điểm", image: "https://via.placeholder.com/400x200" },
                { title: "Son môi", image: "https://via.placeholder.com/400x200" },
                { title: "Mascara", image: "https://via.placeholder.com/400x200" },
                { title: "Kẻ mắt", image: "https://via.placeholder.com/400x200" },
                { title: "Phấn má hồng", image: "https://via.placeholder.com/400x200" },
                { title: "Kẻ mày", image: "https://via.placeholder.com/400x200" },
            ],
        },
    ];

    const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);

    const handlePrev = () => {
        setCurrentCategoryIndex((prevIndex) =>
            prevIndex === 0 ? categories.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentCategoryIndex((prevIndex) =>
            prevIndex === categories.length - 1 ? 0 : prevIndex + 1
        );
    };

    const currentCategory = categories[currentCategoryIndex];

    return (
        <div className="max-w-7xl mx-auto p-4 border-t-2 border-b-2 border-gray-300 mb-10">
            <div className="flex justify-center items-center mb-4">
                <h2 className="text-2xl font-bold">NGÀNH HÀNG ĐA DẠNG</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-2">
                    <CategoryCard
                        image={currentCategory.image}
                        title={currentCategory.title}
                        onPrev={handlePrev}
                        onNext={handleNext}
                    />
                </div>
                <div
                    className="h-[332px] overflow-y-auto space-y-4 pr-2"
                    style={{
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none',
                    }}
                >
                    <style jsx>{`
                        div::-webkit-scrollbar {
                            display: none; // Chrome, Safari, Opera
                        }
                    `}</style>
                    {currentCategory.subCategories.map((subCategory, index) => (
                        <NewsCard
                            key={index}
                            image={subCategory.image}
                            title={subCategory.title}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}