import { FaCss3Alt } from "react-icons/fa";
import { FaPython } from "react-icons/fa6";
import { FaHtml5 } from "react-icons/fa";


function Card(){
    return(
        <div className="grid auto-rows-auto w-sm border justify-items-center gap-6 px-5 py-5 rounded-md">
            <div className="w-40 h-40 rounded-full overflow-hidden border-3">
                <img className="w-full h-full object-cover"src="https://i.pinimg.com/564x/7c/3d/7a/7c3d7a5e2ca5ebafe4346470a9efa667.jpg"></img>
            </div>
            <div className="flex flex-col text-center gap-3">
                <p>Gabriel Amara</p>
                <p>Desenvolvedor de Software</p>
            </div>
            <div className="flex flex-row gap-4 text-lg">
                <FaCss3Alt/>
                <FaPython/>
                <FaHtml5/>
            </div>
            <button className="border rounded-full min-w-xs py-2 px-2 ">Ver mais</button>
        </div>
    )
}
export default Card;