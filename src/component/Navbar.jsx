import { useState } from "react";
import { ChevronDown, MapPin, ShoppingCart, Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = false;

  return (
    <div className="py-2 shadow-2xl bg-white relative z-50">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">

        {/* LEFT SECTION */}
        <div className="flex items-center gap-4">
          <Link to="/">
            <img
              src="/images/logo1.png"
              className="h-10 object-contain"
              alt="logo"
            />
          </Link>

          {/* Location (hidden on mobile) */}
          <div className="hidden sm:flex items-center gap-1 text-gray-500 cursor-pointer">
            <MapPin className="text-rose-500 w-4 h-4" />
            <span className="text-sm">
              {location ? "Your Location" : "Add location"}
            </span>
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex items-center gap-4">

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-5 font-semibold">
            <NavLink  to="/" className={({ isActive }) =>
                isActive  ? "border-b-2 border-red-400 pb-1" : "text-black"}>  Home
            </NavLink>

            <NavLink to="/product"  className={({ isActive }) =>
               isActive? "border-b-2 border-red-400 pb-1" : "text-black" }> Product
            </NavLink>

            <NavLink
              to="/about" className={({ isActive }) =>
               isActive ? "border-b-2 border-red-400 pb-1"   : "text-black"} > About
            </NavLink>

            <NavLink
              to="/contact"  className={({ isActive }) =>
              isActive   ? "border-b-2 border-red-400 pb-1"   : "text-black" } > Contact
            </NavLink>
          </ul>

          {/* Cart */}
          <Link to="/cart" className="relative">
            <ShoppingCart className="w-6 h-6" />
            <span className="absolute -top-2 -right-2 text-xs px-1.5 bg-red-500 text-white rounded-full">
              0
            </span>
          </Link>

          {/* Auth */}
          <div>
            <SignedOut>
              <SignInButton className="px-3 py-1 rounded-lg bg-gradient-to-r from-blue-400 to-pink-500 text-white text-sm font-semibold shadow hover:scale-105 transition" />
            </SignedOut>

            <SignedIn>
              <UserButton
                appearance={{
                  elements: {
                    avatarBox: "!w-8 !h-8",
                  },
                }}
              />
            </SignedIn>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white shadow-md border-t mt-2">
          <ul className="flex flex-col items-center gap-4 py-4 font-semibold">

            <NavLink
              to="/"
              onClick={() => setOpen(false)}
              className="hover:text-red-400" > Home
            </NavLink>

            <NavLink
              to="/product"
              onClick={() => setOpen(false)}
              className="hover:text-red-400">  Product
            </NavLink>

            <NavLink
              to="/about"
              onClick={() => setOpen(false)}
              className="hover:text-red-400"> About
            </NavLink>

            <NavLink
              to="/contact"
              onClick={() => setOpen(false)}
              className="hover:text-red-400"> Contact
            </NavLink>

            {/* Location in mobile */}
            <div className="flex items-center gap-1 text-gray-500 mt-2">
              <MapPin className="text-rose-500 w-4 h-4" />
              <span className="text-sm">
                {location ? "Your Location" : "Add location"}
              </span>
              <ChevronDown className="w-4 h-4" />
            </div>

          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;