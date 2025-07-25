import NavBar from "../../components/navbar/navbar";
import SideNavBar from "../../components/sidebar/SideBAr";
import { Outlet } from "react-router-dom";
import { useState } from "react";

const Console = () => {
      const [expand, setExpand] = useState(false);

  const toggleexpanded = () => {
    setExpand(!expand);
  };
    return ( 
        <div className="console-container">
            <NavBar />
            <div className={`console-sidebar  ${expand ? "expand" : "collapsed"}`}>
                
                      <SideNavBar expand={expand} toggleexpanded={toggleexpanded} />

            </div>
            <div className="absolute right-0 top-[10vh] w-[80%] p-6">
                <Outlet />

            </div>
         </div>
     );
}
 
export default Console;