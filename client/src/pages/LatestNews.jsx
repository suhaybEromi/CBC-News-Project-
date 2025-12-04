import { Link } from "react-router-dom";
import NewsCard from "../components/NewsCard";
import api from "../services/api";

export default function LatestNews() {
  return (
    <div className="grid grid-cols-6">
      <div className="col-span-5 mx-1 lg:mx-9 mt-7">
        <div className="flex items-center gap-2">
          <h1 className="font-suhayb text-2xl">نوێترین</h1>
          <hr className="border-indigo-900 border-2 rounded-2xl w-full lg:max-w-5xl" />
        </div>
      </div>

      {/* Next Posts */}
      <div className="col-span-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mx-1 lg:mx-9 mt-2 mb-10">
        {api.slice(0, 9).map((item) => (
          <Link key={item.id} to={`/news/${item.id}`}>
            <NewsCard
              title={item.title}
              category={item.category}
              image={item.image}
              className="lg:h-60"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
