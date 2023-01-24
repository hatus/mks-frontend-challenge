import { Image, Container } from './styles';

interface ProductCardProps {
  brand: string;
  description: string;
  name: string;
  price: string;
  photo: string;
}

export function ProductCard({
  brand,
  description,
  name,
  photo,
  price,
}: ProductCardProps) {
  const priced = Number(price).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'R$',
  });
  return (
    <Container>
      <Image src={photo} alt={description} />

      <InfoWrapper>
        <Name>{name}</Name>

        <Price>{priced}</Price>
      </InfoWrapper>

      <Description>{description}</Description>
    </Container>
  );
}
