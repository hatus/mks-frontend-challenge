import { Container } from './styles';

interface CloseButtonProps {
  size: number;
  absolute?: boolean;
  onClick: () => void;
}

export function CloseButton({
  size,
  absolute,
  onClick,
  ...rest
}: CloseButtonProps) {
  return (
    <Container
      size={size}
      absolute={absolute ?? false}
      onClick={onClick}
      {...rest}
    >
      X
    </Container>
  );
}
