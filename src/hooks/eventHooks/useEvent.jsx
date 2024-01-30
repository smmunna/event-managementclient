import { useQuery } from "@tanstack/react-query";
import secureApi from "../../api/secureApi";

const useEvent = () => {
    const { refetch, data: events = [], isLoading, error } = useQuery({
        queryKey: ['events'],
        queryFn: async () => {
            const response = await secureApi.get(`/events`);
            return response.data;
        },
    });

    return { events, refetch, isLoading, error };
}

export default useEvent