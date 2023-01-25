import { Outlet } from 'react-router-dom';

import { Cart } from '../../components/Cart';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { useAppSelector } from '../../store';

import { Container } from './styles';

export function Default() {
  const cartIsOpen = useAppSelector(state => state.cart.isOpen);

  return (
    <Container>
      <Cart isOpen={cartIsOpen} />
      <Header />
      <Outlet />
      <Footer />
    </Container>
  );
}
