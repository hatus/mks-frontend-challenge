import { useProducts } from './hooks/useProducts';
import { ProductCard } from '../../components/ProductCard';
import { SkeletonCard } from '../../components/SkeletonCard';
import { Container, ProductCardList } from './styles';

export function Products() {
  const {
    products,
    stateOfFetch: { isError, isLoading },
  } = useProducts();

  return (
    <Container>
      {isError && <p>Erro ao carregar produtos.</p>}

      {isLoading ? (
        <SkeletonCard />
      ) : (
        <ProductCardList>
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ProductCardList>
      )}
    </Container>
  );
}
