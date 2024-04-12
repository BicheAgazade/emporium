import { createContext, useContext, useEffect, useState } from "react";
import delivery from "./imegs/delivery-large.jpg";
import payments from "./imegs/payment-large.jpg";
import giftcard from "./imegs/gift-coupon-large.jpg";
import returns from "./imegs/return-large.jpg";
import faq from "./imegs/faq-large.jpg";
import loyalty from "./imegs/loyalty-large.jpg";
import contact from "./imegs/contact-large.jpg";
import woman from "./imegs/wom2.jpg";
import man from "./imegs/man.png";
import all from "./imegs/allfrag.jpg";
import unisex from "./imegs/unisex2.jpg";
import { useNavigate } from "react-router";
import axios from "axios";

const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const navigate = useNavigate();
  const [selectedSection, setSelectedSection] = useState("");
  const [product, setProduct] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  function handelSearch() {
    navigate("/search");
    const results = product.filter((product) =>
      product.brand.toLowerCase().includes(searchValue.toLowerCase())
    );
    setSearchResults(results);
    setSearchValue("");
  }

  useEffect(() => {
    axios
      .get(`http://localhost:3000/product`)
      .then(({ data }) => {
        setProduct(data);
      })
      .catch((err) => console.log("Error fetching products:", err));
  }, []);

  const infoTitle = [
    {
      title: "GIFT CARDS",
      category: "gift-card",
      img: giftcard,
    },
    {
      title: "RETURN AND EXCHANGE",
      category: "returns",
      img: returns,
    },
    {
      title: "PAYMENT METHODS",
      category: "payment",
      img: payments,
    },
    {
      title: "DELIVERY TERMS",
      category: "delivery",
      img: delivery,
    },
    {
      title: "FAQ",
      category: "faq",
      img: faq,
    },
    {
      title: "LOYALTY PROGRAM",
      category: "loyalty",
      img: loyalty,
    },
    {
      title: "CONTACT US",
      category: "contacts",
      img: contact,
    },
  ];

  const categoryTitle = [
    { title: "Fragrance", category: "all", img: all },
    { title: "For Woman", category: "woman", img: woman },
    { title: "For Man", category: "man", img: man },
    { title: "Unisex", category: "unisex", img: unisex },
  ];
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  
  const handleCategoryClick = (category) => {
    navigate(`/${category}`);
    scrollToTop();
    setSelectedSection(`${category}`);
  };

  const contextValue = {
    infoTitle,
    selectedSection,
    setSelectedSection,
    scrollToTop,
    handleCategoryClick,
    categoryTitle,
    setProduct,
    product,
    searchValue,
    setSearchValue,
    searchResults,
    setSearchResults,
    handelSearch,
  
  };

  return (
    <CategoryContext.Provider value={contextValue}>
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategory = () => {
  const context = useContext(CategoryContext);
  if (!context) {
    throw new Error("useCategory must be used within a CategoryProvider");
  }
  return context;
};
