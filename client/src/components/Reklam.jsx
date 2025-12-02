import apiReklam from "../services/api-reklam";

export default function Reklam() {
  return (
    <div>
      <div className="col-span-2 ms-10 my-6">
        <div className="grid grid-cols-1 gap-6">
          {apiReklam.slice(0, 3).map((item) => (
            <div className="space-y-5">
              <img src={item.image} alt="Reklam" className="w-100 rounded-lg" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
