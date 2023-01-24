import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { Container } from './styles';

interface Product {
  name: string;

  id: number;
  name;
  brand;
  description;
  photo;
  price;
  createdAt;
  updatedAt;
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
