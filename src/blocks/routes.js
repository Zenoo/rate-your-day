import React from 'react';

// Building blocks components main page
import IndexView from './IndexView';
import heroBlocksRoutes from './heroes/routes';
import blogBlocksRoutes from './blog/routes';
import ctaBlocksRoutes from './cta/routes';
import featureBlocksRoutes from './features/routes';
import logoGridBlocksRoutes from './logoGrid/routes';
import newsletterBlocksRoutes from './newsletters/routes';
import pricingBlocksRoutes from './pricing/routes';
import statsBlocksRoutes from './stats/routes';
import teamBlocksRoutes from './team/routes';
import testimonialsBlockSRoutes from './testimonials/routes';
import authBlocksRoutes from './authentication/routes';
import bannerBlocksRoutes from './banners/routes';
import cardsBlocksRoutes from './cards/routes';
import formLayoutsBlocksRoutes from './formLayouts/routes';
import listsBlocksRoutes from './lists/routes';
import notificationsBlocksRoutes from './notifications/routes';
import popoverBlocksRoutes from './popovers/routes';
import pageLayoutsBlocksRoutes from './pageLayouts/routes';
import sidebarsBlocksRoutes from './sidebars/routes';
import appStatsBlocksRoutes from './appStats/routes';
import tablesBlocksRoutes from './tables/routes';
import progressStepsBlocksRoutes from './progressSteps/routes';
import userCardsBlocksRoutes from './userCards/routes';
import formControlsBlocksRoutes from './formControls/routes';
import categoryShowcasesBlocksRoutes from './categoryShowcases/routes';
import checkoutPagesBlocksRoutes from './checkoutPages/routes';
import productDetailsBlocksRoutes from './productDetails/routes';
import productFiltersBlockRoutes from './productFilters/routes';
import productGridsBlocksRoutes from './productGrids/routes';
import productPickersBlocksRoutes from './productPickers/routes';
import productQuickViewsBlocksRoutes from './productQuickViews/routes';
import productReviewsBlocksRoutes from './productReviews/routes';
import shoppingCartsBlocksRoutes from './shoppingCarts/routes';
import storeNavigationBlocksRoutes from './storeNavigation/routes';
import storePopupsBlocksRoutes from './storePopups/routes';

const routes = [
  {
    path: '/blocks',
    renderer: (params = {}) => <IndexView {...params} />,
  },
  ...heroBlocksRoutes,
  ...blogBlocksRoutes,
  ...ctaBlocksRoutes,
  ...featureBlocksRoutes,
  ...logoGridBlocksRoutes,
  ...newsletterBlocksRoutes,
  ...pricingBlocksRoutes,
  ...statsBlocksRoutes,
  ...teamBlocksRoutes,
  ...testimonialsBlockSRoutes,
  ...authBlocksRoutes,
  ...bannerBlocksRoutes,
  ...cardsBlocksRoutes,
  ...formLayoutsBlocksRoutes,
  ...listsBlocksRoutes,
  ...notificationsBlocksRoutes,
  ...popoverBlocksRoutes,
  ...pageLayoutsBlocksRoutes,
  ...sidebarsBlocksRoutes,
  ...appStatsBlocksRoutes,
  ...tablesBlocksRoutes,
  ...progressStepsBlocksRoutes,
  ...userCardsBlocksRoutes,
  ...formControlsBlocksRoutes,
  ...categoryShowcasesBlocksRoutes,
  ...checkoutPagesBlocksRoutes,
  ...productDetailsBlocksRoutes,
  ...productFiltersBlockRoutes,
  ...productGridsBlocksRoutes,
  ...productPickersBlocksRoutes,
  ...productQuickViewsBlocksRoutes,
  ...productReviewsBlocksRoutes,
  ...shoppingCartsBlocksRoutes,
  ...storeNavigationBlocksRoutes,
  ...storePopupsBlocksRoutes,
];

export default routes;
