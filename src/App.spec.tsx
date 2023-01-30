import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';

describe('App integration tests', () => {
  it('should render product items once fetched', async () => {
    const { getAllByRole, findAllByRole } = render(<App />);

    await findAllByRole('product-name');

    expect(getAllByRole('product-name')).toHaveLength(8);
  });

  it('should be able to add one item to cart', async () => {
    const { getAllByRole } = render(<App />);

    await waitFor(() => {
      const buyButtons = getAllByRole('button-buy');

      userEvent.click(buyButtons[0]);

      expect(getAllByRole('cart-item')).toHaveLength(1);
    });
  });

  it('should be able to remove one item from cart', async () => {
    const { queryByRole, queryAllByRole } = render(<App />);

    await waitFor(() => {
      const removeButtons = queryAllByRole('button-remove-item-cart');

      userEvent.click(removeButtons[0]);

      expect(queryByRole('cart-item')).not.toBeInTheDocument();
    });
  });
});
