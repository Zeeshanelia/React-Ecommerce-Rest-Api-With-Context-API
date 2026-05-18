import { getData } from "../context/DataContext";
import { useNavigate } from "react-router-dom";
import { Sparkles } from "lucide-react";

const Category = () => {
  const { categoryOnlyData } = getData();
  const navigate = useNavigate();

  return (
    <section className="w-full py-8 bg-gradient-to-b from-gray-50 to-white">

      {/* Heading */}
      <div className="flex items-center gap-3 px-1 mb-6">
        <div className="p-2 rounded-xl bg-purple-100 text-purple-600 shadow-sm">
          <Sparkles size={20} />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Shop by Category
          </h2>

          <p className="text-sm text-gray-500">
            Discover products by category
          </p>
        </div>
      </div>

      {/* Grid Layout */}
      <div
        className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 px-4
        "
      >
        {categoryOnlyData?.map((item, index) => (
          <button
            key={index}
            onClick={() => navigate(`/category/${item}`)}
            className=" group relative overflow-hidden rounded-2xl p-2 bg-white border border-gray-200 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 active:scale-95
            "
          >
            {/* Gradient Hover Background */}
            <div
              className="
                absolute inset-0
                bg-gradient-to-r from-purple-500 to-blue-500
                opacity-0 group-hover:opacity-100
                transition duration-300
              "
            ></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center gap-3">

              {/* Circle Icon */}
              <div
                className="w-4 h-2 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-xl font-bold group-hover:bg-white/20 group-hover:text-white transition duration-300 "
              >
                {item.charAt(0).toUpperCase()}
              </div>

              {/* Category Name */}
              <h3
                className=" text-sm sm:text-base font-semibold text-gray-700 group-hover:text-white transition duration-300 text-center "
              >
                {item}
              </h3>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
};

export default Category;