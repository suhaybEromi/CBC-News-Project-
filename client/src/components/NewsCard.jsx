export default function NewsCard({ title, category, image, className }) {
  return (
    <div className="my-4">
      <div className="flex justify-center">
        <div className="flex flex-col space-y-1.5 w-full">
          <img
            src={image}
            alt={title}
            className={`w-full max-w-9xl h-57 object-cover rounded-lg hover:scale-105 duration-300 ${className}`}
          />
          <h1 className="text-blue-600 font-bold">{category}</h1>
          <h1 className="font-suhayb text-lg hover:text-blue-500">{title}</h1>
        </div>
      </div>
    </div>
  );
}
