import { useCategory } from "../../CategoryContext";
import "./style.css"
import { useNavigate } from "react-router";


function CompleteOrder(){
const navigate=useNavigate()
 const { scrollToTop } = useCategory();

    return (
      <div className="complate-order-div">
        <div className="complate-inner-order-div">
          <span onClick={()=>{
            navigate("/") 
          scrollToTop()}}>&times;</span>
          <img src="https://i.gifer.com/7efs.gif" alt="" />
          <h2>YOUR ORDER IS COMPLETE!</h2>
          <p>You will be receiving a confirmation email with order details</p>
          </div>
      </div>
    );
}
export default CompleteOrder