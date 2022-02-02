// Building blocks Team components
import { IndexView, TeamWithCircledPhotos, TeamWithSmallSquarePhotos, WithAlternateCards, WithLargeImagesAndSocialIcons, WithOverlappedCards, WithSimpleCards } from 'blocks/team';
import React from 'react';


const routes = [
  {
    path: '/blocks/team',
    renderer: (params = {}) => <IndexView {...params} />,
  },
  {
    path: '/blocks/team/team-with-circled-photos',
    renderer: (params = {}) => <TeamWithCircledPhotos {...params} />,
  },
  {
    path: '/blocks/team/with-overlapped-cards',
    renderer: (params = {}) => <WithOverlappedCards {...params} />,
  },
  {
    path: '/blocks/team/with-large-images-and-social-icons',
    renderer: (params = {}) => (
      <WithLargeImagesAndSocialIcons {...params} />
    ),
  },
  {
    path: '/blocks/team/team-with-small-square-photos',
    renderer: (params = {}) => <TeamWithSmallSquarePhotos {...params} />,
  },
  {
    path: '/blocks/team/with-simple-card',
    renderer: (params = {}) => <WithSimpleCards {...params} />,
  },
  {
    path: '/blocks/team/with-alternate-card',
    renderer: (params = {}) => <WithAlternateCards {...params} />,
  },
];

export default routes;
