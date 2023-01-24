import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { Container } from './styles';

interface Product {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
  createdAt: Date;
  updatedAt: Date;
}

export function Products() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    try {
      api.get('/produtcs?');
    } catch (error) {}
  }, []);

  return <Container></Container>;
}
