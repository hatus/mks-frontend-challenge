import { useAppDispatch } from '../../../../store';
import {
  CartItem,
  removeItemFromCart,
} from '../../../../store/features/cartSlice';
import { CloseButton } from '../CloseButton';
import { SelectQtyItem } from '../SelectQtyItem';
import { convertPriceToBrlCurrency } from '../../../../utils/convert-price-to-brl-currency';
import { Container, Image, ProductName, ProductPrice } from './styles';

interface ItemCardProps {
  item: CartItem;
}

export function CartItemCard({ item }: ItemCardProps) {
  const dispatch = useAppDispatch();

  const handleRemoveItemFromCart = () => dispatch(removeItemFromCart(item));

  const totalValueByCartItem = Number(item.product.price) * item.qty + '';

  return (
    <Container role="cart-item">
      <CloseButton size={18} onClick={handleRemoveItemFromCart} absolute />

      <Image src={item.product.photo} alt={item.product.description} />

      <ProductName>
        {item.product.brand} {item.product.name}
      </ProductName>

      <SelectQtyItem item={item} />

      <ProductPrice>
        {convertPriceToBrlCurrency(totalValueByCartItem)}
      </ProductPrice>
    </Container>
  );
}
