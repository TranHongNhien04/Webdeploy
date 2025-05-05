import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Homepage';
import Contact from './pages/Contact';
import ProductPage from './pages/Productpage';
import Header from './components/Header';
import Footer from './components/Footer';
import Introduce from './pages/Introduce';
import Service from './pages/Service';
import Profile from './pages/Profile';
import Cart from './pages/Cart'; // Import trang giỏ hàng
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext'; // Import CartProvider
import ScrollToTop from './components/ScrollToTop';

function App() {
    return (
        <AuthProvider>
            <CartProvider>
                <Router>
                    <ScrollToTop />
                    <Header />
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/san-pham" element={<ProductPage />} />
                        <Route path="/gioi-thieu" element={<Introduce />} />
                        <Route path="/dich-vu" element={<Service />} />
                        <Route path="/lien-he" element={<Contact />} />
                        <Route path="/ho-so" element={<Profile />} />
                        <Route path="/gio-hang" element={<Cart />} />
                    </Routes>
                    <Footer />
                </Router>
            </CartProvider>
        </AuthProvider>
    );
}

export default App;
