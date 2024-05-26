import useAuth from "../../hooks/useAuth";
import { Helmet } from "react-helmet-async";
import useRole from "../../hooks/useRole";
import useAxiosSecure from "./../../hooks/useAxiosSecure";
import { ImageUpload } from "../../Utils";
import useCurrentUser from "../../hooks/useCurrentUser";
import toast from "react-hot-toast";

const Profile = () => {
  const { user } = useAuth() || {};
  const [role] = useRole();
  const [currentUser, refetch] = useCurrentUser() || {};
  console.log(currentUser);
  const axiosSecure = useAxiosSecure();
  const handleUpdateProfile = async (e) => {
    console.log("update done");
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    console.log(name);
    const image = form.image.files[0];
    const photo = await ImageUpload(image);
    const updateInfo = {
      name,
      photo,
    };
    await axiosSecure
      .patch(`/userUpdate/${user?.email}`, updateInfo)
      .then((res) => {
        if (res.data.modifiedCount === 1) {
          toast.success("Update Successfully!");
        }
      })
      .catch((err) => console.log(err));
    refetch();
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <Helmet>
        <title>Profile</title>
      </Helmet>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Update your Profile!</h3>
          <p className="py-4">Press ESC key or click on ✕ button to close</p>
          <form onSubmit={handleUpdateProfile}>
            <label
              htmlFor="UserEmail"
              className="relative mb-4 block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-[#29ADB2]"
            >
              <input
                type="name"
                placeholder="Enter Name"
                name="name"
                className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              />

              <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                Name
              </span>
            </label>
            <input
              id="image"
              name="image"
              type="file"
              className="file-input file-input-bordered  w-full max-w-xs"
            />
            <br />
            <button className="btn mt-4 bg-[#29ADB2] text-white">Update</button>
          </form>
        </div>
      </dialog>
      {/* {currentUser ? (
       
      ) : (
        <p>Loading....</p>
      )} */}
       <div className="bg-white shadow-lg rounded-2xl w-3/5">
          <div className="flex flex-col items-center justify-center p-4 -mt-16">
            <a href="#" className="relative block">
              <img
                alt="profile"
                src={currentUser && currentUser?.photo}
                className="mx-auto object-cover rounded-full h-32 w-32  border-2 border-white "
              />
            </a>

            <p className="p-2 uppercase my-2 px-4 text-xs text-white bg-gray-800 rounded-full">
              {role}
            </p>
            <p className="mt-2 text-xl font-medium text-gray-800 ">
              User Id: {user?.uid}
            </p>
            <div className="w-full p-2 mt-4 rounded-lg">
              <div className="flex flex-wrap items-center justify-between text-sm text-gray-600 ">
                <p className="flex flex-col">
                  Name
                  <span className="font-bold text-black ">
                    {currentUser && currentUser?.name}
                  </span>
                </p>
                <p className="flex flex-col">
                  Email
                  <span className="font-bold text-black ">{user?.email}</span>
                </p>

                <div>
                  <button
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                    className="bg-[#29ADB2] px-10 py-1 rounded-lg text-white cursor-pointer hover:bg-[#27989c] block mb-1"
                  >
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
