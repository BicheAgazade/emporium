import { useCategory } from "../../CategoryContext";
import Product from "../../components/Product";
import "./style.css";
import sadness from "../../imegs/sadness.webp";

function Search() {
  const { searchResults } = useCategory();

  return (
    <div className="search-page-div">
      <h2 className="search-title-h2">Search Results</h2>
      <div className="search-product-div">
        {searchResults.length > 0
          ? searchResults.map((item) => <Product key={item.id} item={item} />)
          : <div className="sadness-div">
            <img className="sadness-img" src={sadness}/>
            <p>NOT FOUND</p>
            </div>}
      </div>
    </div>
  );
}

export default Search;
