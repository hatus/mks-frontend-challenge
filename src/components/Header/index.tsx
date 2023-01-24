import { CartBox } from '../../components/CartBox';
import { Container, Logo, LogoPart1, LogoPart2 } from './styles';

export function Header() {
  return (
    <Container>
      <Logo>
        <LogoPart1>MKS</LogoPart1> <LogoPart2>Sistemas</LogoPart2>
      </Logo>

      <CartBox />
    </Container>
  );
}
