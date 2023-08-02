import store from "./redux/store";
import Charts from "./pages/Charts";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactDetails from "./pages/ContactDetails";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/contact/:id" element={<ContactDetails />} />
            <Route path="/charts" element={<Charts />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
