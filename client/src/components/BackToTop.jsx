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
          className="fixed bottom-5 right-5 w-11 h-11 md:w-14 md:h-14 text-center bg-white text-blue-800 text-3xl md:text-4xl
            rounded-full 
            transition-all duration-300 cursor-pointer"
        >
          <FaArrowUpLong className="mx-auto" />
        </button>
      )}
    </>
  );
}
