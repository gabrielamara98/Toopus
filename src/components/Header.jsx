import { IoHome } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header(){
    return(
        <header className="w-full bg-white shadow-md border-b border-gray-200 px-10 py-4 flex items-center justify-between">
            <h1 className="text-4xl font-bold text-green-600 tracking-wide">Toopus</h1>
            <nav>
                <ul className="flex items-center gap-10 text-700 font-medium">
                    <li>
                        <Link to={"/"} className="flex items-center gap-2 text-lg hover:text-green-600 transition-colors"><IoHome className="text-green-600"/>Home</Link>
                    </li>
                    <li>
                        <Link to={"/search"} className="flex items-center gap-2 text-lg hover:text-green-600 transition-colors"><FaSearch className="text-green-600"/>Search</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Header;