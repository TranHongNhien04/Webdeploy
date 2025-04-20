import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage";
import Contact from "./pages/Contact";
import Header from "./components/Header"; // Nếu Header nằm trong components

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/lien-he" element={<Contact />} />
        {/* Thêm các route khác tại đây nếu có */}
      </Routes>
    </Router>
  );
}

export default App;
