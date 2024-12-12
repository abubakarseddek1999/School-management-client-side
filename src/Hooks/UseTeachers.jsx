import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const UseTeachers = () => {
    const axiosPublic = useAxiosPublic();
    const { data: teachers = [], isLoading, isError, error, refetch } = useQuery({
        queryKey: ['teachers'],
        queryFn: async () => {
            const res = await axiosPublic.get('/teachers');
            return res.data;
        },
    });
    
    const Data ={teachers,isLoading,isError,error,refetch}
    return Data
};

export default UseTeachers;