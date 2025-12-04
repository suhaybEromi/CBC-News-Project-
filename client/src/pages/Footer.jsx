import { Link } from "react-router-dom";
import icon from "../assets/img/cbc_icon.svg";

export default function Footer() {
  return (
    <div
      className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-7 
      gap-6 mt-20 mb-7 font-suhayb items-start px-6"
      dir="rtl"
    >
      {/* Column 1 */}
      <div className="lg:col-span-2">
        <ul className="space-y-2">
          <li>
            <Link to="/kurdistan" className="hover:text-blue-600">
              کوردستان
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-600">
              دەربارەی ئێمە
            </Link>
          </li>
          <li>
            <Link to="/opinion" className="hover:text-blue-600">
              بیروڕا
            </Link>
          </li>
          <li>
            <Link to="/economy" className="hover:text-blue-600">
              ئابووری
            </Link>
          </li>
        </ul>
      </div>

      {/* Column 2 */}
      <div className="lg:col-span-2">
        <ul className="space-y-2">
          <li>
            <Link to="/health" className="hover:text-blue-600">
              تەندرووستی
            </Link>
          </li>
          <li>
            <Link to="/world" className="hover:text-blue-600">
              جیهان
            </Link>
          </li>
          <li>
            <Link to="/culture" className="hover:text-blue-600">
              کولتوور
            </Link>
          </li>
          <li>
            <Link to="/advertise" className="hover:text-blue-600">
              رێکلام بکە
            </Link>
          </li>
        </ul>
      </div>

      {/* Column 3 */}
      <div className="lg:col-span-2">
        <ul className="space-y-2">
          <li>
            <Link to="/programs" className="hover:text-blue-600">
              بەرنامە
            </Link>
          </li>
          <li>
            <Link to="/sports" className="hover:text-blue-600">
              وەرزش
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-600">
              پەیوەندیمان پێوە بکە
            </Link>
          </li>
        </ul>
      </div>

      {/* Icon */}
      <div className="flex justify-center lg:justify-start lg:col-span-1">
        <img src={icon} alt="icon" className="w-20 hidden lg:block" />
      </div>

      {/* Divider */}
      <div className="col-span-2 md:col-span-2 lg:col-span-7 my-5">
        <hr />
      </div>

      {/* Bottom left */}
      <div className="col-span-2 md:col-span-1 lg:col-span-5 text-[12px] md:text-[16px]">
        <p>© مافی بڵاوکردنەوەی پارێزراوە بۆ سی بی سی 2025</p>
      </div>

      {/* Bottom right */}
      <div className="col-span-2 md:col-span-1 lg:col-span-2 text-[13px] md:text-[16px]">
        <p>
          لەلایەن{" "}
          <Link
            to="https://suhayb.netlify.app"
            className="hover:text-blue-600 duration-300"
          >
            suhayb mohammed
          </Link>{" "}
          دیزاین و دروستکراوە
        </p>
      </div>
    </div>
  );
}
