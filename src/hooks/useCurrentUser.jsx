import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";

function useCurrentUser() {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const {
    data: userData,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/user/${user?.email}`);
      return data;
    },
  });
  return [userData, refetch, isLoading];
}

export default useCurrentUser;
