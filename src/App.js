import Home from "./components/home";
import General from "./components/general";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/que-hacemos" element={<General />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
