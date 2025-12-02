import { useEffect, useState } from "react";
import { FaArrowUpLong } from "react-icons/fa6";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {visible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 w-14 h-14 text-center bg-blue-800 text-white p-2 text-3xl
            rounded-full shadow-lg 
            transition-all duration-300 cursor-pointer"
        >
          <FaArrowUpLong className="mx-auto mt-2" />
        </button>
      )}
    </>
  );
}
