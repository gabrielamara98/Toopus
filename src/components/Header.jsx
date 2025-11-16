import { IoHome } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { IoIosInformationCircle } from "react-icons/io";
import { Link } from "react-router-dom";

function Header(){
    return(
        <header className="grid grid-cols-2 items-center px-10 py-5 border min-w-full">
            <h1 className="flex items-center gap-2 text-4xl" >Toopus</h1>
            <nav>
                <ul className="flex justify-center gap-10">
                    <li>
                        <Link to={"/"} className="flex items-center gap-2 text-lg"><IoHome/>Home</Link>
                    </li>
                    <li>
                        <Link to={"/search"} className="flex items-center  gap-2 text-lg"><FaSearch/>Search</Link>
                    </li>
                    <li>
                        <Link to={"/about"} className="flex items-center  gap-2 text-lg"><IoIosInformationCircle />About</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Header;