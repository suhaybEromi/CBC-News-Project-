import Reklam from "../components/Reklam";
import api from "../services/api";
import { Link } from "react-router-dom";

export default function WorldNews() {
  return (
    <div className="grid grid-cols-6">
      <div className="col-span-5 mx-2 lg:mx-10 mt-7">
        <div className="flex items-center gap-2">
          <h1 className="font-suhayb text-2xl">جیهان</h1>
          <hr className="border-indigo-900 border-2 rounded-2xl w-full lg:w-full lg:max-w-5xl" />
        </div>
      </div>

      {/* Right Section */}
      <div className="col-span-2 hidden lg:block">
        <div className="grid grid-cols-1 gap-6">
          <Reklam />
        </div>
      </div>

      {/* Left Section */}
      <div className="col-span-6 lg:col-span-4 mx-2 lg:mx-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {api.slice(0, 12).map((item) => (
            <Link to={`/news/${item.id}`}>
              <div className="items-center gap-3 my-6 flex flex-col">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full max-w-[500px] lg:max-w-[600px] md:h-55 lg:h-40 rounded-lg hover:scale-105 duration-300"
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
