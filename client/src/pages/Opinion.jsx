import { Link } from "react-router-dom";
import api from "../services/api";

export default function Opinion() {
  return (
    <div className="grid grid-cols-6 my-20">
      <div className="col-span-5 mx-3 lg:mx-10 mt-7">
        <div className="flex items-center gap-2">
          <h1 className="font-suhayb text-2xl">بیروڕا</h1>
          <hr className="border-indigo-900 border-2 rounded-2xl w-full lg:w-full lg:max-w-5xl" />
        </div>
      </div>

      <div className="col-span-6 mx-3 lg:mx-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {api.slice(0, 6).map((item) => (
            <div className="my-5">
              <Link to={`/news/${item.id}`}>
                <div className="border-blue-700 border-b-0 border-l-0 border-r-0 border-t-2 w-full md:w-80 lg:w-75 h-40 bg-blue-50 py-5 hover:scale-105 duration-600 rounded-lg hover:shadow-lg">
                  <h1 className="font-suhayb mx-5">{item.title}</h1>
                  <div className="flex items-center my-3">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="rounded-full w-12 h-12 items-center mx-4"
                    />
                    <p className="font-suhayb text-blue-700">
                      سوهەیب محمد {item.date}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
