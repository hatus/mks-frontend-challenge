import { useProducts } from './hooks/useProducts';
import { ProductCard } from '../../components/ProductCard';
import { SkeletonCard } from '../../components/SkeletonCard';
import { Container, ProductCardList } from './styles';
import { useAppDispatch, useAppSelector } from '../../store';
import { toggleCart } from '../../store/features/cartSlice';

export function Products() {
  const dispatch = useAppDispatch();
  const { products, loading } = useProducts();

  const items = useAppSelector(state => state.cart.items);
  const cartIsOpen = useAppSelector(state => state.cart.isOpen);

  return (
    <Container>
      {loading && <SkeletonCard />}

      {!loading && (
        <ProductCardList>
          {products.map(product => (
            <ProductCard key={product.id} data={product} />
          ))}
        </ProductCardList>
      )}
    </Container>
  );
}
