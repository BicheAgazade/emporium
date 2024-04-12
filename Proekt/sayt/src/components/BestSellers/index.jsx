import "./style.css"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCategory } from "../../CategoryContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { addToCartAction } from "../../Redux/Actions/cart.actions";


function BestSeller(){
     const dispatch = useDispatch();
     const navigate = useNavigate();
     const { scrollToTop, product } = useCategory();

     useEffect(() => {
       AOS.init();
       AOS.refresh();
     }, []);

    let bestproduct = product.filter((item) => item.bestseller=== true);
   
    return (
      <div className="bestseller-main-div">
        <Swiper
          autoplay={{ delay: 3000}}
          loop={true}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper-bestseller"
        >
          <SwiperSlide className="bestseller-slider">
            <img
              src="https://www.armanibeauty.ae/dw/image/v2/BFZH_PRD/on/demandware.static/-/Sites-armanibeauty-master-catalog/default/dw7846d542/Top%20SKUs%20Images/ww-00123-arm-with-packshots/GA_2022_Si-Passione_Pack-with-Ingredients_RVB-3000-v2.jpg?sw=1200&sh=1200"
              alt=""
            />
            <div
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
              className="bestseller-info-div"
            >
              <h2>Fragrance Collection</h2>
              <p>Scenting moments & memories.</p>
              <button
                onClick={() => {
                  navigate("/fragrance/all");
                  scrollToTop();
                }}
              >
                View More
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide className="bestseller-slider">
            <img
              src="https://media.ulta.com/i/ulta/2574763cm_alt02?w=1020&h=1020"
              alt=""
            />
            <div
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
              className="bestseller-info-div"
            >
              <h2>Fragrance Collection</h2>
              <p>Scenting moments & memories.</p>
              <button
                onClick={() => {
                  navigate("/fragrance/all");
                  scrollToTop();
                }}
              >
                View More
              </button>
            </div>
          </SwiperSlide>
        </Swiper>

        <div className="bestseller-main-product-div">
          <div className="bestseller-inner-product-div">
            {bestproduct.map((item) => (
              <div className="bestseller-product-div" key={item.id}>
                <img onClick={()=>{
                    navigate(`/details/${item.id}`)
                    scrollToTop()
                }} src={item.img} alt="" />
                <h2>{item.brand}</h2>
                <p>{item.price} AZN</p>
                <button onClick={()=> {dispatch(addToCartAction(item));
                toast.success("Product successfully added to cart!")}}>ADD TO CART</button>
                <span>Best Seller!</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}

export default BestSeller