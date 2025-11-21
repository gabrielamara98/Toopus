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
    <header
      className="w-full bg-white/85 dark:bg-gray-900/85 backdrop-blur border-b border-gray-200 dark:border-gray-800 shadow-2xl shadow-black/20 px-14 py-6 flex items-center justify-between sticky top-0 z-20 transition-all duration-300">
      <h1 className="text-4xl font-extrabold tracking-wide text-green-600 dark:text-green-400">Toopus</h1>

      <nav>
        <ul className="flex items-center gap-10 font-semibold text-gray-700 dark:text-gray-100 text-xl">
          <li>
            <Link to="/" className="flex items-center gap-2 transition-colors hover:text-green-600 dark:hover:text-green-400">
              <IoHome className="text-green-600 dark:text-green-400 text-2xl" />Home</Link>
          </li>

          <li>
            <Link to="/search" className="flex items-center gap-2 transition-colors hover:text-green-600 dark:hover:text-green-400">
              <FaSearch className="text-green-600 dark:text-green-400 text-2xl" />Search</Link>
          </li>

          <li>
            <Link to="/conectar" className="flex items-center gap-2 transition-colors hover:text-green-600 dark:hover:text-green-400">
              <FaUserFriends className="text-green-600 dark:text-green-400 text-2xl" />Connection</Link>
          </li>

          <li className="pl-8 ml-6 border-l border-gray-200 dark:border-gray-700">
            <button type="button" aria-label={dark ? "Ativar modo claro" : "Ativar modo escuro"} onClick={() => setDark((prev) => !prev)} 
            className="relative inline-flex h-11 w-20 items-center rounded-full border border-gray-300 dark:border-gray-600 bg-gray-200 dark:bg-gray-800 px-1 transition-all shadow-inner">
              <span className={`inline-flex h-9 w-9 items-center justify-center rounded-full bg-white dark:bg-gray-900 shadow-md transform transition-transform duration-300 text-2xl ${dark ? "translate-x-9" : "translate-x-0"}`}>
                {dark ? (
                  <FaMoon className="text-green-400" />
                ) : (
                  <FaSun className="text-green-500" />
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
