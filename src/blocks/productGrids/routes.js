// Building blocks productGrids components
import { IndexView, MinimallyDesigned, WithCtaButton, WithPromoBadge } from 'blocks/productGrids';
import React from 'react';


const routes = [
  {
    path: '/blocks/product-grids',
    renderer: (params = {}) => <IndexView {...params} />,
  },
  {
    path: '/blocks/product-grids/with-cta-button',
    renderer: (params = {}) => <WithCtaButton {...params} />,
  },
  {
    path: '/blocks/product-grids/minimally-designed',
    renderer: (params = {}) => <MinimallyDesigned {...params} />,
  },
  {
    path: '/blocks/product-grids/with-promo-badge',
    renderer: (params = {}) => <WithPromoBadge {...params} />,
  },
];

export default routes;
