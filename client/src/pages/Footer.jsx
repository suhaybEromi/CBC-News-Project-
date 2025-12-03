import { Link } from "react-router-dom";
import icon from "../assets/img/cbc_icon.svg";

export default function Footer() {
  return (
    <div
      className="grid grid-cols-7 mt-20 mb-7 font-suhayb items-center"
      dir="rtl"
    >
      <div className="col-span-2 ms-10">
        <ul>
          <Link to="/kurdistan">
            <li className="hover:text-blue-600">کوردستان</li>
          </Link>

          <Link to="/about">
            <li className="hover:text-blue-600">دەربارەی ئێمە</li>
          </Link>

          <Link to="/opinion">
            <li className="hover:text-blue-600">بیروڕا</li>
          </Link>

          <Link to="/economy">
            <li className="hover:text-blue-600">ئابووری</li>
          </Link>
        </ul>
      </div>

      <div className="col-span-2">
        <ul>
          <Link to="/health">
            <li className="hover:text-blue-600">تەندرووستی</li>
          </Link>

          <Link to="/world">
            <li className="hover:text-blue-600">جیهان</li>
          </Link>

          <Link to="/culture">
            <li className="hover:text-blue-600"> کەلتوور</li>
          </Link>

          <Link to="/advertise">
            <li className="hover:text-blue-600"> رێکلام بکە</li>
          </Link>
        </ul>
      </div>

      <div className="col-span-2 -mt-5">
        <ul>
          <Link to="/programs">
            <li className="hover:text-blue-600">بەرنامە</li>
          </Link>

          <Link to="/sports">
            <li className="hover:text-blue-600">وەرزش</li>
          </Link>

          <Link to="/contact">
            <li className="hover:text-blue-600">پەیوەندیمان پێوە بکە</li>
          </Link>
        </ul>
      </div>

      <div className="col-span-1">
        <img src={icon} alt="icon" className="w-25" />
      </div>

      <div className="w-295 col-span-6 my-5 ms-10">
        <hr />
      </div>

      <div className="col-span-5 ms-10">
        <p> © مافی بڵاوکردنەوەی پارێزراوە بۆ سی بی سی 2025</p>
      </div>

      <div className="col-span-2">
        <p>
          لەلایەن{" "}
          <Link
            to="https://suhayb.netlify.app"
            className="hover:text-blue-600 duration-300 mt-2"
          >
            suhayb mohammed
          </Link>{" "}
          دیزاین و دروستکراوە
        </p>
      </div>
    </div>
  );
}
