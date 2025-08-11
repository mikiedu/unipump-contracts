import client from '@/lib/client';
import { GetAllSales } from '@/lib/queries';
import { useQuery } from '@tanstack/react-query';

const useGetAllSales = () => {
    return useQuery({
        queryKey: ["getAllSales"],
        queryFn: async () => {
            try {
                console.log("Fetching token sales...");
                const response = await client.query({ query: GetAllSales });
                console.log("Raw GraphQL response:", response);
                
                if (response.errors) {
                    console.error("GraphQL Errors:", response.errors);
                }
                
                if (!response.data) {
                    console.error("No data in GraphQL response");
                    return [];
                }
                
                const result = response.data.uniPumpCreatorSaless;
                console.log("Token sales response:", result);
                const items = result?.items;
                console.log("Parsed token sales:", items);
                
                if (!items || !Array.isArray(items) || items.length === 0) {
                    console.log("No token sales found");
                    return [];
                }
                
                return items;
            } catch (error) {
                console.error("Error fetching token sales:", error);
                throw error;
            }
        },
        retry: 1,
    });
};

export default useGetAllSales