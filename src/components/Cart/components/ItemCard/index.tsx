import { useAppDispatch } from '../../../../store';
import { CartItem, removeItem } from '../../../../store/features/cartSlice';
import { CloseButton } from '../CloseButton';
import { Container } from './styles';

interface ItemCardProps {
  item: CartItem;
}

export function ItemCard({ item }: ItemCardProps) {
  const dispatch = useAppDispatch();

  const handleRemoveItem = () => dispatch(removeItem(item));

  return (
    <Container>
      <CloseButton size={18} onClick={handleRemoveItem} absolute />
      {item.product.name}
    </Container>
  );
}
