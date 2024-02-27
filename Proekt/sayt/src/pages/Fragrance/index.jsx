import { useEffect, useState } from "react";
import Product from "../../components/Product";
import "./style.css";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import categoryTitle from "../../category.title";

function Fragrance() {
  const [data, setdata] = useState([]);

  const { category } = useParams();


  useEffect(() => {
    const fetchData = async () => {
      try {
        let response;
        if (category && category.toLowerCase() !== "all") {
      response = await axios.get(
            `http://localhost:3000/product?category=${category}`
          );
        } else {
           response = await axios.get("http://localhost:3000/product");
        }
        setdata(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();

  }, [category]);

  return (
    <div className="fragrance-content">
      <aside className="fragrance-filter"></aside>

      <div className="title-fragrance">
        <h2 className="fragrance-h2-title">
          <Link to="/">Home</Link> /{" "}
          {categoryTitle.find((item) => item.category === category).title}
        </h2>
        <div className="fragrance-card">
          {data.map((item) => (
            <Product key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Fragrance;
