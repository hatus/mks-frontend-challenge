import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import { Container } from './styles';

export function SkeletonCard() {
  return (
    <Container>
      {Array(8)
        .fill(0, 0, 8)
        .map((_, i) => (
          <Skeleton key={i} width={218} height={280} borderRadius={8} />
        ))}
    </Container>
  );
}
