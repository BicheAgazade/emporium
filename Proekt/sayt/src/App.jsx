import { Route, Routes } from "react-router";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import About from "./pages/About";
import Home from "./pages/Home";
import "./App.css";
import Fragrance from "./pages/Fragrance";
import FavList from "./pages/FavList";
import { CategoryProvider } from "./CategoryContext";
import Stores from "./pages/Stores";
import Delivery from "./pages/Delivery";
import Payment from "./pages/Paymant";
import GiftCard from "./pages/GiftCart";
import Loyalty from "./pages/Loyalty";
import Faq from "./pages/Faq";
import ContactUs from "./pages/ContactUs";
import Returns from "./pages/Return";
import Details from "./pages/Details";
import Search from "./pages/Search";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BasketCart from "./pages/BasketCart";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <CategoryProvider>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/fragrance/:category" element={<Fragrance />} />
          <Route path="/favlist" element={<FavList />} />
          <Route path="/about" element={<About />} />
          <Route path="/stores" element={<Stores />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/paymant" element={<Payment />} />
          <Route path="/gift-cards" element={<GiftCard />} />
          <Route path="/loyalty" element={<Loyalty />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contacts" element={<ContactUs />} />
          <Route path="/returns" element={<Returns />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/search" element={<Search />} />
          <Route path="/basketcart" element={<BasketCart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <ToastContainer />
        <Footer />
      </div>
    </CategoryProvider>
  );
}

export default App;
