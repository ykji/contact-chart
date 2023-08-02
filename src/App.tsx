import store from "./redux/store";
import Charts from "./pages/Charts";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Contact />} />
            <Route path="/charts" element={<Charts />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
