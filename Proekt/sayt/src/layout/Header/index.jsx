import "./style.css";
import logo from "../../imegs/emporium.logo.jpg";
import { Link, useNavigate } from "react-router-dom";
import Basket from "../../components/Basket";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import categoryTitle from "../../category.title";
import FavBadge from "./favlist.counter";
import { useSelector } from "react-redux";

function Header() {
  const navigate = useNavigate();
  const { favList } = useSelector((state) => state);

  return (
    <nav className="main-header-div">
      <div className="first-header-div">
        <div className="search-div">
          <input
            className="search-input"
            type="text"
            placeholder="Search perfumery"
          />
          <IoIosSearch className="search-icon" />
        </div>
        <div className="header-img-div">
          <Link to="/favlist">
            <div className="nav-icon-div">
              <IoIosHeartEmpty className="header-icon" />
              {favList.length > 0 ? <FavBadge /> : ""}
            </div>
          </Link>
          <Basket />
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
