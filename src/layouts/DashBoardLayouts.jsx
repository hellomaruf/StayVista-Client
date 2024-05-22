import { Outlet } from "react-router-dom";
import Sidebar from "../components/Dashboard/Sidebar";

function DashBoardLayouts() {
  return (
    <div>
      <div className=""><Sidebar/></div>
      <div className="ml-72 pt-8">
        <Outlet />
      </div>
    </div>
  );
}

export default DashBoardLayouts;
