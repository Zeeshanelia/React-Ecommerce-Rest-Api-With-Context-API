import { getData } from "../context/DataContext";
import { useNavigate } from "react-router-dom";

const Category = () => {
  const { categoryOnlyData } = getData();

  const navigate = useNavigate();

  return (
    <section className="w-full bg-white py-3">

      {/* Slider */}
      <div
        className="
          flex
          gap-3
          overflow-x-auto
          px-4
          scrollbar-thin
          scroll-smooth
        "
        style={{
          WebkitOverflowScrolling: "touch",
        }}
      >
        {categoryOnlyData?.map((item, index) => (
          <button
            key={index}
            onClick={() => navigate(`/category/${item}`)}
            className="
              flex-shrink-0
              whitespace-nowrap

              px-5 py-2.5
              rounded-full

              text-sm sm:text-base
              font-semibold
              text-white

              bg-gradient-to-r
              from-purple-600
              to-blue-500

              hover:scale-105
              active:scale-95

              transition-all
              duration-200
            "
          >
            {item}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Category;