import { Link } from "react-router-dom";
import NewsCard from "../components/NewsCard";
import api from "../services/api";

export default function LatestNews() {
  return (
    <div className="grid grid-cols-6">
      <div className="col-span-5 ms-10 mt-7">
        <div className="flex items-center gap-2">
          <h1 className="font-suhayb text-2xl">نوێترین</h1>
          <hr className="border-indigo-900 border-2 rounded-2xl w-full" />
        </div>
      </div>

      {/* Next Posts */}
      <div className="col-span-6 grid grid-cols-3 gap-5 mx-9">
        {api.slice(0, 9).map((item) => (
          <Link key={item.id} to={`/news/${item.id}`}>
            <NewsCard
              title={item.title}
              category={item.category}
              image={item.image}
              className="w-full h-60"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
