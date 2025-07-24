import NavBar from "../../components/navbar/navbar";
import SideNavBar from "../../components/sidebar/SideBAr";
import { Outlet } from "react-router-dom";

const Console = () => {
    return ( 
        <div className="console-container">
            <NavBar />
            <div className="console-sidebar">
                
                <SideNavBar />
            </div>
            <div className="absolute right-0 top-[10vh] w-[80%] p-6">
                <Outlet />

            </div>
         </div>
     );
}
 
export default Console;