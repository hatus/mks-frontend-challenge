import { ShoppingCart } from 'phosphor-react';

import { Container, NumberProductInCart } from './styles';

export function CartBox() {
  return (
    <Container>
      <ShoppingCart size={20} color="#000" weight="bold" />

      <NumberProductInCart>0</NumberProductInCart>
    </Container>
  );
}
