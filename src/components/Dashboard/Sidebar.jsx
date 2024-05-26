import { useState } from "react";
import { GrLogout } from "react-icons/gr";
import { MdAccountCircle } from "react-icons/md";
import { AiOutlineBars } from "react-icons/ai";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useRole from "./../../hooks/useRole";
import MenuItem from "../Shared/Menu/MenuItem";
import HostMenu from "./HostMenu/HostMenu";
import GuestMenu from "./GuestMenu/GuestMenu";
import AdminMenu from "./AdminMenu/AdminMenu";
function Sidebar() {
  const { logOut } = useAuth();
  const [isActive, setActive] = useState(false);
  const [role] = useRole();
  console.log(role);

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <div>
      {/* Small Screen Navbar */}
      <div className="bg-gray-100 text-gray-800 flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer p-4 font-bold">
            <Link className="flex items-center justify-center" to="/">
              <img
                // className='hidden md:block'
                src={logo}
                alt="logo"
                width="40"
                height="40"
              />
              <h2 className="font-semibold text-3xl">
                Room<span className="font-normal text-[#29ADB2]">Rover</span>
              </h2>
            </Link>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-200"
        >
          <AiOutlineBars className="h-5 w-5" />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className="w-full hidden md:flex px-4 py-2  rounded-lg justify-center items-center  mx-auto">
              <Link className="flex items-center justify-center" to="/">
                <img
                  // className='hidden md:block'
                  src={logo}
                  alt="logo"
                  width="40"
                  height="40"
                />
                <h2 className="font-semibold text-3xl">
                  Room<span className="font-normal text-[#29ADB2]">Rover</span>
                </h2>
              </Link>
            </div>
          </div>

          {/* Nav Items */}
          <div className="flex flex-col justify-between flex-1 mt-6">
            {/* Conditional toggle button here.. */}

            {/*  Menu Items */}
            <nav>
              {/* Statistics */}
              {role === "host" && <HostMenu />}
              {role === "guest" && <GuestMenu />}
              {role === "admin" && <AdminMenu />}
             
            </nav>
          </div>
        </div>

        <div>
          <hr />

          {/* Profile Menu */}
          <MenuItem
            label={"Profile"}
            address={"/dashboard/profile"}
            icon={MdAccountCircle}
          />

          <button
            onClick={logOut}
            className="flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform"
          >
            <GrLogout className="w-5 h-5" />

            <span className="mx-4 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
