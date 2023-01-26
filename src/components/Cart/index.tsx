import { useAppDispatch, useAppSelector } from '../../store';
import { closeCart } from '../../store/features/cartSlice';
import { CloseButton } from './components/CloseButton';
import { ItemCard } from './components/ItemCard';

import {
  Body,
  Container,
  Footer,
  Header,
  TitleCart,
  FinishButton,
  TotalContainer,
  TotalLabel,
  TotalValue,
} from './styles';

interface CartProps {
  isOpen: boolean;
}

export function Cart({ isOpen }: CartProps) {
  const dispatch = useAppDispatch();

  const cartItems = useAppSelector(state => state.cart.items);

  const cartTotalValue = useAppSelector(
    state => state.cart.totalValue,
  ).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  const handleCloseCart = () => dispatch(closeCart());

  return (
    <Container isOpen={isOpen}>
      <Header>
        <TitleCart>Carrinho de compras</TitleCart>

        <CloseButton size={38} onClick={handleCloseCart} />
      </Header>

      <Body>
        {cartItems.map(item => (
          <ItemCard key={item.product.id} item={item} />
        ))}
      </Body>

      <Footer>
        <TotalContainer>
          <TotalLabel>Total:</TotalLabel>

          <TotalValue>{cartTotalValue}</TotalValue>
        </TotalContainer>

        <FinishButton>Finalizar compra</FinishButton>
      </Footer>
    </Container>
  );
}
