// Building blocks feature section components
import { FeatureCardsWithColorfullIconsAndLearnMoreLink, FeatureCardWithCtaButton, FeatureGridWithBackgrounds, FeatureListWithDesktopAppScreenshot, FeatureListWithForm, FeaturesWithCardRepresentation, FeaturesWithCheckMarksAndAbstractImages, FeaturesWithIllustration, FeaturesWithLearnMoreLink, FeaturesWithMasonryCardsAndCheckIcons, FeaturesWithMinimalDesign, FeaturesWithMobileScreenshot, FeaturesWithSimpleIcons, FeaturesWithSimpleLeftAlignedIcons, IndexView, OneLineFeatureListWithCheckMarks, SimpleCentered, SimpleFeaturesWithAlternateCards, SimpleLeftAligned } from 'blocks/features';
import React from 'react';


const routes = [
  {
    path: '/blocks/features',
    renderer: (params = {}) => <IndexView {...params} />,
  },
  {
    path: '/blocks/features/simple-centered',
    renderer: (params = {}) => <SimpleCentered {...params} />,
  },
  {
    path: '/blocks/features/features-with-card-representation',
    renderer: (params = {}) => (
      <FeaturesWithCardRepresentation {...params} />
    ),
  },
  {
    path: '/blocks/features/features-with-simple-icons',
    renderer: (params = {}) => <FeaturesWithSimpleIcons {...params} />,
  },
  {
    path: '/blocks/features/features-with-check-marks-and-abstract-images',
    renderer: (params = {}) => (
      <FeaturesWithCheckMarksAndAbstractImages {...params} />
    ),
  },
  {
    path: '/blocks/features/simple-left-aligned',
    renderer: (params = {}) => <SimpleLeftAligned {...params} />,
  },
  {
    path: '/blocks/features/simple-features-with-alternate-cards',
    renderer: (params = {}) => (
      <SimpleFeaturesWithAlternateCards {...params} />
    ),
  },
  {
    path: '/blocks/features/features-with-learn-more-link',
    renderer: (params = {}) => <FeaturesWithLearnMoreLink {...params} />,
  },
  {
    path:
      '/blocks/features/feature-cards-with-colorfull-icons-and-learn-more-link',
    renderer: (params = {}) => (
      <FeatureCardsWithColorfullIconsAndLearnMoreLink {...params} />
    ),
  },
  {
    path: '/blocks/features/features-with-minimal-design',
    renderer: (params = {}) => <FeaturesWithMinimalDesign {...params} />,
  },
  {
    path: '/blocks/features/one-line-feature-list-with-check-marks',
    renderer: (params = {}) => (
      <OneLineFeatureListWithCheckMarks {...params} />
    ),
  },
  {
    path: '/blocks/features/feature-list-with-form',
    renderer: (params = {}) => <FeatureListWithForm {...params} />,
  },
  {
    path: '/blocks/features/features-with-illustration',
    renderer: (params = {}) => <FeaturesWithIllustration {...params} />,
  },
  {
    path: '/blocks/features/features-with-mobile-screenshot',
    renderer: (params = {}) => <FeaturesWithMobileScreenshot {...params} />,
  },
  {
    path: '/blocks/features/feature-card-with-cta-button',
    renderer: (params = {}) => <FeatureCardWithCtaButton {...params} />,
  },
  {
    path: '/blocks/features/feature-grid-with-backgrounds',
    renderer: (params = {}) => <FeatureGridWithBackgrounds {...params} />,
  },
  {
    path: '/blocks/features/features-with-masonry-cards-and-check-icons',
    renderer: (params = {}) => (
      <FeaturesWithMasonryCardsAndCheckIcons {...params} />
    ),
  },
  {
    path: '/blocks/features/feature-list-with-desktop-app-screenshot',
    renderer: (params = {}) => (
      <FeatureListWithDesktopAppScreenshot {...params} />
    ),
  },
  {
    path: '/blocks/features/features-with-simple-left-aligned-icons',
    renderer: (params = {}) => (
      <FeaturesWithSimpleLeftAlignedIcons {...params} />
    ),
  },
];

export default routes;
