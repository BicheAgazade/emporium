import "./style.css";
import logo from "../../imegs/emporium.logo.jpg";
import { Link, useNavigate } from "react-router-dom";
import Basket from "../../components/Basket";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import FavBadge from "./favlist.counter";
import { useCategory } from "../../CategoryContext";
import { useSelector } from "react-redux";
import { useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";

function Header() {
  const navigate = useNavigate();
  const { favList } = useSelector((state) => state);
  const [menuOpen, setMenuOpen] = useState(false);

  const { categoryTitle, searchValue, setSearchValue, handelSearch } =
    useCategory();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

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
          {categoryTitle.map((item) => (
            <li
              onClick={() => navigate(`/fragrance/${item.category}`)}
              key={item.category}
            >
              {item.title}
            </li>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Header;
