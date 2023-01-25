import { useAppDispatch, useAppSelector } from '../../store';
import { closeCart } from '../../store/features/cartSlice';
import { CloseButton } from './components/CloseButton';

import { Container, Header, TitleCart } from './styles';

type ShoppingCartProps = {
  isOpen: boolean;
};

export function Cart({ isOpen }: ShoppingCartProps) {
  const dispatch = useAppDispatch();

  const items = useAppSelector(state => state.cart.items);

  const handleCloseCart = () => dispatch(closeCart());

  return (
    <Container isOpen={isOpen}>
      <Header>
        <TitleCart>Carrinho{'\n'}de compras</TitleCart>
        <CloseButton onClick={handleCloseCart} />
      </Header>
    </Container>
  );
}
