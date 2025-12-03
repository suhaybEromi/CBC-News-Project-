import { useParams } from "react-router-dom";
import api from "../services/api";

export default function CategoryPage() {
  const { category } = useParams();

  const filteredCategory = api.filter((item) => item.category === category);

  return (
    <div>
      <h3>Category: {category}</h3>

      {filteredCategory.map((item) => (
        <div>
          <h4 key={item.id}>{item.title}</h4>
          <p>{item.content}</p>
        </div>
      ))}
    </div>
  );
}
