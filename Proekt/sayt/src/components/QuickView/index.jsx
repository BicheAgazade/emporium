import "./style.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import { useState } from "react";
import { FaRegHeart } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { addToCartAction } from "../../Redux/Actions/cart.actions";
import { removeFromFav } from "../../Redux/Actions/fav.actions";
import { useCategory } from "../../CategoryContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function QuickView({ item, onClose, fav, isFavorited }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const{scrollToTop}= useCategory()

  let arr = item?.imegs?.map((img, index) => (
    <SwiperSlide key={index}>
      <img src={img} />
    </SwiperSlide>
  ));

  return (
    <div className="quick-view-modal-main">
      <div className="quick-view-modal">
        <button className="close-modal-btn" onClick={onClose}>
          &times;
        </button>
<div className="slider-modal">
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
          <div className="slider-modal-footer">
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
    <div className="modal-info-div">
          <h2 className="modal-info-h2">{item.brand}</h2>
          <p className="modal-info-p">{item.name}</p>
          <p className="modal-info-p">{item.price} AZN</p>
          <p className="modal-info-p">SIZE: {item.size}</p>
          <div className="modal-btn-div">
            <button
              onClick={() => {dispatch(addToCartAction(item))
              toast.success("Product successfully added to cart!");}}
              className="modal-add-to-cart"
            >
              ADD TO CART
            </button>
            <div className="modal-fav-icon">
              {isFavorited ? (
                <FaHeart
                  onClick={() =>{ dispatch(removeFromFav(item))
                 toast.error("Product removed from favlist!")}}
                  className="modal-heart-icon favorited"
                />
              ) : (
                <FaRegHeart onClick={fav} className="modal-heart-icon" />
              )}
            </div>
          </div>
          <button
            onClick={() => {scrollToTop();
               navigate(`/details/${item.id}`)}}
            className="modal-view-page"
          >
            VIEW PRODUCT PAGE
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuickView;
