// Building blocks Sidebars components
import { IndexView, Simple, WithCollapsibleMenuItems, WithDarkBg } from 'blocks/sidebars';
import React from 'react';


const routes = [
  {
    path: '/blocks/sidebars',
    renderer: (params = {}) => <IndexView {...params} />,
  },
  {
    path: '/blocks/sidebars/simple',
    renderer: (params = {}) => <Simple {...params} />,
  },
  {
    path: '/blocks/sidebars/with-dark-bg',
    renderer: (params = {}) => <WithDarkBg {...params} />,
  },
  {
    path: '/blocks/sidebars/with-collapsible-menu-items',
    renderer: (params = {}) => <WithCollapsibleMenuItems {...params} />,
  },
];

export default routes;
