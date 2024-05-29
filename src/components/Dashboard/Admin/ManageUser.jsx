import { Helmet } from "react-helmet-async";
import useAllUsers from "../../../hooks/useAllUsers";
import Spinner from "../../Spinner";

const ManageUser = () => {
  const [allUser, refetch, isLoading] = useAllUsers();

  return (
    <>
      <div className="container mx-auto px-4 sm:px-8">
        <Helmet>
          <title>Manage Users</title>
        </Helmet>
        <div className="overflow-x-auto">
          {isLoading ? (
            <Spinner />
          ) : (
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th className="text-base text-[#29ADB2]">Email</th>
                  <th className="text-base text-[#29ADB2]">Role</th>
                  <th className="text-base text-[#29ADB2]">Status</th>
                  <th className="text-base text-[#29ADB2]">Action</th>
                </tr>
              </thead>
              <tbody>
                {allUser?.map((user, index) => (
                  <tr key={index}>
                    <th>
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12 rounded-full">
                          <img
                            src={user?.photo}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div>
                          <div className="text-sm opacity-70">
                            {user?.email}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className="badge badge-ghost ">{user?.role}</span>
                    </td>
                    <td>
                      <div
                        className={
                          user?.status === "verified"
                            ? "text-green-500"
                            : "text-yellow-500"
                        }
                      >
                        {user?.status}
                      </div>
                    </td>
                    <th>
                      <button className="btn btn-ghost btn-xs bg-green-100 text-green-600">
                        Update Role
                      </button>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export default ManageUser;
