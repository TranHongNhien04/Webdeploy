import { useState, useEffect } from 'react';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [skinTypes, setSkinTypes] = useState([]);
    const [brands, setBrands] = useState([]);
    const [filters, setFilters] = useState({
        category: '',
        skinType: '',
        brandId: '',
    });
    const [newProduct, setNewProduct] = useState({
        productId: '',
        title: '',
        description: '',
        price: '',
        originalPrice: '',
        image: '',
        onSale: false,
        category: '',
        subcategory: '',
        skinType: [],
        benefit: [],
        brandId: '',
    });
    const [isAdding, setIsAdding] = useState(false);
    const [editingProduct, setEditingProduct] = useState(null);

    // Fetch data from JSON server
    useEffect(() => {
        // Fetch products
        fetch('http://localhost:3001/products')
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);
                setFilteredProducts(data);
            })
            .catch((error) => console.error('Error fetching products:', error));

        // Fetch categories
        fetch('http://localhost:3001/categories')
            .then((response) => response.json())
            .then((data) => setCategories(data))
            .catch((error) => console.error('Error fetching categories:', error));

        // Fetch skin types
        fetch('http://localhost:3001/skinTypes')
            .then((response) => response.json())
            .then((data) => setSkinTypes(data))
            .catch((error) => console.error('Error fetching skin types:', error));

        // Fetch brands
        fetch('http://localhost:3001/brands')
            .then((response) => response.json())
            .then((data) => setBrands(data))
            .catch((error) => console.error('Error fetching brands:', error));
    }, []);

    // Apply filters
    useEffect(() => {
        let filtered = products;

        if (filters.category) {
            filtered = filtered.filter((p) => p.category === filters.category);
        }

        if (filters.skinType) {
            filtered = filtered.filter((p) =>
                p.skinType.includes(filters.skinType)
            );
        }

        setFilteredProducts(filtered);
    }, [filters, products]);

    // Handle filter changes
    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Format price to VND
    const formatPrice = (price) => {
        return new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
        }).format(price);
    };

    // Handle input changes for new/editing product
    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (editingProduct) {
            setEditingProduct({
                ...editingProduct,
                [name]: type === 'checkbox' ? checked : value,
            });
        } else {
            setNewProduct({
                ...newProduct,
                [name]: type === 'checkbox' ? checked : value,
            });
        }
    };

    // Add new product
    const handleAddProduct = () => {
        fetch('http://localhost:3001/products', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                ...newProduct,
                price: parseInt(newProduct.price),
                originalPrice: newProduct.originalPrice ? parseInt(newProduct.originalPrice) : null,
                skinType: newProduct.skinType.split(',').map((s) => s.trim()).filter((s) => s),
                benefit: newProduct.benefit.split(',').map((b) => b.trim()).filter((b) => b),
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                setProducts([...products, data]);
                setFilteredProducts([...products, data]); // Update filtered products
                setNewProduct({
                    productId: '',
                    title: '',
                    description: '',
                    price: '',
                    originalPrice: '',
                    image: '',
                    onSale: false,
                    category: '',
                    subcategory: '',
                    skinType: [],
                    benefit: [],
                    brandId: '',
                });
                setIsAdding(false);
            })
            .catch((error) => console.error('Error adding product:', error));
    };

    // Update product
    const handleUpdateProduct = () => {
        fetch(`http://localhost:3001/products/${editingProduct.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                ...editingProduct,
                price: parseInt(editingProduct.price),
                originalPrice: editingProduct.originalPrice ? parseInt(editingProduct.originalPrice) : null,
                skinType: editingProduct.skinType.split(',').map((s) => s.trim()).filter((s) => s),
                benefit: editingProduct.benefit.split(',').map((b) => b.trim()).filter((b) => b),
            }),
        })
            .then(() => {
                const updatedProducts = products.map((p) =>
                    p.id === editingProduct.id ? editingProduct : p
                );
                setProducts(updatedProducts);
                setFilteredProducts(updatedProducts); // Update filtered products
                setEditingProduct(null);
            })
            .catch((error) => console.error('Error updating product:', error));
    };

    // Delete product
    const handleDeleteProduct = (id) => {
        fetch(`http://localhost:3001/products/${id}`, {
            method: 'DELETE',
        })
            .then(() => {
                const updatedProducts = products.filter((p) => p.id !== id);
                setProducts(updatedProducts);
                setFilteredProducts(updatedProducts); // Update filtered products
            })
            .catch((error) => console.error('Error deleting product:', error));
    };

    return (
        <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">Quản lý sản phẩm</h2>
            <div className="bg-white p-6 rounded-lg shadow">
                {/* Filter Section */}
                <div className="mb-6 p-4 border rounded">
                    <h3 className="text-lg font-semibold mb-2">Bộ lọc sản phẩm</h3>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block mb-1">Danh mục</label>
                            <select
                                name="category"
                                value={filters.category}
                                onChange={handleFilterChange}
                                className="w-full p-2 border rounded"
                            >
                                <option value="">Tất cả danh mục</option>
                                {categories.map((category) => (
                                    <option key={category.id} value={category.id}>
                                        {category.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label className="block mb-1">Loại da</label>
                            <select
                                name="skinType"
                                value={filters.skinType}
                                onChange={handleFilterChange}
                                className="w-full p-2 border rounded"
                            >
                                <option value="">Tất cả loại da</option>
                                {skinTypes.map((skinType) => (
                                    <option key={skinType.id} value={skinType.id}>
                                        {skinType.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                <div className="flex justify-end mb-4">
                    <button
                        onClick={() => setIsAdding(true)}
                        className="bg-green-500 text-white px-4 py-2 rounded"
                    >
                        Thêm sản phẩm mới
                    </button>
                </div>

                {/* Form for adding/editing product */}
                {(isAdding || editingProduct) && (
                    <div className="mb-6 p-4 border rounded">
                        <h3 className="text-lg font-semibold mb-2">
                            {editingProduct ? 'Sửa sản phẩm' : 'Thêm sản phẩm mới'}
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                            <input
                                type="text"
                                name="productId"
                                placeholder="Product ID"
                                value={editingProduct ? editingProduct.productId : newProduct.productId}
                                onChange={handleInputChange}
                                className="p-2 border rounded"
                            />
                            <input
                                type="text"
                                name="title"
                                placeholder="Tên sản phẩm"
                                value={editingProduct ? editingProduct.title : newProduct.title}
                                onChange={handleInputChange}
                                className="p-2 border rounded"
                            />
                            <input
                                type="text"
                                name="description"
                                placeholder="Mô tả"
                                value={editingProduct ? editingProduct.description : newProduct.description}
                                onChange={handleInputChange}
                                className="p-2 border rounded"
                            />
                            <input
                                type="number"
                                name="price"
                                placeholder="Giá"
                                value={editingProduct ? editingProduct.price : newProduct.price}
                                onChange={handleInputChange}
                                className="p-2 border rounded"
                            />
                            <input
                                type="number"
                                name="originalPrice"
                                placeholder="Giá gốc (nếu có)"
                                value={editingProduct ? editingProduct.originalPrice : newProduct.originalPrice}
                                onChange={handleInputChange}
                                className="p-2 border rounded"
                            />
                            <input
                                type="text"
                                name="image"
                                placeholder="URL hình ảnh"
                                value={editingProduct ? editingProduct.image : newProduct.image}
                                onChange={handleInputChange}
                                className="p-2 border rounded"
                            />
                            <input
                                type="text"
                                name="category"
                                placeholder="Danh mục"
                                value={editingProduct ? editingProduct.category : newProduct.category}
                                onChange={handleInputChange}
                                className="p-2 border rounded"
                            />
                            <input
                                type="text"
                                name="subcategory"
                                placeholder="Danh mục phụ"
                                value={editingProduct ? editingProduct.subcategory : newProduct.subcategory}
                                onChange={handleInputChange}
                                className="p-2 border rounded"
                            />
                            <input
                                type="text"
                                name="skinType"
                                placeholder="Loại da (phân cách bằng dấu phẩy)"
                                value={editingProduct ? editingProduct.skinType : newProduct.skinType}
                                onChange={handleInputChange}
                                className="p-2 border rounded"
                            />
                            <input
                                type="text"
                                name="benefit"
                                placeholder="Lợi ích (phân cách bằng dấu phẩy)"
                                value={editingProduct ? editingProduct.benefit : newProduct.benefit}
                                onChange={handleInputChange}
                                className="p-2 border rounded"
                            />
                            <input
                                type="text"
                                name="brandId"
                                placeholder="ID thương hiệu"
                                value={editingProduct ? editingProduct.brandId : newProduct.brandId}
                                onChange={handleInputChange}
                                className="p-2 border rounded"
                            />
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    name="onSale"
                                    checked={editingProduct ? editingProduct.onSale : newProduct.onSale}
                                    onChange={handleInputChange}
                                    className="mr-2"
                                />
                                Đang giảm giá
                            </label>
                        </div>
                        <div className="mt-4 flex space-x-2">
                            <button
                                onClick={editingProduct ? handleUpdateProduct : handleAddProduct}
                                className="bg-blue-500 text-white px-4 py-2 rounded"
                            >
                                {editingProduct ? 'Cập nhật' : 'Thêm'}
                            </button>
                            <button
                                onClick={() => {
                                    setIsAdding(false);
                                    setEditingProduct(null);
                                }}
                                className="bg-gray-500 text-white px-4 py-2 rounded"
                            >
                                Hủy
                            </button>
                        </div>
                    </div>
                )}

                {/* Products table */}
                <table className="w-full text-left">
                    <thead>
                        <tr className="border-b">
                            <th className="p-2">ID</th>
                            <th className="p-2">Tên sản phẩm</th>
                            <th className="p-2">Mô tả</th>
                            <th className="p-2">Giá</th>
                            <th className="p-2">Danh mục</th>
                            <th className="p-2">Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredProducts.map((product) => (
                            <tr key={product.id} className="border-b">
                                <td className="p-2">{product.productId}</td>
                                <td className="p-2">{product.title}</td>
                                <td className="p-2">{product.description}</td>
                                <td className="p-2">{formatPrice(product.price)}</td>
                                <td className="p-2">{product.category}</td>
                                <td className="p-2 flex space-x-2">
                                    <button
                                        onClick={() => setEditingProduct(product)}
                                        className="text-blue-500"
                                    >
                                        Sửa
                                    </button>
                                    <button
                                        onClick={() => handleDeleteProduct(product.id)}
                                        className="text-red-500"
                                    >
                                        Xóa
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Products;