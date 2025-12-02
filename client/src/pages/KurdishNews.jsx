import api from "../services/api";
import { Link } from "react-router-dom";

export default function KurdishNews() {
  return (
    <div className="grid grid-cols-6">
      <div className="col-span-5 ms-10 mt-7">
        <div className="flex items-center gap-2">
          <h1 className="font-suhayb text-2xl">کوردستان</h1>
          <hr className="border-indigo-900 border-2 rounded-2xl w-full" />
        </div>
      </div>

      {/* Left Section */}
      <div className="col-span-6 px-6 ms-4">
        <div className="grid grid-cols-4 gap-6">
          {api.slice(0, 16).map((item) => (
            <Link to={`/news/${item.id}`}>
              <div className="items-center gap-3 my-6 flex flex-col">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-100 h-45 rounded-lg hover:scale-105 duration-300"
                />
                <p className="text-gray-700 font-suhayb hover:text-blue-500">
                  {item.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
