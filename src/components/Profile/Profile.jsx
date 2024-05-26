import useAuth from "../../hooks/useAuth";
import { Helmet } from "react-helmet-async";
import useRole from "../../hooks/useRole";

const Profile = () => {
  const { user } = useAuth();
  const [role] = useRole();
  return (
    <div className="flex justify-center items-center h-screen">
      <Helmet>
        <title>Profile</title>
      </Helmet>
      <div className="bg-white shadow-lg rounded-2xl w-3/5">
       
        <div className="flex flex-col items-center justify-center p-4 -mt-16">
          <a href="#" className="relative block">
            <img
              alt="profile"
              src={user.photoURL}
              className="mx-auto object-cover rounded-full h-32 w-32  border-2 border-white "
            />
          </a>

          <p className="p-2 uppercase my-2 px-4 text-xs text-white bg-gray-800 rounded-full">
            {role}
          </p>
          <p className="mt-2 text-xl font-medium text-gray-800 ">
            User Id: {user.uid}
          </p>
          <div className="w-full p-2 mt-4 rounded-lg">
            <div className="flex flex-wrap items-center justify-between text-sm text-gray-600 ">
              <p className="flex flex-col">
                Name
                <span className="font-bold text-black ">
                  {user.displayName}
                </span>
              </p>
              <p className="flex flex-col">
                Email
                <span className="font-bold text-black ">{user.email}</span>
              </p>

              <div>
                <button className="bg-[#29ADB2] px-10 py-1 rounded-lg text-white cursor-pointer hover:bg-[#27989c] block mb-1">
                  Update Profile
                </button>
                <button className="bg-[#29ADB2] px-7 py-1 rounded-lg text-white cursor-pointer hover:bg-[#27989c]">
                  Change Password
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
