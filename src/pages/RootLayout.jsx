import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function RootLayout(){
    return(
        <>
            <Header/>
            <div className="mt-10"> 
                <Outlet/>
            </div>
        </>
        
    )
}
export default RootLayout;