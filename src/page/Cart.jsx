import { useUser } from "@clerk/clerk-react";
import { useCart } from "../context/CartContext";
import {
  Plus,
  Minus,
  ShoppingBasket,
  Truck,
  HandCoins,
  Trash2,
} from "lucide-react";

const Cart = ({ getLocation, location }) => {
  const { cartItem, updateQuantity, deleteItem } = useCart();

  const { user } = useUser();

  const totalPrice = cartItem.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <section className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-6">

      {/* Heading */}
      <h1 className="font-bold text-xl sm:text-2xl">
        My Cart Items - {cartItem.length}
      </h1>

      {/* Empty Cart */}
      {cartItem.length === 0 ? (
        <div className="flex items-center justify-center min-h-[300px] sm:min-h-[500px]">
          <p className="text-gray-500 text-xl sm:text-3xl font-bold text-center">
            Your Cart is Empty
          </p>
        </div>
      ) : (
        <>
          {/* Cart Items */}
          <div className="mt-6 flex flex-col gap-4">
            {cartItem.map((item, index) => (
              <div
                key={index}
                className="
                  border border-gray-300 rounded-xl
                  p-3 sm:p-4
                  flex flex-col sm:flex-row
                  gap-4
                  sm:items-center
                  sm:justify-between
                "
              >
                {/* Left Side */}
                <div className="flex gap-3 sm:gap-4 flex-1">
                  <img
                    src={item.images?.[0] || item.thumbnail}
                    alt={item.title}
                    className="
                      w-20 h-20
                      sm:w-24 sm:h-24
                      rounded-lg
                      object-cover
                      flex-shrink-0
                    "
                  />

                  <div className="min-w-0">
                    <h3 className="font-semibold line-clamp-2 text-sm sm:text-base">
                      {item.title}
                    </h3>

                    <p className="text-red-500 font-bold mt-1">
                      ${item.price}
                    </p>

                    <p className="text-sm text-gray-500 mt-1">
                      Qty: {item.quantity}
                    </p>
                  </div>
                </div>

                {/* Right Side */}
                <div
                  className="
                    flex flex-col xs:flex-row
                    gap-3
                    sm:items-center
                  "
                >
                  {/* Quantity */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() =>
                        updateQuantity(item.id, "decrease")
                      }
                      className="
                        bg-red-500 hover:bg-red-600
                        text-white
                        w-9 h-9
                        rounded-lg
                        flex items-center justify-center
                        transition
                      "
                    >
                      <Minus size={16} />
                    </button>

                    <span className="font-bold text-lg min-w-[20px] text-center">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() =>
                        updateQuantity(item.id, "increase")
                      }
                      className="
                        bg-red-500 hover:bg-red-600
                        text-white
                        w-9 h-9
                        rounded-lg
                        flex items-center justify-center
                        transition
                      "
                    >
                      <Plus size={16} />
                    </button>
                  </div>

                  {/* Remove */}
                  <button
                    onClick={() => deleteItem(item.id)}
                    className="
                      bg-red-500 hover:bg-red-600
                      text-white
                      px-4 py-2
                      rounded-lg
                      flex items-center justify-center gap-2
                      transition
                      text-sm sm:text-base
                    "
                  >
                    Remove
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Section */}
          <div
            className="
              mt-8
              grid
              grid-cols-1
              lg:grid-cols-2
              gap-6
            "
          >
            {/* Delivery Info */}
            <div className="border border-gray-300 rounded-2xl p-4 sm:p-6">
              <h2 className="text-xl font-bold mb-5">
                Delivery Info
              </h2>

              <div className="space-y-4">
                {/* Full Name */}
                <div>
                  <label className="text-sm font-medium">
                    Full Name
                  </label>

                  <input
                    type="text"
                    defaultValue={user?.fullName}
                    placeholder="Enter Name"
                    className="
                      w-full mt-1
                      border border-gray-300
                      rounded-lg
                      px-4 py-3
                      focus:outline-none
                      focus:ring-2 focus:ring-red-400
                    "
                  />
                </div>

                {/* Address */}
                <div>
                  <label className="text-sm font-medium">
                    Address
                  </label>

                  <input
                    type="text"
                    defaultValue={location?.country}
                    placeholder="Enter Address"
                    className="
                      w-full mt-1
                      border border-gray-300
                      rounded-lg
                      px-4 py-3
                      focus:outline-none
                      focus:ring-2 focus:ring-red-400
                    "
                  />
                </div>

                {/* State + Postcode */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">
                      State
                    </label>

                    <input
                      type="text"
                      defaultValue={location?.state}
                      placeholder="State"
                      className="
                        w-full mt-1
                        border border-gray-300
                        rounded-lg
                        px-4 py-3
                        focus:outline-none
                        focus:ring-2 focus:ring-red-400
                      "
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium">
                      PostCode
                    </label>

                    <input
                      type="text"
                      defaultValue={location?.postcode}
                      placeholder="Postcode"
                      className="
                        w-full mt-1
                        border border-gray-300
                        rounded-lg
                        px-4 py-3
                        focus:outline-none
                        focus:ring-2 focus:ring-red-400
                      "
                    />
                  </div>
                </div>

                {/* Country + Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">
                      Country
                    </label>

                    <input
                      type="text"
                      defaultValue={location?.country}
                      placeholder="Country"
                      className="
                        w-full mt-1
                        border border-gray-300
                        rounded-lg
                        px-4 py-3
                        focus:outline-none
                        focus:ring-2 focus:ring-red-400
                      "
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium">
                      Phone Number
                    </label>

                    <input
                      type="text"
                      placeholder="Phone Number"
                      className="
                        w-full mt-1
                        border border-gray-300
                        rounded-lg
                        px-4 py-3
                        focus:outline-none
                        focus:ring-2 focus:ring-red-400
                      "
                    />
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    className="
                      flex-1
                      bg-red-500 hover:bg-red-600
                      text-white
                      py-3
                      rounded-xl
                      transition
                    "
                  >
                    Submit
                  </button>

                  <button
                    onClick={getLocation}
                    className="
                      flex-1
                      border border-red-500
                      text-red-500
                      hover:bg-red-50
                      py-3
                      rounded-xl
                      transition
                    "
                  >
                    Detect Location
                  </button>
                </div>
              </div>
            </div>

            {/* Bill Details */}
            <div
              className="
                border border-gray-300
                rounded-2xl
                p-4 sm:p-6
                h-fit
                lg:sticky lg:top-24
              "
            >
              <h2 className="text-xl font-bold mb-5">
                Bill Details
              </h2>

              <div className="space-y-4">
                {/* Items Total */}
                <div className="flex justify-between items-center">
                  <span className="flex items-center gap-2 text-gray-600">
                    <ShoppingBasket size={18} />
                    Items total
                  </span>

                  <span className="font-semibold">
                    ${totalPrice}
                  </span>
                </div>

                {/* Delivery */}
                <div className="flex justify-between items-center">
                  <span className="flex items-center gap-2 text-gray-600">
                    <Truck size={18} />
                    Delivery
                  </span>

                  <span>
                    <span className="line-through text-gray-400 mr-1">
                      $25
                    </span>

                    <span className="text-red-500 font-bold">
                      FREE
                    </span>
                  </span>
                </div>

                {/* Handling */}
                <div className="flex justify-between items-center">
                  <span className="flex items-center gap-2 text-gray-600">
                    <HandCoins size={18} />
                    Handling
                  </span>

                  <span className="font-semibold text-red-500">
                    $5
                  </span>
                </div>

                <hr />

                {/* Grand Total */}
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold">
                    Grand Total
                  </span>

                  <span className="text-lg font-bold">
                    ${totalPrice + 5}
                  </span>
                </div>

                {/* Promo */}
                <div>
                  <label className="text-sm font-medium">
                    Apply Promo Code
                  </label>

                  <div className="flex flex-col sm:flex-row gap-3 mt-2">
                    <input
                      type="text"
                      placeholder="Enter code"
                      className="
                        flex-1
                        border border-gray-300
                        rounded-lg
                        px-4 py-3
                        focus:outline-none
                        focus:ring-2 focus:ring-red-400
                      "
                    />

                    <button
                      className="
                        border border-gray-300
                        px-5 py-3
                        rounded-lg
                        hover:bg-gray-100
                        transition
                      "
                    >
                      Apply
                    </button>
                  </div>
                </div>

                {/* Checkout */}
                <button
                  className="
                    w-full
                    bg-red-500 hover:bg-red-600
                    text-white
                    font-semibold
                    py-3
                    rounded-xl
                    transition
                    mt-4
                  "
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Cart;