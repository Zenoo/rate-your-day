// Building blocks shoppingCarts components
import { CartWithOrderSummery, EmptyCart, IndexView } from 'blocks/shoppingCarts';
import React from 'react';


const routes = [
  {
    path: '/blocks/shopping-carts',
    renderer: (params = {}) => <IndexView {...params} />,
  },
  {
    path: '/blocks/shopping-carts/cart-with-order-summery',
    renderer: (params = {}) => <CartWithOrderSummery {...params} />,
  },
  {
    path: '/blocks/shopping-carts/empty-cart',
    renderer: (params = {}) => <EmptyCart {...params} />,
  },
];

export default routes;
