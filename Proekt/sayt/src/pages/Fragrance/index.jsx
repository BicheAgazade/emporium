import { useEffect, useState } from "react";
import Product from "../../components/Product";
import "./style.css";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useCategory } from "../../CategoryContext";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function Fragrance() {
  const [originalData, setOriginalData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const { category } = useParams();
  const { categoryTitle } = useCategory();
  const [sortOption, setSortOption] = useState("");
  const [filterNew, setFilterNew] = useState(false);
  const [filterBestseller, setFilterBestseller] = useState(false);
  const [filterAll, setFilterAll] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    setSortOption(value);
    setFilterNew(value === "new");
    setFilterBestseller(value === "bestseller");
    setFilterAll(value==="all")
  };

  useEffect(() => {
    axios
      .get(
        `http://localhost:3000/product?${
          category !== "all" ? "category=" + category : ""
        }`
      )
      .then(({ data }) => { 
        setOriginalData(data)
        setFilteredData(data)})
      .catch((err) => console.log("Error fetching products:", err));
  }, [category]);

  useEffect(() => {
    let newData = [...originalData];

    if (filterNew) {
      newData = newData.filter((item) => item.new === true);
    }

    if (filterBestseller) {
      newData = newData.filter((item) => item.bestseller === true);
    }
    if (filterAll) {
      newData;
    }

    switch (sortOption) {
      case "asc":
        newData.sort((a, b) => a.price - b.price);
        break;
      case "desc":
        newData.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    setFilteredData(newData);
  }, [sortOption, originalData, filterNew, filterBestseller, filterAll]);

  return (
    <div className="fragrance-content">
      <div>
        <div className="h2-filter-div">
          <h2 className="fragrance-h2-title">
            <Link to="/">Home</Link> /
            {categoryTitle.find((item) => item.category === category).title}
          </h2>
          <div className="fragrance-filter">
            <label className="filter-label">
              <Box sx={{ minWidth: 120 }}>
                <FormControl className="sort-filter" fullWidth>
                  <InputLabel id="demo-simple-select-label">Sort</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={sortOption}
                    label="sort"
                    onChange={handleChange}
                  >
                    <MenuItem value={"all"}>VIEW ALL</MenuItem>
                    <MenuItem value={"new"}>NEW</MenuItem>
                    <MenuItem value={"bestseller"}>BESTSELLER</MenuItem>
                    <MenuItem value={"asc"}>PRICE LOW TO HIGH</MenuItem>
                    <MenuItem value={"desc"}>PRICE HIGH TO LOW</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </label>
          </div>
        </div>
        <div className="fragrance-card">
          {filteredData.map((item) => (
            <Product key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Fragrance;
