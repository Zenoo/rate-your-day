// Building blocks FormLayouts components
import { Account, Contact, IndexView } from 'blocks/formLayouts';
import React from 'react';

const routes = [
  {
    path: '/blocks/form-layouts',
    renderer: (params = {}) => <IndexView {...params} />,
  },
  {
    path: '/blocks/form-layouts/account',
    renderer: (params = {}) => <Account {...params} />,
  },
  {
    path: '/blocks/form-layouts/contact',
    renderer: (params = {}) => <Contact {...params} />,
  },
];

export default routes;
