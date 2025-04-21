"use client"

import { useState } from "react"

const ProductGrid = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [showFilters, setShowFilters] = useState(false)

  // Danh mục chính và danh mục phụ
  const categories = [
    {
      id: "face-care",
      name: "Chăm sóc da mặt",
      subcategories: [
        { id: "cleanser", name: "Sữa rửa mặt" },
        { id: "toner", name: "Toner/Nước hoa hồng" },
        { id: "serum", name: "Serum/Essence" },
        { id: "moisturizer", name: "Kem dưỡng da" },
        { id: "mask", name: "Mặt nạ" },
        { id: "exfoliator", name: "Tẩy tế bào chết" },
        { id: "sunscreen", name: "Kem chống nắng" },
      ],
    },
    {
      id: "makeup",
      name: "Trang điểm",
      subcategories: [
        { id: "foundation", name: "Kem nền" },
        { id: "powder", name: "Phấn phủ" },
        { id: "concealer", name: "Che khuyết điểm" },
        { id: "lipstick", name: "Son môi" },
        { id: "mascara", name: "Mascara" },
        { id: "eyeliner", name: "Kẻ mắt" },
        { id: "blush", name: "Phấn má hồng" },
        { id: "eyebrow", name: "Kẻ mày" },
      ],
    },
    {
      id: "body-care",
      name: "Chăm sóc cơ thể",
      subcategories: [
        { id: "shower-gel", name: "Sữa tắm" },
        { id: "body-lotion", name: "Dưỡng thể" },
        { id: "body-scrub", name: "Tẩy da chết body" },
        { id: "deodorant", name: "Khử mùi" },
      ],
    },
    {
      id: "hair-care",
      name: "Chăm sóc tóc",
      subcategories: [
        { id: "shampoo", name: "Dầu gội" },
        { id: "conditioner", name: "Dầu xả" },
        { id: "hair-treatment", name: "Dưỡng tóc" },
        { id: "hair-oil", name: "Tinh dầu/nước hoa tóc" },
      ],
    },
  ]

  // Loại da
  const skinTypes = [
    { id: "oily", name: "Da dầu" },
    { id: "dry", name: "Da khô" },
    { id: "sensitive", name: "Da nhạy cảm" },
    { id: "acne", name: "Da mụn" },
    { id: "combination", name: "Da hỗn hợp" },
    { id: "aging", name: "Da lão hóa" },
  ]

  // Công dụng
  const benefits = [
    { id: "brightening", name: "Làm trắng sáng da" },
    { id: "hydrating", name: "Cấp ẩm" },
    { id: "anti-aging", name: "Chống lão hóa" },
  ]

  // Sample product data - replace with your actual data
  const products = [
    {
      id: 1,
      title: "Sữa rửa mặt dịu nhẹ",
      description: "Làm sạch sâu, không gây khô da",
      price: 32,
      originalPrice: 40,
      image: "/placeholder.svg?height=300&width=300",
      onSale: true,
      category: "face-care",
      subcategory: "cleanser",
      skinType: ["sensitive", "dry"],
      benefit: ["hydrating"],
    },
    {
      id: 2,
      title: "Serum Vitamin C",
      description: "Làm sáng da, mờ thâm nám",
      price: 22,
      originalPrice: 30,
      image: "/placeholder.svg?height=300&width=300",
      onSale: true,
      category: "face-care",
      subcategory: "serum",
      skinType: ["combination", "aging"],
      benefit: ["brightening", "anti-aging"],
    },
    {
      id: 3,
      title: "Kem chống nắng SPF 50",
      description: "Bảo vệ da khỏi tia UV",
      price: 18,
      originalPrice: 25,
      image: "/placeholder.svg?height=300&width=300",
      onSale: true,
      category: "face-care",
      subcategory: "sunscreen",
      skinType: ["all"],
      benefit: ["anti-aging"],
    },
    {
      id: 4,
      title: "Kem dưỡng ẩm sâu",
      description: "Cấp ẩm 48h cho da khô",
      price: 48,
      originalPrice: 60,
      image: "/placeholder.svg?height=300&width=300",
      onSale: true,
      category: "face-care",
      subcategory: "moisturizer",
      skinType: ["dry", "sensitive"],
      benefit: ["hydrating"],
    },
    {
      id: 5,
      title: "Son môi lì mềm mịn",
      description: "Màu sắc bền đẹp, không khô môi",
      price: 31,
      originalPrice: null,
      image: "/placeholder.svg?height=300&width=300",
      onSale: false,
      category: "makeup",
      subcategory: "lipstick",
      skinType: ["all"],
      benefit: [],
    },
    {
      id: 6,
      title: "Kem nền mỏng nhẹ",
      description: "Che phủ tự nhiên, kiềm dầu tốt",
      price: 40,
      originalPrice: 55,
      image: "/placeholder.svg?height=300&width=300",
      onSale: true,
      category: "makeup",
      subcategory: "foundation",
      skinType: ["oily", "combination"],
      benefit: [],
    },
    {
      id: 7,
      title: "Dầu gội dưỡng tóc",
      description: "Phục hồi tóc hư tổn, bóng mượt",
      price: 26,
      originalPrice: null,
      image: "/placeholder.svg?height=300&width=300",
      onSale: false,
      category: "hair-care",
      subcategory: "shampoo",
      skinType: [],
      benefit: [],
    },
    {
      id: 8,
      title: "Sữa tắm dưỡng ẩm",
      description: "Làm sạch và dưỡng ẩm cho da",
      price: 18,
      originalPrice: null,
      image: "/placeholder.svg?height=300&width=300",
      onSale: false,
      category: "body-care",
      subcategory: "shower-gel",
      skinType: ["dry", "sensitive"],
      benefit: ["hydrating"],
    },
    {
      id: 9,
      title: "Toner cân bằng da",
      description: "Se khít lỗ chân lông, làm sạch sâu",
      price: 52,
      originalPrice: null,
      image: "/placeholder.svg?height=300&width=300",
      onSale: true,
      category: "face-care",
      subcategory: "toner",
      skinType: ["oily", "acne"],
      benefit: [],
    },
    {
      id: 10,
      title: "Phấn phủ kiềm dầu",
      description: "Kiềm dầu lâu, mịn da tự nhiên",
      price: 47,
      originalPrice: null,
      image: "/placeholder.svg?height=300&width=300",
      onSale: false,
      category: "makeup",
      subcategory: "powder",
      skinType: ["oily", "combination"],
      benefit: [],
    },
    {
      id: 11,
      title: "Dầu xả dưỡng tóc",
      description: "Mềm mượt tóc, dễ chải",
      price: 44,
      originalPrice: null,
      image: "/placeholder.svg?height=300&width=300",
      onSale: false,
      category: "hair-care",
      subcategory: "conditioner",
      skinType: [],
      benefit: [],
    },
    {
      id: 12,
      title: "Kem dưỡng chống lão hóa",
      description: "Giảm nếp nhăn, săn chắc da",
      price: 32,
      originalPrice: 45,
      image: "/placeholder.svg?height=300&width=300",
      onSale: true,
      category: "face-care",
      subcategory: "moisturizer",
      skinType: ["aging"],
      benefit: ["anti-aging"],
    },
  ]

  // Filter states
  const [activeCategory, setActiveCategory] = useState("all")
  const [activeSubcategories, setActiveSubcategories] = useState([])
  const [activeSkinTypes, setActiveSkinTypes] = useState([])
  const [activeBenefits, setActiveBenefits] = useState([])
  const [sortBy, setSortBy] = useState("default")
  const [priceRange, setPriceRange] = useState({ min: 0, max: 100 })

  // Toggle subcategory filter
  const toggleSubcategory = (subcategoryId) => {
    if (activeSubcategories.includes(subcategoryId)) {
      setActiveSubcategories(activeSubcategories.filter((id) => id !== subcategoryId))
    } else {
      setActiveSubcategories([...activeSubcategories, subcategoryId])
    }
    setCurrentPage(1) // Reset to first page when changing filters
  }

  // Toggle skin type filter
  const toggleSkinType = (skinTypeId) => {
    if (activeSkinTypes.includes(skinTypeId)) {
      setActiveSkinTypes(activeSkinTypes.filter((id) => id !== skinTypeId))
    } else {
      setActiveSkinTypes([...activeSkinTypes, skinTypeId])
    }
    setCurrentPage(1) // Reset to first page when changing filters
  }

  // Toggle benefit filter
  const toggleBenefit = (benefitId) => {
    if (activeBenefits.includes(benefitId)) {
      setActiveBenefits(activeBenefits.filter((id) => id !== benefitId))
    } else {
      setActiveBenefits([...activeBenefits, benefitId])
    }
    setCurrentPage(1) // Reset to first page when changing filters
  }

  // Filter products
  const filteredProducts = products.filter((product) => {
    // Filter by main category
    if (activeCategory !== "all" && product.category !== activeCategory) return false

    // Filter by subcategories (if any are selected)
    if (activeSubcategories.length > 0 && !activeSubcategories.includes(product.subcategory)) return false

    // Filter by skin type
    if (activeSkinTypes.length > 0) {
      if (!product.skinType.some((type) => activeSkinTypes.includes(type)) && !product.skinType.includes("all"))
        return false
    }

    // Filter by benefit
    if (activeBenefits.length > 0) {
      if (!product.benefit.some((benefit) => activeBenefits.includes(benefit))) return false
    }

    // Filter by price range
    if (product.price < priceRange.min || product.price > priceRange.max) return false

    return true
  })

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-asc") return a.price - b.price
    if (sortBy === "price-desc") return b.price - a.price
    if (sortBy === "name-asc") return a.title.localeCompare(b.title)
    if (sortBy === "name-desc") return b.title.localeCompare(a.title)
    return 0 // default sorting
  })

  // Handle category change
  const handleCategoryChange = (category) => {
    setActiveCategory(category)
    setActiveSubcategories([]) // Reset subcategories when changing main category
    setCurrentPage(1) // Reset to first page
  }

  // Handle sort change
  const handleSortChange = (e) => {
    setSortBy(e.target.value)
  }

  // Handle price range change
  const handlePriceChange = (type, value) => {
    setPriceRange({
      ...priceRange,
      [type]: Number.parseInt(value),
    })
  }

  // Reset all filters
  const resetFilters = () => {
    setActiveCategory("all")
    setActiveSubcategories([])
    setActiveSkinTypes([])
    setActiveBenefits([])
    setPriceRange({ min: 0, max: 100 })
    setSortBy("default")
  }

  // Pagination
  const productsPerPage = 12
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage)
  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct)

  // Get current subcategories based on selected category
  const currentSubcategories =
    activeCategory === "all" ? [] : categories.find((cat) => cat.id === activeCategory)?.subcategories || []

  // Check if all subcategories of the current category are selected
  const allSubcategoriesSelected =
    currentSubcategories.length > 0 && currentSubcategories.every((sub) => activeSubcategories.includes(sub.id))

  // Toggle all subcategories
  const toggleAllSubcategories = () => {
    if (allSubcategoriesSelected) {
      setActiveSubcategories([])
    } else {
      setActiveSubcategories(currentSubcategories.map((sub) => sub.id))
    }
    setCurrentPage(1) // Reset to first page
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Mobile filter toggle */}
      <div className="md:hidden mb-4">
        <button
          className="w-full py-2 px-4 bg-gray-100 rounded-md flex items-center justify-between"
          onClick={() => setShowFilters(!showFilters)}
        >
          <span>Bộ lọc</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 transition-transform ${showFilters ? "rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar Filters */}
        <div
          className={`md:w-1/4 lg:w-1/5 space-y-6 ${showFilters ? "block" : "hidden md:block"
            } bg-white p-4 rounded-lg shadow-sm`}
        >
          {/* Main Categories */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Danh mục</h3>
            <div className="space-y-2">
              <div
                className={`cursor-pointer ${activeCategory === "all" ? "font-medium text-gray-900" : "text-gray-600 hover:text-gray-900"
                  }`}
                onClick={() => handleCategoryChange("all")}
              >
                Tất cả sản phẩm
              </div>
              {categories.map((category) => (
                <div
                  key={category.id}
                  className={`cursor-pointer ${activeCategory === category.id ? "font-medium text-gray-900" : "text-gray-600 hover:text-gray-900"
                    }`}
                  onClick={() => handleCategoryChange(category.id)}
                >
                  {category.name}
                </div>
              ))}
            </div>
          </div>

          {/* Subcategories - only show if a main category is selected */}
          {activeCategory !== "all" && currentSubcategories.length > 0 && (
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-lg">{categories.find((cat) => cat.id === activeCategory)?.name}</h3>
                <button
                  onClick={toggleAllSubcategories}
                  className="text-xs text-gray-700 hover:text-gray-900 hover:underline"
                >
                  {allSubcategoriesSelected ? "Bỏ chọn tất cả" : "Chọn tất cả"}
                </button>
              </div>
              <div className="space-y-2">
                {currentSubcategories.map((subcategory) => (
                  <div key={subcategory.id} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`subcategory-${subcategory.id}`}
                      checked={activeSubcategories.includes(subcategory.id)}
                      onChange={() => toggleSubcategory(subcategory.id)}
                      className="mr-2 h-4 w-4 rounded border-gray-300 text-gray-800 focus:ring-gray-500"
                    />
                    <label
                      htmlFor={`subcategory-${subcategory.id}`}
                      className="text-sm text-gray-700 cursor-pointer hover:text-gray-900"
                    >
                      {subcategory.name}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Skin Type Filter */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Phù hợp theo da</h3>
            <div className="space-y-2">
              {skinTypes.map((skinType) => (
                <div key={skinType.id} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`skin-${skinType.id}`}
                    checked={activeSkinTypes.includes(skinType.id)}
                    onChange={() => toggleSkinType(skinType.id)}
                    className="mr-2 h-4 w-4 rounded border-gray-300 text-gray-800 focus:ring-gray-500"
                  />
                  <label
                    htmlFor={`skin-${skinType.id}`}
                    className="text-sm text-gray-700 cursor-pointer hover:text-gray-900"
                  >
                    {skinType.name}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Filter */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Công dụng</h3>
            <div className="space-y-2">
              {benefits.map((benefit) => (
                <div key={benefit.id} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`benefit-${benefit.id}`}
                    checked={activeBenefits.includes(benefit.id)}
                    onChange={() => toggleBenefit(benefit.id)}
                    className="mr-2 h-4 w-4 rounded border-gray-300 text-gray-800 focus:ring-gray-500"
                  />
                  <label
                    htmlFor={`benefit-${benefit.id}`}
                    className="text-sm text-gray-700 cursor-pointer hover:text-gray-900"
                  >
                    {benefit.name}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Price Range Filter */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Khoảng giá</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <input
                  type="number"
                  min="0"
                  max={priceRange.max}
                  value={priceRange.min}
                  onChange={(e) => handlePriceChange("min", e.target.value)}
                  className="w-full p-2 border rounded-md text-sm"
                  placeholder="Từ"
                />
                <span>-</span>
                <input
                  type="number"
                  min={priceRange.min}
                  value={priceRange.max}
                  onChange={(e) => handlePriceChange("max", e.target.value)}
                  className="w-full p-2 border rounded-md text-sm"
                  placeholder="Đến"
                />
              </div>
              <div className="flex justify-between text-sm text-gray-500">
                <span>${priceRange.min}</span>
                <span>${priceRange.max}</span>
              </div>
            </div>
          </div>

          {/* Reset Filters Button */}
          <button
            onClick={resetFilters}
            className="w-full py-2 px-4 bg-gray-100 hover:bg-gray-200 rounded-md text-gray-700 transition-colors"
          >
            Xóa bộ lọc
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Active Filters */}
          {(activeCategory !== "all" ||
            activeSubcategories.length > 0 ||
            activeSkinTypes.length > 0 ||
            activeBenefits.length > 0) && (
              <div className="mb-4 flex flex-wrap gap-2">
                {activeCategory !== "all" && activeSubcategories.length === 0 && (
                  <div className="bg-gray-100 text-sm rounded-full px-3 py-1 flex items-center">
                    <span>{categories.find((cat) => cat.id === activeCategory)?.name}</span>
                    <button
                      onClick={() => handleCategoryChange("all")}
                      className="ml-2 text-gray-500 hover:text-gray-700"
                    >
                      ×
                    </button>
                  </div>
                )}

                {activeSubcategories.map((subId) => {
                  const subcategory = currentSubcategories.find((sub) => sub.id === subId)
                  if (!subcategory) return null
                  return (
                    <div key={subId} className="bg-gray-100 text-sm rounded-full px-3 py-1 flex items-center">
                      <span>{subcategory.name}</span>
                      <button onClick={() => toggleSubcategory(subId)} className="ml-2 text-gray-500 hover:text-gray-700">
                        ×
                      </button>
                    </div>
                  )
                })}

                {activeSkinTypes.map((skinTypeId) => {
                  const skinType = skinTypes.find((type) => type.id === skinTypeId)
                  return (
                    <div key={skinTypeId} className="bg-gray-100 text-sm rounded-full px-3 py-1 flex items-center">
                      <span>{skinType.name}</span>
                      <button
                        onClick={() => toggleSkinType(skinTypeId)}
                        className="ml-2 text-gray-500 hover:text-gray-700"
                      >
                        ×
                      </button>
                    </div>
                  )
                })}

                {activeBenefits.map((benefitId) => {
                  const benefit = benefits.find((b) => b.id === benefitId)
                  return (
                    <div key={benefitId} className="bg-gray-100 text-sm rounded-full px-3 py-1 flex items-center">
                      <span>{benefit.name}</span>
                      <button onClick={() => toggleBenefit(benefitId)} className="ml-2 text-gray-500 hover:text-gray-700">
                        ×
                      </button>
                    </div>
                  )
                })}

                {(activeCategory !== "all" ||
                  activeSubcategories.length > 0 ||
                  activeSkinTypes.length > 0 ||
                  activeBenefits.length > 0) && (
                    <button onClick={resetFilters} className="text-gray-700 text-sm hover:text-gray-900 hover:underline">
                      Xóa tất cả
                    </button>
                  )}
              </div>
            )}

          {/* Sort and Results Count */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
            <p className="text-gray-600 mb-2 sm:mb-0">
              Hiển thị {sortedProducts.length} sản phẩm{" "}
              {activeCategory !== "all" &&
                activeSubcategories.length === 0 &&
                `trong ${categories.find((cat) => cat.id === activeCategory)?.name}`}
            </p>
            <select className="border rounded-md px-3 py-2" value={sortBy} onChange={handleSortChange}>
              <option value="default">Sắp xếp theo</option>
              <option value="price-asc">Giá: Thấp đến cao</option>
              <option value="price-desc">Giá: Cao đến thấp</option>
              <option value="name-asc">Tên: A-Z</option>
              <option value="name-desc">Tên: Z-A</option>
            </select>
          </div>

          {/* Product Grid */}
          {currentProducts.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-gray-500">Không tìm thấy sản phẩm phù hợp với bộ lọc đã chọn.</p>
              <button
                onClick={resetFilters}
                className="mt-4 py-2 px-4 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors"
              >
                Xóa bộ lọc
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {currentProducts.map((product) => (
                <div key={product.id} className="relative">
                  <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <div className="relative">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.title}
                        className="w-full h-64 object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium text-gray-900">{product.title}</h3>
                      <p className="text-sm text-gray-500 mb-2">{product.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <span className="font-bold text-lg">${product.price}</span>
                          {product.originalPrice && (
                            <span className="text-gray-400 line-through ml-2 text-sm">${product.originalPrice}</span>
                          )}
                        </div>
                        <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center border border-gray-200 hover:bg-gray-100">
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
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-10">
              <nav className="flex items-center space-x-2">
                <button
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className={`w-8 h-8 flex items-center justify-center rounded-full ${currentPage === 1 ? "text-gray-400 cursor-not-allowed" : "text-gray-700 hover:bg-gray-100"
                    }`}
                >
                  &lt;
                </button>

                {[...Array(totalPages)].map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPage(index + 1)}
                    className={`w-8 h-8 flex items-center justify-center rounded-full ${currentPage === index + 1 ? "bg-gray-800 text-white" : "text-gray-700 hover:bg-gray-100"
                      }`}
                  >
                    {index + 1}
                  </button>
                ))}

                <button
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className={`w-8 h-8 flex items-center justify-center rounded-full ${currentPage === totalPages ? "text-gray-400 cursor-not-allowed" : "text-gray-700 hover:bg-gray-100"
                    }`}
                >
                  &gt;
                </button>
              </nav>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductGrid
