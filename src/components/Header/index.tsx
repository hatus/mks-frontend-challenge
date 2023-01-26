import { useAppDispatch } from '../../store';
import { openCart } from '../../store/features/cartSlice';
import { CartQuantityBox } from './components/CartQuantityBox';
import { Container, Logo, LogoPart1, LogoPart2 } from './styles';

export function Header() {
  const dispatch = useAppDispatch();

  const handleOpenCart = () => dispatch(openCart());

  return (
    <Container>
      <Logo>
        <LogoPart1>MKS</LogoPart1> <LogoPart2>Sistemas</LogoPart2>
      </Logo>

      <CartQuantityBox onClick={handleOpenCart} />
    </Container>
  );
}
