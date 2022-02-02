// Building blocks Tables components
import { IndexView, Simple, SimpleStriped, WithAvatarsAndMultilineContent } from 'blocks/tables';
import React from 'react';


const routes = [
  {
    path: '/blocks/tables',
    renderer: (params = {}) => <IndexView {...params} />,
  },
  {
    path: '/blocks/tables/with-avatars-and-multiline-content',
    renderer: (params = {}) => (
      <WithAvatarsAndMultilineContent {...params} />
    ),
  },
  {
    path: '/blocks/tables/simple-striped',
    renderer: (params = {}) => <SimpleStriped {...params} />,
  },
  {
    path: '/blocks/tables/simple',
    renderer: (params = {}) => <Simple {...params} />,
  },
];

export default routes;
