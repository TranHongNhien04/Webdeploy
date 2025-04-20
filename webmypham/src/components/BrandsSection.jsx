import React from "react";

const brands = [
    {
        name: "La Mer",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/6d/La_Mer_logo.png",
        url: "https://www.cremedelamer.com/",
    },
    {
        name: "Dior Beauty",
        image: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Christian_Dior_Logo.svg",
        url: "https://www.dior.com/beauty",
    },
    {
        name: "SK-II",
        image: "https://upload.wikimedia.org/wikipedia/commons/7/78/SK-II_logo.svg",
        url: "https://www.sk-ii.com/",
    },
    {
        name: "Chanel",
        image: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Chanel_logo_interlocking_cs.svg",
        url: "https://www.chanel.com/us/skincare/",
    },
    {
        name: "Estee Lauder",
        image: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Est%C3%A9e_Lauder_Companies_Logo.svg",
        url: "https://www.esteelauder.com/",
    },
];

export default function BrandsSection() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold text-center mb-12">THƯƠNG HIỆU MỸ PHẨM UY TÍN</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-center">
                {brands.map((brand, index) => (
                    <a
                        key={index}
                        href={brand.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center hover:scale-105 transition-transform"
                    >
                        <img
                            src={brand.image}
                            alt={brand.name}
                            className="h-20 object-contain mb-2 grayscale hover:grayscale-0 transition duration-300"
                        />
                        <span className="text-sm font-medium">{brand.name}</span>
                    </a>
                ))}
            </div>
        </div>
    );
}
