const Products = () => {
    const products = [
        { id: 1, name: 'Sữa rửa mặt dịu nhẹ', description: 'Làm sạch sâu, không gây khô da', price: '200.000 đ', stock: 50 },
        { id: 2, name: 'Serum Vitamin C', description: 'Làm sáng da, mờ thâm nám', price: '150.000 đ', stock: 30 },
        { id: 3, name: 'Kem chống nắng SPF 50', description: 'Bảo vệ da khỏi tia UV', price: '210.000 đ', stock: 40 },
    ];

    return (
        <div>
            <h2 className="text-xl font-semibold mb-4">Quản lý sản phẩm</h2>
            <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex justify-end mb-4">
                    <button className="bg-green-500 text-white px-4 py-2 rounded">Thêm sản phẩm mới</button>
                </div>
                <table className="w-full text-left">
                    <thead>
                        <tr className="border-b">
                            <th className="p-2">ID</th>
                            <th className="p-2">Tên sản phẩm</th>
                            <th className="p-2">Mô tả</th>
                            <th className="p-2">Giá</th>
                            <th className="p-2">Tồn kho</th>
                            <th className="p-2">Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product.id} className="border-b">
                                <td className="p-2">{product.id}</td>
                                <td className="p-2">{product.name}</td>
                                <td className="p-2">{product.description}</td>
                                <td className="p-2">{product.price}</td>
                                <td className="p-2">{product.stock}</td>
                                <td className="p-2 flex space-x-2">
                                    <button className="text-blue-500">Sửa</button>
                                    <button className="text-red-500">Xóa</button>
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