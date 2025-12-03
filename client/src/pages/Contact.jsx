import { FaEnvelopeOpen, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="grid grid-cols-6 gap-6 ms-10 my-10" dir="rtl">
      <div className="col-span-6 ms-10 mt-7">
        <div className="flex items-center gap-4">
          <h1 className="font-suhayb text-indigo-700 font-bold">
            پەیوەندی کردن
          </h1>
          <hr className="border-indigo-900 border-2 rounded-2xl w-200" />
        </div>
      </div>

      {/* contact items: email, mobile, location */}
      <div className="col-span-6 grid grid-cols-6 gap-4 ms-10 mb-40 items-start">
        <div className="col-span-2 flex items-center gap-4">
          <FaEnvelopeOpen className="text-2xl text-indigo-800" />
          <div>
            <p className="text-gray-600 text-lg font-medium">news@cbc.com</p>
          </div>
        </div>

        <div className="col-span-2 flex items-center gap-4">
          <FaPhoneAlt className="text-2xl text-indigo-800" />
          <div>
            <p className="text-gray-600 text-lg font-medium" dir="ltr">
              +964 750 048 4170
            </p>
          </div>
        </div>

        <div className="col-span-2 flex items-center gap-4">
          <FaMapMarkerAlt className="text-2xl text-indigo-800" />
          <div>
            <p className="text-gray-600 text-lg font-medium">
              Erbil, Kurdistan Region, Iraq
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
