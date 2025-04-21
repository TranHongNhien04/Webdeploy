import { useState } from "react";

export default function ProductGrid() {  // Added 'function' keyword
  const [currentPage, setCurrentPage] = useState(1);

  const products = [
    // ... your products array remains unchanged
  ];

  const [activeCategory, setActiveCategory] = useState("all");
  const [sortBy, setSortBy] = useState("default");

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((product) => product.category === activeCategory);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-asc") return a.price - b.price;
    if (sortBy === "price-desc") return b.price - a.price;
    return 0; // default sorting
  });

  // Handle category change
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setCurrentPage(1); // Reset to first page when changing category
  };

  // Handle sort change
  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  // Pagination
  const productsPerPage = 12;
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Filter and Sort */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
        <div className="flex space-x-4 mb-4 sm:mb-0">
          <button
            className={`px-4 py-2 rounded-md ${activeCategory === "all" ? "bg-indigo-500 text-white" : "bg-gray-100"
              }`}
            onClick={() => handleCategoryChange("all")}
          >
            All Products
          </button>
          <button
            className={`px-4 py-2 rounded-md ${activeCategory === "face" ? "bg-indigo-500 text-white" : "bg-gray-100"
              }`}
            onClick={() => handleCategoryChange("face")}
          >
            Face
          </button>
          <button
            className={`px-4 py-2 rounded-md ${activeCategory === "body" ? "bg-indigo-500 text-white" : "bg-gray-100"
              }`}
            onClick={() => handleCategoryChange("body")}
          >
            Body
          </button>
        </div>
        <div>
          <select
            className="border rounded-md px-3 py-2"
            value={sortBy}
            onChange={handleSortChange}
          >
            <option value="default">Sort by</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {currentProducts.map((product) => (
          <div key={product.id} className="relative">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  className="w-full h-64 object-cover"
                />
                {product.onSale && (
                  <span className="absolute top-2 left-2 bg-pink-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                    Sale
                  </span>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-medium text-gray-900">{product.title}</h3>
                <p className="text-sm text-gray-500 mb-2">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="font-bold text-lg">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-gray-400 line-through ml-2 text-sm">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                  <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center border border-gray-200 hover:bg-gray-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-10">
          <nav className="flex items-center space-x-2">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={`w-8 h-8 flex items-center justify-center rounded-full ${currentPage === 1
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-gray-700 hover:bg-gray-100"
                }`}
            >
              &lt;
            </button>

            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`w-8 h-8 flex items-center justify-center rounded-full ${currentPage === index + 1
                    ? "bg-gray-900 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                  }`}
              >
                {index + 1}
              </button>
            ))}

            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className={`w-8 h-8 flex items-center justify-center rounded-full ${currentPage === totalPages
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-gray-700 hover:bg-gray-100"
                }`}
            >
              &gt;
            </button>
          </nav>
        </div>
      )}
    </div>
  );
}