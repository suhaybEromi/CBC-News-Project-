import { Link } from "react-router-dom";
import api from "../services/api";

export default function تەندروستی() {
  return (
    <div className="grid grid-cols-6">
      <div className="col-span-5 mx-2 lg:mx-10 mt-14 mb-3">
        <div className="flex items-center mb-4 gap-2">
          <h1 className="font-suhayb text-2xl">تەندروستی</h1>
          <hr className="border-indigo-900 border-2 rounded-2xl w-full lg:w-full lg:max-w-5xl" />
        </div>
      </div>

      <div className="col-span-6 lg:col-span-4 mx-2 lg:mx-9">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {api.slice(0, 4).map((item) => (
            <div key={item.id}>
              <Link key={item.id} to={`/news/${item.id}`}>
                <div className="flex flex-col">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full max-w-[500px] lg:max-w-[600px] md:h-55 lg:h-60 object-cover rounded-lg hover:scale-105 duration-300"
                  />
                  <p className="text-blue-600 font-suhayb my-2">
                    {item.category} {item.date}
                  </p>
                  <p className="text-gray-700 font-suhayb hover:text-blue-500">
                    {item.description}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="col-span-6 lg:col-span-2 shadow-2xl p-2 my-20 lg:my-0 rounded-lg w-full h-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
          {api.slice(2, 8).map((item) => (
            <div>
              <p className="text-blue-600 font-suhayb">
                {item.category} {item.date}
              </p>
              <Link key={item.id} to={`/news/${item.id}`}>
                <div className="gap-3 flex flex-col my-2">
                  <p className="text-gray-700 font-suhayb hover:text-blue-500">
                    {item.description}
                  </p>
                  <hr className="border-blue-700" />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
