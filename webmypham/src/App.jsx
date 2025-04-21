import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import ProductPage from "./pages/Productpage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/san-pham" element={<ProductPage />} />
        <Route path="/lien-he" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
