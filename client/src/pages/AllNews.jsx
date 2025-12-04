import { Link } from "react-router-dom";
import api from "../services/api";

export default function AllNews() {
  return (
    <div className="grid grid-cols-6 my-15 bg-gray-800 text-white py-5">
      <div className="col-span-6 ms-10 mt-7">
        <h1 className="font-suhayb text-2xl">گشتی</h1>
      </div>

      <div className="col-span-6">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {api.slice(0, 6).map((item) => (
            <div key={item.id} className="px-5">
              <hr className="border-white border opacity-40 my-3" />

              <Link
                to={`/news/${item.id}`}
                className="flex flex-col md:flex-row items-start md:items-center gap-4 p-4 rounded-2xl"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-lg w-full md:w-48 lg:w-65 h-45 object-cover"
                />

                <h1 className="hover:text-gray-300 font-suhayb text-lg md:text-base">
                  {item.title}
                </h1>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
