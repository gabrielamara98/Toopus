import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaMoon, FaSun, FaSearch, FaUserFriends } from "react-icons/fa";
import { IoHome } from "react-icons/io5";

function Header() {
  const [dark, setDark] = useState(() => {
    if (typeof window === "undefined") return false;
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = document.documentElement;

    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <header className="w-full bg-white/80 backdrop-blur shadow-sm border-b border-gray-200 px-10 py-4 flex items-center justify-between sticky top-0 z-20 transition-colors duration-300 dark:bg-gray-900/80 dark:border-gray-800">
      <h1 className="text-3xl font-bold tracking-wide text-green-600 dark:text-green-400">Toopus</h1>

      <nav>
        <ul className="flex items-center gap-8 font-medium text-gray-700 dark:text-gray-100">
          <li>
            <Link to="/" className="flex items-center gap-2 text-lg transition-colors hover:text-green-600 dark:hover:text-green-400"><IoHome className="text-green-600 dark:text-green-400"/>Home</Link>
          </li>

          <li>
            <Link to="/search" className="flex items-center gap-2 text-lg transition-colors hover:text-green-600 dark:hover:text-green-400"><FaSearch className="text-green-600 dark:text-green-400"/>Search</Link>
          </li>

          <li>
            <Link to="/conectar" className="flex items-center gap-2 text-lg transition-colors hover:text-green-600 dark:hover:text-green-400"><FaUserFriends className="text-green-600 dark:text-green-400"/>Connection</Link>
          </li>

          <li className="pl-6 ml-4 border-l border-gray-200 dark:border-gray-700">
            <button type="button"
              aria-label={dark ? "Ativar modo claro" : "Ativar modo escuro"}
              onClick={() => setDark((prev) => !prev)}
              className="relative inline-flex h-9 w-16 items-center rounded-full border border-gray-300 bg-gray-100 px-1 transition-all dark:border-gray-600 dark:bg-gray-800">
              <span
                className={`inline-flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-sm transform transition-transform ${
                  dark ? "translate-x-7" : "translate-x-0"
                }`}>
                {dark ? (
                  <FaMoon className="text-green-400"/>
                ) : (
                  <FaSun className="text-green-400"/>
                )}
              </span>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
