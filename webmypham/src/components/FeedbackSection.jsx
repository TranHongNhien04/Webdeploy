import React, { useState } from 'react';
import LeftArrow from '../assets/img/icons/left-arrow.png';
import RightArrow from '../assets/img/icons/right-arrow.png';

export default function FeedbackSection() {
    const feedbacks = [
        {
            image: "https://via.placeholder.com/800x400?text=Customer+1",
            name: "Ngọc Anh – 26 tuổi, Hà Nội",
            feedback: "Da mình trước đây rất hay nổi mụn và đổ dầu nhiều. Sau khi được tư vấn và sử dụng sản phẩm của shop, da cải thiện rõ rệt sau 2 tuần!",
        },
        {
            image: "https://via.placeholder.com/800x400?text=Customer+2",
            name: "Linh Chi – 30 tuổi, TP.HCM",
            feedback: "Sản phẩm chính hãng, đóng gói đẹp và giao hàng nhanh. Rất thích dịch vụ tư vấn da miễn phí, nhân viên nhiệt tình và hiểu rõ từng loại da.",
        },
        {
            image: "https://via.placeholder.com/800x400?text=Customer+3",
            name: "Thu Hương – 22 tuổi, Đà Nẵng",
            feedback: "Mình dùng combo serum & kem dưỡng được 1 tháng, da đều màu và mịn hơn. Cảm ơn shop vì đã tư vấn đúng sản phẩm phù hợp với da mình!",
        },
    ];

    const [currentFeedbackIndex, setCurrentFeedbackIndex] = useState(0);

    const handlePrev = () => {
        setCurrentFeedbackIndex((prevIndex) =>
            prevIndex === 0 ? feedbacks.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentFeedbackIndex((prevIndex) =>
            prevIndex === feedbacks.length - 1 ? 0 : prevIndex + 1
        );
    };

    const currentFeedback = feedbacks[currentFeedbackIndex];

    return (
        <div className="max-w-7xl mx-auto p-4 border-t-2 border-b-2">
            <div className="flex justify-center items-center mb-4">
                <h2 className="text-2xl font-bold">PHẢN HỒI TỪ KHÁCH HÀNG</h2>
            </div>
            <div className="relative">
                <div className="relative h-[400px] flex items-center">
                    <button
                        onClick={handlePrev}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center z-10"
                    >
                        <img src={LeftArrow} alt="Trước" />
                    </button>
                    <button
                        onClick={handleNext}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center z-10"
                    >
                        <img src={RightArrow} alt="Sau" />
                    </button>

                    <div className="flex flex-col md:flex-row items-center w-full h-full">
                        <div className="bg-white text-black p-6 md:w-1/3 rounded-r-xl h-full flex flex-col justify-center shadow-md">
                            <h3 className="text-xl font-semibold">{currentFeedback.name}</h3>
                            <p className="mt-2 italic">"{currentFeedback.feedback}"</p>
                        </div>

                        <div className="md:w-2/3 h-full">
                            <img
                                src={currentFeedback.image}
                                alt={currentFeedback.name}
                                className="w-full h-full object-cover rounded-l-xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
