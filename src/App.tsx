import Home from "./pages/Home";
import store from "./redux/store";
import Charts from "./pages/covid-19";
import Contact from "./pages/contact";
import { Provider } from "react-redux";
import Navbar from "./components/Navbar";
import Worldwide from "./pages/covid-19/Worldwide";
import Historical from "./pages/covid-19/Historical";
import CountryWise from "./pages/covid-19/CountryWise";
import ContactDetails from "./pages/contact/ContactDetails";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/contact/:id" element={<ContactDetails />} />
              <Route path="/charts" element={<Charts />}>
                <Route index element={<Worldwide />} />
                <Route path="worldwide" element={<Worldwide />} />
                <Route path="country-wise" element={<CountryWise />} />
                <Route path="historical" element={<Historical />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </QueryClientProvider>
      </Provider>
    </>
  );
}

export default App;
