import { ShoppingBagOpen } from 'phosphor-react';
import { Product } from '../../pages/Products/interfaces/Product';
import { useAppDispatch } from '../../store';
import { addItemToCart } from '../../store/features/cartSlice';
import { convertPriceToBrlCurrency } from '../../utils/convert-price-to-brl-currency';

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
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { brand, description, name, price, photo } = product;

  const dispatch = useAppDispatch();

  const priceInBrl = convertPriceToBrlCurrency(price);

  const handleAddItemToCart = () =>
    dispatch(
      addItemToCart({
        product,
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
