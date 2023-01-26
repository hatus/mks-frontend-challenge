import { useEffect, useState } from 'react';

import { api } from '../../../services/api';
import { Product } from '../interfaces/Product';

const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await api.get(
          '/products?page=1&rows=8&sortBy=name&orderBy=ASC',
        );
        setProducts(data.products);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return {
    products,
    loading,
  };
};

export { useProducts };
