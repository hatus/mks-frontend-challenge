import Skeleton from 'react-loading-skeleton';

import { Container } from './styles';

export function SkeletonCard() {
  return (
    <Container>
      {Array(8)
        .fill(0, 0, 8)
        .map((item, index) => (
          <Skeleton height={280} width={218} borderRadius={8} key={index} />
        ))}
    </Container>
  );
}
