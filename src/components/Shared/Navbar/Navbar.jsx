import Container from "../Container";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import logo from "../../../assets/images/logo.png";
import avatarImg from "../../../assets/images/placeholder.jpg";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const Navbar = () => {
  const axiosSecure = useAxiosSecure();
  const { user, logOut } = useAuth();

  const [isOpen, setIsOpen] = useState(false);
  const handleBecomeHost = async () => {
    console.log("i wanted to be host");
      await axiosSecure.patch(`/user/${user?.email}`).then(res => {
      if (res.data.modifiedCount > 0) {
        toast.success("Success! Please wait for user confirmation");
      } else {
        toast.success('Please Wait for Admin Approval')
      }
    })
  };
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-row  items-center justify-between gap-3 md:gap-0">
            {/* Logo */}
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
            {/* Dropdown Menu */}
            <div className="relative">
              <div className="flex flex-row items-center gap-3">
                {/* Become A Host btn */}
                <div className=" md:block">
                  {/* {!user && (
                  )} */}
                  <button
                    disabled={!user}
                    onClick={() =>
                      document.getElementById("my_modal_5").showModal()
                    }
                    className="disabled:cursor-not-allowed cursor-pointer hover:bg-neutral-100 py-3 px-4 text-sm font-semibold rounded-full  transition"
                  >
                    Host your home
                  </button>
                  <dialog
                    id="my_modal_5"
                    className="modal modal-bottom sm:modal-middle"
                  >
                    <div className="modal-box">
                      <h3 className="font-bold text-lg">Become a Host!!</h3>
                      <p className="py-4 text-xs">
                        A modal is a temporary, focused dialog box that requires
                        users to interact with it before returning to the main
                        application. It is commonly used for actions that need
                        user confirmation or for displaying important messages.
                      </p>
                      <div className="modal-action">
                        <form method="dialog " className="space-x-4">
                          <button
                            onClick={handleBecomeHost}
                            className="btn bg-green-100 text-green-600"
                          >
                            Continue
                          </button>
                          {/* if there is a button in form, it will close the modal */}
                          <button className="btn bg-red-100 text-red-600">
                            Cancel
                          </button>
                        </form>
                      </div>
                    </div>
                  </dialog>
                </div>
                {/* Dropdown btn */}
                <div
                  onClick={() => setIsOpen(!isOpen)}
                  className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
                >
                  <AiOutlineMenu />
                  <div className="hidden md:block">
                    {/* Avatar */}
                    <img
                      className="rounded-full"
                      referrerPolicy="no-referrer"
                      src={user && user.photoURL ? user.photoURL : avatarImg}
                      alt="profile"
                      height="30"
                      width="30"
                    />
                  </div>
                </div>
              </div>
              {isOpen && (
                <div className="absolute rounded-xl shadow-md w-[40vw] md:w-[10vw] bg-white overflow-hidden right-0 top-12 text-sm">
                  <div className="flex flex-col cursor-pointer">
                    <Link
                      to="/"
                      className="block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                    >
                      Home
                    </Link>

                    {user ? (
                      <>
                        <Link
                          to="/dashboard"
                          className="block  px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                        >
                          Dashboard
                        </Link>
                        <div
                          onClick={logOut}
                          className="px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer"
                        >
                          Logout
                        </div>
                      </>
                    ) : (
                      <>
                        <Link
                          to="/login"
                          className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                        >
                          Login
                        </Link>
                        <Link
                          to="/signup"
                          className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                        >
                          Sign Up
                        </Link>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
