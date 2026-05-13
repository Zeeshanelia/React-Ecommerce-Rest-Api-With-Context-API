import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import ProductCart from "../component/ProductCart";

const CategoryProduct = () => {
  const { category } = useParams();

  const [data, setData] = useState([]);

  const Loading = "/images/Loading.mp4";

  const fetchCategoryProducts = async () => {
    try {
      const response = await axios.get(
        `https://dummyjson.com/products/category/${category}`
      );

      setData(response.data.products);

      console.log(response.data.products, "categoryProducts");
    } catch (error) {
      console.log("API Error:", error);
    }
  };

  useEffect(() => {
    fetchCategoryProducts();
  }, [category]);

  return (
    <section className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-5">
      {data.length > 0 ? (
        <>
          {/* Heading */}
          <div className="mb-5">
            <h1
              className="
                text-2xl
                sm:text-3xl
                font-bold
                capitalize
                tracking-tight
              "
            >
              {category}
            </h1>

            <p className="text-gray-500 text-sm sm:text-base mt-1">
              {data.length} Products Available
            </p>
          </div>

          {/* Products Grid */}
          <div
            className="
              grid
              grid-cols-2
              sm:grid-cols-2
              md:grid-cols-3
              xl:grid-cols-4
              gap-3
              sm:gap-4
              lg:gap-5
            "
          >
            {data.map((products) => (
              <ProductCart
                key={products.id}
                products={products}
              />
            ))}
          </div>
        </>
      ) : (
        <div className="flex items-center justify-center min-h-[400px] sm:min-h-[500px]">
          <video
            muted
            autoPlay
            loop
            className="w-40 sm:w-56  md:w-72 lg:w-80">
            <source src={Loading} type="video/mp4" />
          </video>
        </div>
      )}
    </section>
  );
};

export default CategoryProduct;