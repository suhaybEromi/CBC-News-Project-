import { useParams } from "react-router-dom";
import api from "../services/api";
import { useState } from "react";
import NewsCard from "../components/NewsCard";

export default function NewsDetails() {
  const [visibleCountNews, setVisibleCountNews] = useState(4);
  const { id } = useParams();

  const newsItem = api.find((item) => item.id.toString() === id);

  if (!newsItem) {
    return <h2 className="text-center text-red-500">هەواڵەکە نەدۆزرایەوە</h2>;
  }

  return (
    <div className="grid grid-cols-6" dir="rtl">
      {/* Left Section */}

      <div className="col-span-4 ms-10 my-7">
        {/* Content under هەواڵەکان */}
        <div className="space-y-5">
          <p className="flex flex-col text-black text-3xl font-suhayb font-bold">
            {newsItem.title}
          </p>
          <img
            src={newsItem.image}
            alt={newsItem.title}
            className="w-150 rounded-lg hover:scale-105 duration-300"
          />
          <p className="text-gray-700 text-lg font-suhayb hover:text-blue-500">
            {newsItem.description}
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="col-span-2 my-7 shadow-2xl rounded-lg px-4">
        <div className="flex items-center mb-4 gap-2">
          <h1 className="font-suhayb text-2xl">نوێترین</h1>
          <hr className="border-indigo-900 border-2 rounded-2xl w-70" />
        </div>

        {/* Content under نوێترین */}
        {api.slice(0, 4).map((item) => (
          <div className="flex items-center gap-3 my-10">
            <img
              src={item.image}
              alt="Latest News"
              className="w-[130px] rounded-lg hover:scale-105 duration-300"
            />
            <p className="text-gray-700 font-suhayb hover:text-blue-500">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2 col-span-5 mx-10 my-8">
        <h1 className="font-suhayb text-2xl">هەواڵەکان</h1>
        <hr className="border-indigo-900 border-2 rounded-2xl w-full" />
      </div>

      <div className="col-span-6 grid grid-cols-4 gap-6 mx-9">
        {api.slice(6, 10 + visibleCountNews).map((item) => (
          <div key={item.id}>
            <NewsCard
              title={item.title}
              category={item.category}
              image={item.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
