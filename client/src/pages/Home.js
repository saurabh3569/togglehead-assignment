import React from "react";
import Navbar from "../components/Navbar";
import CategoryFilter from "../components/CategoryFilter";
import ProductList from "../components/ProductList";
import bgImage from "../assets/product.jpg";

const Home = () => {
  const [selectedCategories, setSelectedCategories] = React.useState([]);

  return (
    <div>
      {/* Hero Image */}
      <div
        style={{
          width: "100%",
          height: "600px",
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
        }}
      ></div>

      {/* Products Section */}
      <div
        id="products"
        style={{ display: "flex", padding: "20px", gap: "20px" }}
      >
        {/* Left Filter */}
        <div style={{ width: "250px" }}>
          <div
            style={{
              borderBottom: "1px solid #eee",
              paddingBottom: "10px",
              marginBottom: "10px",
            }}
          >
            <h3>Filter By</h3>
          </div>
          <CategoryFilter
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
          />
        </div>

        {/* Right Products */}
        <div style={{ flex: 1 }}>
          <ProductList selectedCategories={selectedCategories} />
        </div>
      </div>
    </div>
  );
};

export default Home;
