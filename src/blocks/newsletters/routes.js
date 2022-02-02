// Building blocks Newsletter components
import { IndexView, NewsletterWithCard, NewsletterWithImage, WithDarkBackground } from 'blocks/newsletters';
import React from 'react';


const routes = [
  {
    path: '/blocks/newsletters',
    renderer: (params = {}) => <IndexView {...params} />,
  },
  {
    path: '/blocks/newsletters/newsletter-with-card',
    renderer: (params = {}) => <NewsletterWithCard {...params} />,
  },
  {
    path: '/blocks/newsletters/newsletter-with-image',
    renderer: (params = {}) => <NewsletterWithImage {...params} />,
  },
  {
    path: '/blocks/newsletters/with-dark-background',
    renderer: (params = {}) => <WithDarkBackground {...params} />,
  },
];

export default routes;
