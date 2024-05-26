import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

function useAllUsers() {
  const axiosSecure = useAxiosSecure();
  const {
    data: users,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/users");
      return data;
    },
  });
  return [users, refetch, isLoading];
}

export default useAllUsers;
