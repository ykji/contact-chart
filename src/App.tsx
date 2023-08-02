import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Charts from "./pages/Charts";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Contact />} />
          <Route path="/charts" element={<Charts />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
