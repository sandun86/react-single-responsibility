import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '../api/product';

export const useFetchProducts = () => {
    return useQuery({
        queryKey: ['products'],
        queryFn: fetchProducts,
    })
};