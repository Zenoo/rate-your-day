// Building blocks Testimonials components
import { IndexView, ReviewsWithBorderedGridLayout, ReviewsWithSimpleBoxes, WithBrandBgColor, WithCompanyLogo, WithHighlightedCard, WithLargeImage, WithOutlinedCards } from 'blocks/testimonials';
import React from 'react';


const routes = [
  {
    path: '/blocks/testimonials',
    renderer: (params = {}) => <IndexView {...params} />,
  },
  {
    path: '/blocks/testimonials/with-large-image',
    renderer: (params = {}) => <WithLargeImage {...params} />,
  },
  {
    path: '/blocks/testimonials/with-highlighted-card',
    renderer: (params = {}) => <WithHighlightedCard {...params} />,
  },
  {
    path: '/blocks/testimonials/reviews-with-bordered-grid-layout',
    renderer: (params = {}) => (
      <ReviewsWithBorderedGridLayout {...params} />
    ),
  },
  {
    path: '/blocks/testimonials/with-company-logo',
    renderer: (params = {}) => <WithCompanyLogo {...params} />,
  },
  {
    path: '/blocks/testimonials/with-outlined-cards',
    renderer: (params = {}) => <WithOutlinedCards {...params} />,
  },
  {
    path: '/blocks/testimonials/reviews-with-simple-boxes',
    renderer: (params = {}) => <ReviewsWithSimpleBoxes {...params} />,
  },
  {
    path: '/blocks/testimonials/with-brand-bg-color',
    renderer: (params = {}) => <WithBrandBgColor {...params} />,
  },
];

export default routes;
