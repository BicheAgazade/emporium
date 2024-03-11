import { createContext, useContext, useState } from "react";
import delivery from "./imegs/delivery-large.jpg";
import payments from "./imegs/payment-large.jpg";
import giftcard from "./imegs/gift-coupon-large.jpg";
import returns from "./imegs/return-large.jpg";
import faq from "./imegs/faq-large.jpg";
import loyalty from "./imegs/loyalty-large.jpg";
import contact from "./imegs/contact-large.jpg";
import { useNavigate } from "react-router";

const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const navigate = useNavigate();
  const [selectedSection, setSelectedSection] = useState("");

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
      title: "Loyalty program",
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
    { title: "Fragrance", category: "all" },
    { title: "For Woman", category: "woman" },
    { title: "For Man", category: "man" },
    { title: "Unisex", category: "unisex" },
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
