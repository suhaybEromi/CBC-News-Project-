import { Link } from "react-router-dom";
import api from "../services/api";

export default function Economics() {
  return (
    <div className="grid grid-cols-6 mt-16 mb-3">
      <div className="col-span-5 mx-2 lg:mx-10 my-2">
        <div className="flex items-center gap-2">
          <h1 className="font-suhayb text-2xl">ئابووری</h1>
          <hr className="border-indigo-900 border-2 rounded-2xl w-full lg:w-full lg:max-w-5xl" />
        </div>
      </div>

      <div className="col-span-6 lg:col-span-3">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {api.slice(12, 16).map((item) => (
            <div className="gap-3 mx-2 lg:mx-10 my-4">
              <Link to={`/news/${item.id}`}>
                <div className="flex flex-col">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full max-w-[500px] lg:max-w-[600px] md:h-55 lg:h-38 rounded-lg hover:scale-105 duration-300"
                  />
                  <h1 className="text-blue-600 font-suhayb my-2">
                    ئابووری {item.date}
                  </h1>
                  <h1 className="text-gray-700 hover:text-blue-500 font-suhayb">
                    {item.title}
                  </h1>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="col-span-6 lg:col-span-3">
        <div className="grid grid-cols-1 gap-6 mx-1 lg:mx-4">
          {api.slice(16, 17).map((item) => (
            <div className="my-2">
              <Link key={item.id} to={`/news/${item.id}`}>
                <div className="gap-3 flex flex-col my-2">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full max-w-[600px] lg:max-w-[600px] md:h-85 lg:h-95 rounded-2xl hover:scale-105 duration-700"
                  />
                  <h1 className="text-blue-600 font-suhayb">
                    ئابووری {item.date}
                  </h1>
                  <p className="font-suhayb hover:text-blue-500 text-2xl font-bold">
                    {item.title}
                  </p>
                </div>
              </Link>
              <p className="text-gray-700 font-suhayb">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
