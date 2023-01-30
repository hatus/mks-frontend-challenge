import { useEffect, useState } from 'react';

import { api } from '../../../services/api';
import { Product } from '../interfaces/Product';

const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [stateOfFetch, setStateOfFetch] = useState({
    isLoading: true,
    isError: false,
  });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await api.get(
          '/products?page=1&rows=8&sortBy=name&orderBy=ASC',
        );

        setProducts(data.products);
      } catch (error) {
        setStateOfFetch(state => {
          return { ...state, isError: true };
        });
      } finally {
        setStateOfFetch(state => {
          return { ...state, isLoading: false };
        });
      }
    };

    fetchProducts();
  }, []);

  return {
    products,
    stateOfFetch,
  };
};

export { useProducts };
