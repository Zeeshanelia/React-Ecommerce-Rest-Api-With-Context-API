import { getData } from "../context/DataContext";

const FilterSection = ({
  search,
  setSearch,
  brand,
  setBrand,
  priceRange,
  setPriceRange,
  category,
  setCategory,
  handleCategoryChange,
  handleBrandChange,
}) => {
  const { categoryOnlyData, brandOnlyData } = getData();

  // Reset Filters
  const resetFilters = () => {
    setSearch("");
    setCategory(categoryOnlyData?.[0] || "");
    setBrand("");
    setPriceRange([0, 1000]);
  };

  return (
    <div className="mt-1 h-full p-3 rounded-2xl md:min-w-[220px] bg-white/20 backdrop-blur-md border border-white/40 shadow-lg shadow-indigo-200/40">

      {/* Brand */}
      <h2 className="mb-2 text-center font-bold text-md tracking-tight bg-gradient-to-r from-cyan-500 to-indigo-500 bg-clip-text text-transparent">
        Brand
      </h2>

      <select
        className="w-full rounded-lg border border-gray-300 p-2 bg-white/40 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
        onChange={handleBrandChange}
        value={brand}
      >
        <option value="">All Brands</option>

        {brandOnlyData?.length > 0 ? (
          brandOnlyData.map((item, index) => (
            <option value={item} key={index}>
              {item}
            </option>
          ))
        ) : (
          <option disabled>No Brands</option>
        )}
      </select>

      {/* Price Range */}
      <h2 className="py-3 text-center font-bold text-md tracking-wide bg-gradient-to-r from-cyan-500 to-indigo-500 bg-clip-text text-transparent">
        Price Range
      </h2>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">
          Price: ${priceRange[0]} - ${priceRange[1]}
        </label>

        <input
          type="range"
          className="w-full cursor-pointer"
          value={priceRange[1]}
          min={0}
          max={1000}
          onChange={(e) =>
            setPriceRange([0, Number(e.target.value)])
          }
        />
      </div>

      {/* Reset Button */}
      <button
        onClick={resetFilters}
        className="mt-5 w-full px-4 py-2 rounded-xl font-semibold text-sm bg-white/40 border border-white/50 text-slate-700 hover:bg-white/60 hover:shadow-md flex gap-2 items-center justify-center transition-all duration-200 hover:scale-105 backdrop-blur-sm"
      >
        Reset Filter
      </button>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-cyan-300/50 via-indigo-300/50 to-transparent mt-4 mb-3" />

      {/* Category */}
      <h2 className="mb-2 text-center font-bold text-md tracking-wide bg-gradient-to-r from-cyan-500 to-indigo-500 bg-clip-text text-transparent">
        Category
      </h2>

      {/* Search */}
      <input
        type="text"
        placeholder="Search Products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-2 rounded-lg border border-gray-300 bg-white/30 backdrop-blur-sm placeholder-slate-400 text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-300/50 transition-all duration-200"
      />

      {/* Categories */}
      <div className="flex flex-col mt-3 text-left">

        {categoryOnlyData?.length > 0 ? (
          categoryOnlyData.map((item, index) => (
            <label
              key={index}
              htmlFor={item}
              className="flex gap-3 items-center p-2 rounded-xl hover:bg-white/30 transition-all duration-200 group cursor-pointer"
            >
              <input
                id={item}
                type="radio"
                name="category"
                value={item}
                onChange={handleCategoryChange}
                checked={category === item}
                className="accent-indigo-500 w-4 h-4 cursor-pointer"
              />

              <span className="uppercase text-sm font-semibold text-slate-600 group-hover:text-indigo-600 transition-colors duration-200 tracking-wider">
                {item}
              </span>
            </label>
          ))
        ) : (
          <p className="text-sm text-gray-500 text-center mt-2">
            No Categories Found
          </p>
        )}
      </div>
    </div>
  );
};

export default FilterSection;