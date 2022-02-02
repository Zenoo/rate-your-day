// Building blocks storeNavigation components
import { IndexView, NavWithCenteredSearch } from 'blocks/storeNavigation';
import React from 'react';


const routes = [
  {
    path: '/blocks/store-navigation',
    renderer: (params = {}) => <IndexView {...params} />,
  },
  {
    path: '/blocks/store-navigation/nav-with-centered-search',
    renderer: (params = {}) => <NavWithCenteredSearch {...params} />,
  },
];

export default routes;
