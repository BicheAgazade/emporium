import { useParams } from "react-router";
import "./style.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper";
import { FaRegHeart } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { FaHeart } from "react-icons/fa6";
import { IoIosArrowUp } from "react-icons/io";
import { useDispatch } from "react-redux";
import { addToCartAction } from "../../Redux/Actions/cart.actions";
import { addToFavAction, removeFromFav } from "../../Redux/Actions/fav.actions";

function Details() {
  const [obj, setObj] = useState({});
  const [showDscp, setShowDscp] = useState(false);
  const [changeHeart, setChangeHeart] = useState(false);
  const { id } = useParams();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/product/${id}`)
      .then((res) => setObj(res.data));
  }, [id]);

  let arr = obj?.imegs?.map((img, index) => (
    <SwiperSlide className="swiper-slide-img" key={index}>
      <img src={img} />
    </SwiperSlide>
  ));

  const handelAddToFav = () => {
    dispatch(addToFavAction(obj));
    setChangeHeart(true);
  };

  return (
    <div className="details-main-div">
      <div className="slider-details">
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          loop={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="swiper-modal-1"
        >
          {arr}
        </Swiper>
        <div className="slider-modal-footer ">
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="swiper-modal-2"
          >
            {arr}
          </Swiper>
        </div>
      </div>
      <div className="details-info-div">
        <h2 className="details-info-h2">{obj.brand}</h2>
        <p className="details-info-p">{obj.name}</p>
        <p className="details-info-p">{obj.price} AZN</p>
        <p className="details-info-p">SIZE: {obj.size}</p>
        <div className="details-btn-div">
          <button
            onClick={() => dispatch(addToCartAction(obj))}
            className="details-add-to-cart"
          >
            ADD TO CART
          </button>

          {changeHeart ? (
            <div className="details-fav-div">
              <FaHeart
                onClick={() => {
                  setChangeHeart(false);
                  dispatch(removeFromFav(obj));
                }}
                className="details-heart-div favorited"
              />
              <p className="details-fav-p">REMOVE FROM WISHIST</p>
            </div>
          ) : (
            <div className="details-fav-div">
              <FaRegHeart
                onClick={handelAddToFav}
                className="details-heart-div"
              />
              <p className="details-fav-p">ADD TO WISHIST</p>
            </div>
          )}
        </div>
        <div className="details-dscp-div">
          <div className="details-dscp-title-div">
            <h3 className="details-dscp-title-h3">Description</h3>
            {showDscp ? (
              <IoIosArrowUp
                onClick={() => setShowDscp(false)}
                className="details-dscp-arr-icon"
              />
            ) : (
              <IoIosArrowDown
                onClick={() => setShowDscp(true)}
                className="details-dscp-arr-icon"
              />
            )}
          </div>
          {showDscp ? (
            <ul>
              {obj?.notes?.map((item, index) => (
                <li className="details-li" key={index}>
                  {item}
                </li>
              ))}
              <li className="details-li">Volume: {obj.size}</li>
            </ul>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default Details;
