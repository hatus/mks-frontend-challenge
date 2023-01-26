import { ShoppingBagOpen } from 'phosphor-react';
import { Product } from '../../pages/Products/interfaces/Product';
import { useAppDispatch, useAppSelector } from '../../store';
import { addItem } from '../../store/features/cartSlice';

import {
  Container,
  Image,
  Description,
  Info,
  Name,
  Price,
  Footer,
  Body,
} from './styles';

interface ProductCardProps {
  data: Product;
}

export function ProductCard({ data }: ProductCardProps) {
  const { brand, description, name, price, photo } = data;

  const dispatch = useAppDispatch();

  const priceInBrl = Number(price).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  const handleAddItemToCart = () =>
    dispatch(
      addItem({
        product: data,
        qty: 1,
      }),
    );

  return (
    <Container>
      <Body>
        <Image src={photo} alt={description} />

        <Info>
          <Name>
            {brand} {name}
          </Name>

          <Price>{priceInBrl}</Price>
        </Info>

        <Description>{description}</Description>
      </Body>

      <Footer onClick={handleAddItemToCart}>
        <ShoppingBagOpen size={20} color="#fff" />

        <span>COMPRAR</span>
      </Footer>
    </Container>
  );
}
