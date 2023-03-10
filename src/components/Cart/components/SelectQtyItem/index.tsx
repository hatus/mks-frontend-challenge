import { useAppDispatch } from '../../../../store';
import {
  CartItem,
  decrementItemAmount,
  incrementItemAmount,
} from '../../../../store/features/cartSlice';
import {
  Container,
  Label,
  SelectorGroup,
  SelectorButton,
  SelectorQty,
} from './styles';

interface SelectQtyItemProps {
  item: CartItem;
}

export function SelectQtyItem({ item }: SelectQtyItemProps) {
  const dispatch = useAppDispatch();

  const handleIncreaseQtyItem = () => dispatch(incrementItemAmount(item));
  const handleDecreaseQtyItem = () => dispatch(decrementItemAmount(item));

  return (
    <Container>
      <Label>Qtd:</Label>

      <SelectorGroup>
        <SelectorButton
          onClick={handleDecreaseQtyItem}
          role="button-decrease-qty"
        >
          -
        </SelectorButton>

        <SelectorQty role="cart-item-amount">{item.qty}</SelectorQty>

        <SelectorButton
          onClick={handleIncreaseQtyItem}
          role="button-increase-qty"
        >
          +
        </SelectorButton>
      </SelectorGroup>
    </Container>
  );
}
