import { useProducts } from './hooks/useProducts';
import { ProductCard } from '../../components/ProductCard';
import { SkeletonCard } from '../../components/SkeletonCard';
import { Container, ProductCardList } from './styles';

export function Products() {
  const { products, loading } = useProducts();

  return (
    <Container>
      {loading ? (
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
