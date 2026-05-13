import {
  MapPin,
  Mail,
  Phone,
} from "lucide-react";

const Contact = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-10">

      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-2xl p-5 sm:p-8 lg:p-10">

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-10">
          Get in Touch with{" "}
          <span className="text-red-500">
            Click Shop Online Store
          </span>
        </h1>

        {/* Layout */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

          {/* Left - Info */}
          <div className="w-full lg:w-1/2 space-y-5">
            <h2 className="text-xl font-bold">
              Contact Info
            </h2>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Have a question or need support? We're here to help
              you with your electronics journey.
            </p>

            <div className="space-y-4 mt-4">

              <div className="flex items-start gap-3 text-sm sm:text-base text-gray-600">
                <span>  <MapPin className="text-red-500 mt-1" size={18} /> </span>
                <span>
                  <span className="font-semibold text-green-500">
                    Address:
                  </span>{" "}
                  123 Tech Lane, Johar Town, Lahore
                </span>
              </div>

              <div className="flex items-start gap-3 text-sm sm:text-base text-gray-600">
                <span> <Mail className="text-red-500 mt-1" size={18} /> </span>
                <span>
                  <span className="font-semibold text-green-500">
                    Email:
                  </span>{" "}
                  support@clickshop.com
                </span>
              </div>

              <div className="flex items-start gap-3 text-sm sm:text-base text-gray-600">
                <span>  <Phone className="text-red-500 mt-1" size={18} /> </span>
                <span>
                  <span className="font-semibold text-green-500">
                    Phone:
                  </span>{" "}
                  +92 0000 43210
                </span>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="w-full lg:w-1/2 space-y-4">

            {/* Name */}
            <div>
              <label className="text-sm text-gray-600">
                Your Name
              </label>

              <input
                type="text"
                placeholder="John Doe"
                className=" w-full mt-1 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-40 "/>
            </div>

            {/* Email */}
            <div>
              <label className="text-sm text-gray-600">
                Email Address
              </label>

              <input
                type="email"
                placeholder="john@example.com"
                className=" w-full mt-1 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-400"/>
            </div>

            {/* Message */}
            <div>
              <label className="text-sm text-gray-600">
                Your Message
              </label>

              <textarea
                rows={4}   placeholder= "Type your message..."
                className=" w-full mt-1 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-400 resize-none"/>
            </div>

            {/* Button */}
            <button
              className=" w-full bg-gradient-to-r from-red-500   to-purple-600 text-white  font-semibold py-3 rounded-lg  hover:shadow-lg  transition-all  duration-300 "> Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;