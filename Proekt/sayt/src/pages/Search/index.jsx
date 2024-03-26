import { useCategory } from "../../CategoryContext";
import Product from "../../components/Product";
import "./style.css";

function Search() {
  const { searchResults } = useCategory();

  return (
    <div className="search-page-div">
      <h2 className="search-title-h2">Search Results</h2>
      <div className="search-product-div">
        {searchResults.map((item) => (
          <Product key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Search;
