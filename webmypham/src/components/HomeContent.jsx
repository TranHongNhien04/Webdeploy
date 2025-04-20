import React from "react";
import AboutSection from "./AboutSection";
import CategorySection from "./CategorySection";
import ServiceSection from "./ServiceSection";
import FeedbackSection from "./FeedbackSection";
import BrandsSection from "./BrandsSection";


export default function HomeContent() {
    return (
        <div className="space-y-32"> {/* tăng khoảng cách lên 8rem (128px) */}
            <AboutSection />
            <CategorySection />
            <BrandsSection />
            <ServiceSection />
            <FeedbackSection />
        </div>
    );
}
