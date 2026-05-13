import { useEffect, useState } from "react";
import { getData } from "../context/DataContext";
import FilterSection from "../component/FilterSection";
import ProductCart from "../component/ProductCart";
import Pagination from "../component/Pagination";
import Lottie from "lottie-react";
import Pagenotfound from "../assets/Pagenotfound.json";

const Product = () => {
  const { data, fetchAllData } = getData();

  const Loading = "/images/Loading.mp4";

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("fragrances");
  const [brand, setBrand] = useState("gucci");
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchAllData();
  }, []);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setPage(1);
  };

  const handleBrandChange = (e) => {
    setBrand(e.target.value);
    setPage(1);
  };

  const handlePage = (selectedPage) => {
    setPage(selectedPage);
  };

  const filterData = data?.filter(
    (item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) &&
      (category === "fragrances" || item.category === category) &&
      (brand === "gucci" || item.brand === brand) &&
      item.price >= priceRange[0] &&
      item.price <= priceRange[1]
  );

  const dynamicPage = Math.ceil(filterData?.length / 16);

  return (
    <section className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-4">
      {data?.length > 0 ? (
        <div className="flex flex-col lg:flex-row gap-5">

          {/* Sidebar */}
          <aside className="w-full lg:w-72 xl:w-80 flex-shrink-0">
            <div className="sticky top-20">
              <FilterSection
                search={search}
                setSearch={setSearch}
                category={category}
                brand={brand}
                setBrand={setBrand}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                setCategory={setCategory}
                handleCategoryChange={handleCategoryChange}
                handleBrandChange={handleBrandChange}
              />
            </div>
          </aside>

          {/* Products */}
          <main className="flex-1 min-w-0">
            {filterData?.length > 0 ? (
              <div className="flex flex-col gap-6">

                {/* Product Grid */}
                <div
                  className="
                    grid
                    grid-cols-2
                    sm:grid-cols-2
                    md:grid-cols-3
                    xl:grid-cols-4
                    gap-3
                    sm:gap-4
                  "
                >
                  {filterData
                    ?.slice(page * 16 - 16, page * 16)
                    .map((products) => (
                      <ProductCart
                        key={products.id}
                        products={products}
                      />
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center overflow-x-auto">
                  <Pagination
                    page={page}
                    handlePage={handlePage}
                    dynamicPage={dynamicPage}
                  />
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center min-h-[300px] sm:min-h-[450px]">
                <Lottie
                  animationData={Pagenotfound}
                  className="w-full max-w-xs sm:max-w-md md:max-w-2xl"
                />
              </div>
            )}
          </main>
        </div>
      ) : (
        <div className="flex items-center justify-center min-h-[500px]">
          <video
            muted
            autoPlay
            loop
            className="w-40 sm:w-56 md:w-72 lg:w-80"
          >
            <source src={Loading} type="video/mp4" />
          </video>
        </div>
      )}
    </section>
  );
};

export default Product;