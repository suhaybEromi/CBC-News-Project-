import { useState } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoMenu, IoClose } from "react-icons/io5";
import logo from "../assets/img/cbc_icon.svg";
import { Link } from "react-router-dom";
import Search from "./Search";

// Hover underline style
const spanListStyleFirst =
  "relative z-10 transition-colors duration-300 group-hover:text-gray-400";

const spanListStyleSecond =
  "absolute left-0 right-0 bottom-0 mx-[-8px] h-1 bg-white transform scale-x-0 origin-center transition-transform duration-300 group-hover:scale-x-100";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      dir="rtl"
      className="bg-linear-to-t from-slate-800 to-indigo-950 text-white"
    >
      {/* ========= Desktop Layout ========= */}
      <div className="hidden lg:grid grid-cols-6 items-center py-5">
        {/* navigation links */}
        <div className="col-span-3 flex justify-center me-10 space-x-10 font-suhayb text-lg">
          <Link to={"/"}>سەرەکی</Link>
          <Link to={"/about"}>دەربارە</Link>
          <Link to={"/contact"}>پەیوەندی</Link>
        </div>

        {/* Social icons */}
        <div className="col-span-2 flex justify-end space-x-4">
          <FaFacebook className="text-blue-700 text-2xl cursor-pointer" />
          <FaYoutube className="text-red-600 text-2xl cursor-pointer" />
          <FaXTwitter className="text-2xl cursor-pointer" />
          <FaInstagram className="text-red-700 text-2xl cursor-pointer" />
        </div>

        {/* divider */}
        <div className="col-span-6 mt-5 text-center">
          <hr className="w-350 mx-auto border-t-2 border-gray-400" />
        </div>

        {/* section 2 */}
        <div className="col-span-4 flex justify-center space-x-10 font-suhayb ms-22 my-2 text-lg">
          <img src={logo} alt="logo" width={85} />

          <ul className="flex items-center space-x-10">
            {[
              "هەواڵەکان",
              "ڕاپۆرت",
              "بەرنامەکان",
              "پۆدکاست",
              "تەندرووستی",
              "بەڵگەنامەیی",
              "وەرزش",
            ].map((item) => (
              <li key={item} className="relative group cursor-pointer">
                <span className={spanListStyleFirst}>{item}</span>
                <span className={spanListStyleSecond}></span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right side */}
        <div className="col-span-2 flex space-x-4 items-center ms-35 my-2 cursor-pointer">
          <Search />
          <ul className="flex space-x-5 text-lg font-suhayb">
            {["کوردی", "عربی", "ئینگلیزی"].map((lang) => (
              <li key={lang} className="relative group">
                <span className={`${spanListStyleFirst} hover:text-white`}>
                  {lang}
                </span>
                <span className={spanListStyleSecond}></span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ========= Mobile + Tablet Layout ========= */}
      <div className="lg:hidden p-4 flex justify-between items-center">
        {/* Hamburger */}
        <button onClick={() => setOpen(!open)}>
          {open ? (
            <IoClose className="text-3xl" />
          ) : (
            <IoMenu className="text-3xl" />
          )}
        </button>

        {/* Logo */}
        <img src={logo} alt="logo" width={60} />
      </div>

      {/* ========= Mobile Menu (Fixed & Working) ========= */}
      <div
        className={`lg:hidden fixed top-0 left-0 w-full h-full bg-slate-900 text-white p-5 space-y-5 z-50 overflow-y-auto transform transition-transform duration-300 ${
          open ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Close Button Row */}
        <div className="flex justify-between items-center">
          <span></span>
          <button onClick={() => setOpen(false)}>
            <IoClose className="text-3xl" />
          </button>
        </div>

        {/* Main Links */}
        <div className="flex flex-col space-y-4 text-lg mt-4">
          <Link to={"/"} onClick={() => setOpen(false)}>
            سەرەکی
          </Link>
          <Link to={"/about"} onClick={() => setOpen(false)}>
            دەربارە
          </Link>
          <Link to={"/contact"} onClick={() => setOpen(false)}>
            پەیوەندی
          </Link>
        </div>

        <hr className="border-gray-600" />

        {/* Categories */}
        <ul className="space-y-4 text-lg font-suhayb">
          {[
            "هەواڵەکان",
            "ڕاپۆرت",
            "بەرنامەکان",
            "پۆدکاست",
            "تەندرووستی",
            "بەڵگەنامەیی",
            "وەرزش",
          ].map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        {/* Search */}
        <div className="bg-gray-800 p-3 rounded-2xl">
          <Search />
        </div>

        <hr className="border-gray-600" />

        {/* Languages */}
        <div className="flex space-x-4 justify-center text-lg">
          <span>کوردی</span>
          <span>عربی</span>
          <span>ئینگلیزی</span>
        </div>

        {/* Social */}
        <div className="flex space-x-5 justify-center pt-3">
          <FaFacebook className="text-blue-700 text-2xl" />
          <FaYoutube className="text-red-600 text-2xl" />
          <FaXTwitter className="text-2xl" />
          <FaInstagram className="text-red-700 text-2xl" />
        </div>
      </div>
    </header>
  );
}
