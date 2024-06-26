import "./style.css";
import logo from "../../imegs/emporium.logo.jpg";
import { Link, useNavigate } from "react-router-dom";
import Basket from "../../components/Basket";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import FavBadge from "./favlist.counter";
import { useCategory } from "../../CategoryContext";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";

function Header() {
  const navigate = useNavigate();
  const { favList } = useSelector((state) => state);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const {handleCategoryClick, categoryTitle, searchValue, setSearchValue, handelSearch } = useCategory();
    const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);


  return (
    <nav className="main-header-div">
      <div className="first-header-div">
        <div className="search-div">
          <input
            className="search-input"
            type="text"
            placeholder="Search perfumery"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <IoIosSearch onClick={handelSearch} className="search-icon" />
        </div>
        <div className="header-img-div">
          <Link to="/favlist">
            <div className="nav-icon-div">
              <IoIosHeartEmpty className="header-icon" />
              {favList.length > 0 ? <FavBadge /> : ""}
            </div>
          </Link>
          <Basket />
          <div className="burger-menu" onClick={toggleMenu}>
            {menuOpen ? (
              <IoCloseSharp className="icon-menu" />
            ) : (
              <HiOutlineMenu className="icon-menu" />
            )}
          </div>
          {menuOpen && (
            <div className="menu">
              <ul className="menu-ul">
                <li className="menu-li" onClick={() => navigate("/")}>
                  Home
                </li>
                {categoryTitle.map((item) => (
                  <li
                    className="menu-li"
                    onClick={() => navigate(`/fragrance/${item.category}`)}
                    key={item.category}
                  >
                    {item.title}
                  </li>
                ))}
                <li className="menu-li" onClick={() => navigate("/about")}>
                  About
                </li>
                <li className="menu-li" onClick={() => navigate("/stores")}>
                  Store Information
                </li>
                <li className="menu-li" onClick={() => navigate("/contacts")}>
                  Contact Us
                </li>
                <li className="menu-li" onClick={() => navigate("/faq")}>
                  FAQ
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="second-header">
        <div className="logo-div">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="header-btn">
          <li onClick={()=>navigate("/")}>Home</li>
          {categoryTitle.map((item) => (
            <li
              onClick={() => navigate(`/fragrance/${item.category}`)}
              key={item.category}
            >
              {item.title}
            </li>
          ))}

          <li
            onMouseEnter={() => setShowHelp(true)}
            onMouseLeave={() => setShowHelp(false)}
            className="support-li"
          >
            Support
            {showHelp ? <MdKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown />}
            {showHelp && (
              <ul data-aos="zoom-in" className="ul-support">
                <li onClick={() => handleCategoryClick("gift-cards")}
                >
                  Gift Cards
                </li>
                <li onClick={() => handleCategoryClick("loyalty")}
                >
                  Loyalty
                </li>
                <li onClick={() => handleCategoryClick("faq")}
                >
                  FAQ
                </li>
                <li onClick={() => handleCategoryClick("delivery")}
                >
                  Delivery
                </li>
                <li  onClick={() => handleCategoryClick("returns")}
                >
                  Return/Exchange
                </li>
                <li onClick={() => handleCategoryClick("paymant")}>
                  Payment
                </li>
              </ul>
            )}
          </li>
          <li onClick={() =>{ navigate("/contacts")
           handleCategoryClick("contacts");}}>Contact Us</li>
        </div>
      </div>
    </nav>
  );
}

export default Header;
