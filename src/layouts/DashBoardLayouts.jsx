import { Outlet } from "react-router-dom";
import Sidebar from "../pages/Dashboard/Sidebar";

function DashBoardLayouts() {
  return (
    <div>
      <div className=""><Sidebar/></div>
      <div className="">
        <Outlet />
      </div>
    </div>
  );
}

export default DashBoardLayouts;
