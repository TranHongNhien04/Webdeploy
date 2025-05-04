import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Homepage';
import Contact from './pages/Contact';
import ProductPage from './pages/Productpage';
import Header from './components/Header';
import Footer from './components/Footer';
import Introduce from './pages/Introduce';
import Service from './pages/Service';
import Profile from './pages/Profile';
import { AuthProvider } from './context/AuthContext';
// json-server --watch src/data/db.json --port 3001
function App() {
    return (
        <AuthProvider>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/san-pham" element={<ProductPage />} />
                    <Route path="/dich-vu" element={<Service />} />
                    <Route path="/lien-he" element={<Contact />} />
                    <Route path="/gioi-thieu" element={<Introduce />} />
                    <Route path="/tai-khoan" element={<Profile />} />
                    <Route path="/thong-tin-tai-khoan" element={<Profile />} />
                </Routes>
                <Footer />
            </Router>
        </AuthProvider>
    );
}

export default App;
