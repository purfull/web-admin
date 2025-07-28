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
            <div className="outlet-container">
                <Outlet />

            </div>
         </div>
     );
}
 
export default Console;