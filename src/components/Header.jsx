import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaMoon, FaSun, FaSearch, FaUserFriends } from "react-icons/fa";
import { IoHome } from "react-icons/io5";

function Header() {
  const [dark, setDark] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <header className="w-full bg-white shadow-md border-b border-gray-200 px-10 py-4 flex items-center justify-between">
      <h1 className="text-4xl font-bold text-green-600 tracking-wide">
        Toopus
      </h1>
      <nav>
        <ul className="flex items-center gap-10 font-medium">
          <li>
            <Link
              to={"/"}
              className="flex items-center gap-2 text-lg hover:text-green-600 transition-colors dark:text-white"
            >
              <IoHome className="text-green-600" /> Home
            </Link>
          </li>
          <li>
            <Link
              to={"/search"}
              className="flex items-center gap-2 text-lg hover:text-green-600 transition-colors dark:text-white"
            >
              <FaSearch className="text-green-600" /> Search
            </Link>
          </li>
          <li>
            <Link
              to={"/conectar"}
              className="flex items-center gap-2 text-lg hover:text-green-600 transition-colors dark:text-white"
            >
              <FaUserFriends className="text-green-600" /> Connection
            </Link>
          </li>
          <button
            className="text-green-600 cursor-pointer dark:text-white"
            onClick={() => setDark(true)}
          >
            <FaMoon />
          </button>
          <button
            className="text-green-600 cursor-pointer dark:text-white"
            onClick={() => setDark(false)}
          >
            <FaSun />
          </button>
        </ul>
      </nav>
    </header>
  );
}

export default Header;