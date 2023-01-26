import { ShoppingCart } from 'phosphor-react';

import { useAppSelector } from '../../store';

import { Container, NumberProductInCart } from './styles';

export function CartQuantityBox({ ...rest }) {
  const items = useAppSelector(state => state.cart.items);

  return (
    <Container {...rest}>
      <ShoppingCart size={20} color="#000" weight="bold" />

      <NumberProductInCart>{items.length}</NumberProductInCart>
    </Container>
  );
}
