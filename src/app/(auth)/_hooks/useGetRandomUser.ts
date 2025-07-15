import { useUser } from "@/context/userContext";
import { getRandomUserApi } from "@/services/userService";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

const useGetRandomUser = () => {
  const { setUser } = useUser();
  const router = useRouter();
  const { mutateAsync: getUser, isPending: loadingUser } = useMutation({
    mutationFn: getRandomUserApi,
    onSuccess(data) {
      setUser(data);
      router.replace("dashboard");
    },
  });
  return {
    getUser,
    loadingUser,
  };
};

export default useGetRandomUser;
