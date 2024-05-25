import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

function MyListings() {
  const { user } = useAuth();

  const axiosSecure = useAxiosSecure();
  const { data: room, refetch } = useQuery({
    queryKey: "my-listings",
    queryFn: async () => {
      const res = await axiosSecure.get(`/myListings/${user.email}`);
      return res.data;
    },
  });
  const handleDeleteItem = async (id) => {
    await axiosSecure.delete(`/roomItem/${id}`).then((res) => {
      if (res.data.deletedCount === 1) {
        toast.success("Delete Successfully!");
      }
      refetch();
    });
  };
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th className="text-[#29ADB2] text-base"></th>
            <th className="text-[#29ADB2] text-base">Title</th>
            <th className="text-[#29ADB2] text-base">Location</th>
            <th className="text-[#29ADB2] text-base">Price</th>
            <th className="text-[#29ADB2] text-base">Form</th>
            <th className="text-[#29ADB2] text-base">To</th>
            <th className="text-[#29ADB2] text-base">Delete</th>
            <th className="text-[#29ADB2] text-base">Update</th>
          </tr>
        </thead>
        <tbody>
          {room?.map((item, index) => (
            <tr key={index}>
              <th>
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img
                      src={item?.image}
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
              </th>

              <td>
                <div className="flex items-center gap-3">
                  <div>
                    <div className="font-bold">{item?.title}</div>
                  </div>
                </div>
              </td>
              <td>
                <span className="badge badge-ghost badge-sm">
                  {item?.location}
                </span>
              </td>
              <td>${item?.price}</td>
              <th>
                <div className="text-xs"> {item?.from.split("T")[0]}</div>
              </th>
              <th>
                <div className="text-xs"> {item?.to.split("T")[0]}</div>
              </th>
              <th>
                <button
                  onClick={() =>
                    document.getElementById("my_modal_5").showModal()
                  }
                  className="btn btn-xs bg-red-100 text-red-600"
                >
                  Delete
                </button>
              </th>
              <th>
                <button className="btn btn-xs bg-green-100 text-green-600">
                  Update
                </button>
              </th>
              <dialog
                id="my_modal_5"
                className="modal modal-bottom sm:modal-middle"
              >
                <div className="modal-box">
                  <h3 className="font-bold text-lg">
                    Are you sure you want to delete this item?
                  </h3>
                  <p className="py-4 text-xs">
                    A modal is a temporary, focused dialog box that requires
                    users to interact with it before returning to the main
                    application. It is commonly used for actions that need user
                    confirmation or for displaying important messages.
                  </p>
                  <div className="modal-action">
                    <form method="dialog " className="space-x-4">
                    <button
                      onClick={() => handleDeleteItem(item?._id)}
                      className="btn bg-red-100 text-red-600"
                    >
                      Delete
                    </button>
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn bg-green-100 text-green-600">
                        Cancel
                      </button>
                    </form>
                  </div>
                </div>
              </dialog>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MyListings;
