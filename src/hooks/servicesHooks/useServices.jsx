import { useQuery } from "@tanstack/react-query";
import secureApi from "../../api/secureApi";

const useServices = () => {
  const { refetch, data: services = [], isLoading, error } = useQuery({
    queryKey: ['services'],
    queryFn: async () => {
      const response = await secureApi.get(`/services`);
      return response.data;
    },
  });

  return { services, refetch, isLoading, error };
}

export default useServices