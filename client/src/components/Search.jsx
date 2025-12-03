import { useState, useRef, useEffect } from "react";
import { IoSearchSharp, IoClose } from "react-icons/io5";

export default function Search() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="relative">
      <IoSearchSharp
        className="text-xl cursor-pointer transition"
        onClick={handleOpen}
      />

      {open && (
        <div
          className="absolute top-10 left-0 bg-white shadow-lg rounded-2xl p-3
          w-65 flex items-center gap-3 animate-fade"
        >
          <IoSearchSharp className="text-gray-400 text-xl" />

          <input
            type="text"
            placeholder="Search..."
            className="w-full outline-none text-gray-700"
            autoFocus
          />

          <IoClose
            onClick={handleClose}
            className="text-gray-500 text-xl cursor-pointer transition"
          />
        </div>
      )}
    </div>
  );
}
