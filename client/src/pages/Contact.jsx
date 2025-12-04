import { FaEnvelopeOpen, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <div
      className="grid grid-cols-1 lg:grid-cols-6 gap-6 mx-4 lg:mx-10"
      dir="rtl"
    >
      {/* Header */}
      <div className="col-span-1 lg:col-span-6 mt-17">
        <div className="flex items-center gap-4">
          <h1 className="font-suhayb text-indigo-700 font-bold text-xl">
            پەیوەندی کردن
          </h1>
          <hr className="border-indigo-900 border-2 rounded-2xl w-full lg:w-full lg:max-w-3xl" />
        </div>
      </div>

      {/* Contact Items */}
      <div className="col-span-1 lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-2">
        {/* Email */}
        <div className="flex items-center gap-4 p-3 rounded-lg">
          <FaEnvelopeOpen className="text-2xl text-indigo-800" />
          <p className="text-gray-700 text-lg font-medium">news@cbc.com</p>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-4 p-3 rounded-lg">
          <FaPhoneAlt className="text-2xl text-indigo-800" />
          <p className="text-gray-700 text-lg font-medium" dir="ltr">
            +964 750 048 4170
          </p>
        </div>

        {/* Location */}
        <div className="flex items-center gap-4 p-3 rounded-lg">
          <FaMapMarkerAlt className="text-2xl text-indigo-800" />
          <p className="text-gray-700 text-lg font-medium">
            Erbil, Kurdistan Region, Iraq
          </p>
        </div>
      </div>
    </div>
  );
}
