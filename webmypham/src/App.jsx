// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import HomePage from './pages/HomePage';
// import ProductPage from './pages/ProductPage';
// import Introduce from './pages/Introduce';
// import Service from './pages/Service';
// import Contact from './pages/Contact';
// import Cart from './pages/Cart';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import ScrollToTop from './components/ScrollToTop';
// import { AuthProvider } from './context/AuthContext';
// import { CartProvider } from './context/CartContext';
// import UserProfileDetails from './pages/UserProfileDetails';
// import ProductDetailPage from './pages/ProductDetailPage';
// import AdminPage from './pages/AdminPage';

// function App() {
//     return (

//         <AuthProvider>
//             <CartProvider>
//                 <Router>
//                     <ScrollToTop />
//                     <Header />
//                     <Routes>
//                         <Route path="/" element={<HomePage />} />
//                         <Route path="/san-pham" element={<ProductPage />} />
//                         <Route
//                             path="/san-pham/:productId"
//                             element={<ProductDetailPage />}
//                         />
//                         <Route path="/gioi-thieu" element={<Introduce />} />
//                         <Route path="/dich-vu" element={<Service />} />
//                         <Route path="/lien-he" element={<Contact />} />
//                         <Route path="/ho-so" element={<UserProfileDetails />} />
//                         <Route path="/gio-hang" element={<Cart />} />
//                     </Routes>
//                     <Footer />
//                 </Router>
//             </CartProvider>
//         </AuthProvider>
//     );
// }

// export default App;

import { BrowserRouter as Router } from 'react-router-dom';
import AdminPage from './pages/AdminPage';

function App() {
    return (
<<<<<<< HEAD
        // <AdminPage />
        <AuthProvider>
            <CartProvider>
                <Router>
                    <ScrollToTop />
                    <Header />
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/san-pham" element={<ProductPage />} />
                        <Route
                            path="/san-pham/:productId"
                            element={<ProductDetailPage />}
                        />
                        <Route path="/gioi-thieu" element={<Introduce />} />
                        <Route path="/dich-vu" element={<Service />} />
                        <Route path="/lien-he" element={<Contact />} />
                        <Route path="/ho-so" element={<UserProfileDetails />} />
                        <Route path="/gio-hang" element={<Cart />} />
                    </Routes>
                    <Footer />
                </Router>
            </CartProvider>
        </AuthProvider>
=======
        <Router>
            <AdminPage />
        </Router>
>>>>>>> nhien
    );
}

export default App;
