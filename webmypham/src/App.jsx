import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage";
import Contact from "./pages/Contact";
import Header from "./components/Header"; 
import Footer from "./components/Footer";
import Introduce from "./pages/Introduce";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/lien-he" element={<Contact />} />
        <Route path="/gioi-thieu" element={<Introduce />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
