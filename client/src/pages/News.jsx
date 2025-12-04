import { useEffect, useState } from "react";
import api from "../services/api";
import NewsCard from "../components/NewsCard";
import { Link } from "react-router-dom";

export default function News() {
  const [visibleCountNews, setVisibleCountNews] = useState(4);
  const [visibleNews, setVisibleNews] = useState(true);

  const loadMoreNews = () => {
    setVisibleCountNews((prev) => prev + 4);

    //  if click  زیاتر ببینە
    setVisibleCountNews(20);
    setVisibleNews(false);
  };

  return (
    <div className="grid grid-cols-6">
      {/* Left Section */}

      <div className="col-span-6 flex items-center rounded-full overflow-hidden my-5 p-2 bg-linear-to-t from-gray-800 to-indigo-900 w-full max-w-6xl lg:ms-8">
        {/* Fixed Header */}
        <div className="bg-white text-black font-bold p-2 rounded-full w-31 lg:w-30 text-sm lg:text-[17px]">
          سەردێرەکان :
        </div>

        {/* Scrolling Container */}
        <div className="overflow-hidden w-full">
          <div
            className="flex whitespace-nowrap"
            style={{
              display: "inline-flex",
              animation: "marquee 50s linear infinite",
            }}
          >
            {api.slice(0, 5).map((item, index) => (
              <Link
                key={item.id}
                to={`/news/${item.id}`}
                className="cursor-pointer"
              >
                <span className="text-white mx-6">
                  {item.title}
                  {index !== api.length - 1 && <span className="mx-4">|</span>}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="col-span-6 lg:col-span-4 lg:ms-10 my-7 px-1 md:px-3 lg:px-0">
        <div className="flex items-center mb-4 gap-2">
          <h1 className="font-suhayb text-2xl">هەواڵەکان</h1>
          <hr className="border-indigo-900 border-2 rounded-2xl w-full lg:w-full lg:max-w-xl" />
        </div>

        {/* Content under هەواڵەکان */}

        {api.slice(0, 1).map((item) => (
          <Link key={item.id} to={`/news/${item.id}`}>
            <div className="space-y-5">
              <img
                src={item.image}
                alt={item.title}
                className="w-full max-w-[500px] lg:max-w-[600px] rounded-lg hover:scale-105 duration-300"
              />
              <p className="text-gray-700 text-lg font-suhayb hover:text-blue-500">
                {item.description}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* Right Section */}
      <div className="col-span-6 lg:col-span-2 my-7 shadow-2xl rounded-lg px-1 md:px-3 lg:px-4">
        <div className="flex items-center mb-4 gap-2">
          <h1 className="font-suhayb text-2xl">نوێترین</h1>
          <hr className="border-indigo-900 border-2 rounded-2xl w-50 lg:w-full lg:max-w-[250px]" />
        </div>

        {/* Content under نوێترین */}
        {api.slice(0, 4).map((item) => (
          <Link to={`/news/${item.id}`}>
            <div className="flex items-center gap-3 my-10">
              <img
                src={item.image}
                alt={item.title}
                className="w-[115px] lg:w-[130px] rounded-lg hover:scale-105 duration-300"
              />
              <p className="text-gray-700 font-suhayb hover:text-blue-500 text-sm lg:text-[16px]">
                {item.description}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <div className="col-span-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mx-1 lg:mx-9">
        {api.slice(6, 10 + visibleCountNews).map((item) => (
          <Link to={`/news/${item.id}`}>
            <div key={item.id}>
              <NewsCard
                title={item.title}
                category={item.category}
                image={item.image}
                className="lg:h-45"
              />
            </div>
          </Link>
        ))}
      </div>

      {visibleNews && (
        <>
          {visibleCountNews < api.length - 6 && (
            <div className="col-span-6 flex justify-center">
              <h1
                onClick={loadMoreNews}
                className="cursor-pointer w-50 font-suhayb text-center text-2xl my-5 border-2 p-2 rounded-xl border-indigo-700 text-indigo-800 hover:bg-indigo-900 hover:text-white transition-all duration-300"
              >
                زیاتر ببینە
              </h1>
            </div>
          )}
        </>
      )}
    </div>
  );
}
