import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import api from "../services/api";
import { Link } from "react-router-dom";

export default function Programs() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    rtl: true,
  };

  return (
    <div className="grid grid-cols-6">
      <div className="col-span-5 ms-10 mt-14 mb-3">
        <div className="flex items-center mb-4 gap-2">
          <h1 className="font-suhayb text-2xl">بەرنامەکان</h1>
          <hr className="border-indigo-900 border-2 rounded-2xl w-full" />
        </div>

        <Slider {...settings}>
          {api.slice(0, 5).map((item) => (
            <div key={item} className="px-3">
              <Link to={`/news/${item.id}`}>
                <div className="bg-white rounded-xl shadow-lg p-4 hover:scale-105 duration-300">
                  <img src={item.image} className="rounded-lg w-full h-40" />
                  <h2 className="mt-3 font-bold text-center hover:text-blue-500">
                    پڕۆگرامی {item.title}
                  </h2>
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
