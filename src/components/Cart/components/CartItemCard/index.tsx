import { useAppDispatch } from '../../../../store';
import { CartItem, removeItem } from '../../../../store/features/cartSlice';
import { CloseButton } from '../CloseButton';
import { Container, Image, ProductName, ProductPrice } from './styles';
import { convertPriceToBrlCurrency } from '../../../../utils/convert-price-to-brl-currency';
import { SelectQtyItem } from '../SelectQtyItem';

interface ItemCardProps {
  item: CartItem;
}

export function CartItemCard({ item }: ItemCardProps) {
  const dispatch = useAppDispatch();

  const handleRemoveItem = () => dispatch(removeItem(item));

  const totalValueByItem = Number(item.product.price) * item.qty + '';

  return (
    <Container>
      <CloseButton size={18} onClick={handleRemoveItem} absolute />

      <Image src={item.product.photo} alt={item.product.description} />

      <ProductName>
        {item.product.brand} {item.product.name}
      </ProductName>

      <SelectQtyItem item={item} />

      <ProductPrice>{convertPriceToBrlCurrency(totalValueByItem)}</ProductPrice>
    </Container>
  );
}
