import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

function useRole() {
  const { user, loading } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const { data: role } = useQuery({
    queryKey: ["role"],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/user/${user?.email}`);
      return data.role;
    },
  });
  return [role];
}

export default useRole;
