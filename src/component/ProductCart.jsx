import { ShoppingBag } from "lucide-react";

const ProductCart = ({ products }) => {
    return (

        // Main Product Card
        <div
            className="
                relative flex flex-col gap-3

                /* Responsive padding */
                p-3 sm:p-4

                /* Responsive rounded corners */
                rounded-xl sm:rounded-2xl

                cursor-pointer

                /* Smooth animations */
                transition-all duration-300

                /* Hover effect only on larger screens */
                md:hover:scale-105

                /* Glassmorphism */
                bg-white/20 backdrop-blur-md
                border border-white/40

                /* Shadow */
                shadow-lg shadow-indigo-200/40
                md:hover:shadow-xl md:hover:shadow-indigo-300/50

                /* Hover background */
                hover:bg-white/30

                /* Full height for equal cards */
                h-full">

            {/* Top Shimmer Line */}
            <div
                className="
                    absolute top-0 left-4 right-4 h-px
                    bg-gradient-to-r
                    from-transparent
                    via-white
                    to-transparent"/>



            {/* Product Image Container */}
            <div
                className="
                    flex items-center justify-center

                    /* Responsive image height */
                    h-36 sm:h-44 md:h-48 lg:h-52

                    rounded-xl

                    /* Responsive padding */
                    p-3 sm:p-4

                    bg-white/30
                    border border-white/30">

                {/* Product Image */}
                <img
                    src={products.image}
                    alt={products.title}

                    className="
                        h-full w-full
                        object-contain
                        drop-shadow-md

                        /* Smooth hover zoom */
                        transition-transform duration-300
                        md:hover:scale-105"/>
            </div>



            {/* Category */}
            <h3
                className="
                    text-[10px] sm:text-xs

                    font-bold
                    uppercase
                    tracking-widest

                    text-rose-400

                    /* Prevent overflow */
                    truncate">
                {products.category}
            </h3>



            {/* Product Title */}
            <h1
                className="
                    text-xs sm:text-sm md:text-base

                    font-semibold
                    uppercase

                    leading-tight
                    text-slate-700

                    /* Better line handling */
                    line-clamp-2

                    min-h-[40px] sm:min-h-[48px]">
                {products.title}
            </h1>



            {/* Product Price */}
            <p
                className="
                    font-bold

                    text-base sm:text-lg md:text-xl

                    bg-gradient-to-r
                    from-cyan-500
                    to-indigo-500

                    bg-clip-text
                    text-transparent">
                $ {products.price}
            </p>



            {/* Add To Cart Button */}
            <button
                className="
                    mt-auto

                    w-full

                    /* Responsive padding */
                    px-3 py-2 sm:px-4 sm:py-3

                    rounded-xl

                    font-semibold

                    /* Responsive text */
                    text-xs sm:text-sm

                    bg-white/40
                    border border-white/50
                    text-slate-700

                    hover:bg-white/60

                    flex gap-2 items-center justify-center

                    transition-all duration-200

                    md:hover:scale-105

                    backdrop-blur-sm">

                {/* Shopping Icon */}
                <ShoppingBag
                    size={18}
                    className="sm:w-5 sm:h-5"/>

                Add to Cart
            </button>
        </div>
    );
};

export default ProductCart;