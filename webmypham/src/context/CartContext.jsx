import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    // Lấy giỏ hàng từ localStorage nếu có
    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    // Lưu giỏ hàng vào localStorage mỗi khi thay đổi
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    // Thêm sản phẩm vào giỏ hàng
    const addToCart = (product) => {
        setCartItems((prevItems) => {
            // Kiểm tra xem sản phẩm đã có trong giỏ hàng chưa
            const existingItemIndex = prevItems.findIndex(
                (item) => item.id === product.id
            );

            let newItems;
            if (existingItemIndex >= 0) {
                // Nếu đã có, tăng số lượng
                newItems = [...prevItems];
                newItems[existingItemIndex] = {
                    ...newItems[existingItemIndex],
                    quantity: newItems[existingItemIndex].quantity + 1,
                };
            } else {
                // Nếu chưa có, thêm mới với số lượng là 1
                newItems = [...prevItems, { ...product, quantity: 1 }];
            }

            return newItems;
        });
    };

    // Xóa sản phẩm khỏi giỏ hàng
    const removeFromCart = (productId) => {
        setCartItems((prevItems) =>
            prevItems.filter((item) => item.id !== productId)
        );
    };

    // Cập nhật số lượng sản phẩm
    const updateQuantity = (productId, quantity) => {
        if (quantity <= 0) {
            removeFromCart(productId);
            return;
        }

        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === productId ? { ...item, quantity } : item
            )
        );
    };

    // Tính tổng số sản phẩm trong giỏ hàng
    const getCartCount = () => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    };

    // Tính tổng tiền
    const getCartTotal = () => {
        return cartItems.reduce(
            (total, item) => total + item.price * item.quantity,
            0
        );
    };

    // Xóa toàn bộ giỏ hàng
    const clearCart = () => {
        setCartItems([]);
    };

    const value = {
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        getCartCount,
        getCartTotal,
        clearCart,
    };

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
};
