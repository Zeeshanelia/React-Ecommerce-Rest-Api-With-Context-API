import { getData } from "../context/DataContext";

const FilterSection = () => {
    const { categoryOnlyData } = getData();

    return (

        // Main Filter Container
        <div
            className="
                mt-6 md:mt-10

                /* Full width mobile */
                w-full

                /* Fixed width desktop */
                md:min-w-[240px]
                lg:min-w-[260px]

                /* Responsive padding */
                p-3 sm:p-4 md:p-5

                rounded-xl md:rounded-2xl

                h-max

                /* Glassmorphism */
                bg-white/20
                backdrop-blur-md

                border border-white/40

                shadow-lg
                shadow-indigo-200/40">

            {/* Top Shimmer Line */}
            <div
                className="
                    h-px bg-gradient-to-r from-transparent via-white to-transparent
                    mb-4"/>



            {/* Search Input */}
            <input
                type="text"
                placeholder="Search.."

                className="
                    w-full
                    /* Responsive padding */
                    p-2 sm:p-3

                    rounded-xl
                    bg-white/30
                    backdrop-blur-sm

                    border border-white/50

                    placeholder-slate-400
                    text-slate-700

                    /* Responsive text */
                    text-sm sm:text-base

                    focus:outline-none
                    focus:ring-2
                    focus:ring-indigo-300/50

                    transition-all
                    duration-200"/>



            {/* Category Heading */}
            <h1
                className="
                    mt-5

                    font-bold

                    /* Responsive heading */
                    text-lg sm:text-xl

                    tracking-wide

                    bg-gradient-to-r
                    from-cyan-500
                    to-indigo-500

                    bg-clip-text
                    text-transparent">
                Category
            </h1>



            {/* Divider */}
            <div
                className="
                    h-px

                    bg-gradient-to-r
                    from-cyan-300/50
                    via-indigo-300/50
                    to-transparent

                    mt-2
                    mb-3" />



            {/* Category List */}
            <div
                className="
                    flex
                    flex-col

                    /* Responsive spacing */
                    gap-1 sm:gap-2

                    /* Scroll if many categories */
                    max-h-[300px]
                    overflow-y-auto
                    pr-1" >

                {/* Loop Categories */}
                {categoryOnlyData?.map((item, index) => (

                    <div
                        key={index}

                        className="
                            flex
                            items-center
                            gap-2 sm:gap-3

                            /* Responsive padding */
                            p-2

                            rounded-xl

                            hover:bg-white/30

                            transition-all
                            duration-200

                            group
                            cursor-pointer">

                        {/* Checkbox */}
                        <input
                            type="checkbox"

                            className="
                                accent-indigo-500

                                w-4 h-4
                                sm:w-5 sm:h-5

                                cursor-pointer

                                flex-shrink-0"/>



                        {/* Category Button */}
                        <button
                            className="
                                cursor-pointer

                                uppercase

                                /* Responsive text */
                                text-xs sm:text-sm

                                font-semibold

                                text-slate-600

                                group-hover:text-indigo-600

                                transition-colors
                                duration-200

                                tracking-wider

                                /* Prevent overflow */
                                truncate">
                            {item}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FilterSection;