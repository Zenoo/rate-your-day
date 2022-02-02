// Building blocks Hero components
import { FullScreenHeroWithImageSlider, FullScreenHeroWithLogoGrid, FullScreenHeroWithPromoImagesAndTypedText, FullScreenHeroWithSubscriptionForm, HeroForEcommerceApp, HeroWithBackgroundVideo, HeroWithDashboardScreenshotAndCta, HeroWithFormAndBackgroundGradient, HeroWithIllustrationAndCta, HeroWithIllustrationAndSearchBar, HeroWithLogoGridAndDesktopScreenshot, HeroWithMobileAppScreenshot, HeroWithPrimaryBackgroundAndDesktopScreenshot, IndexView, SimpleHeroWithBottomVideo, SimpleHeroWithCta, SimpleHeroWithImageAndCtaButtons, SimpleHeroWithSearchBox } from 'blocks/heroes';
import React from 'react';


const routes = [
  {
    path: '/blocks/heroes',
    renderer: (params = {}) => <IndexView {...params} />,
  },
  {
    path: '/blocks/heroes/full-screen-hero-with-promo-images-and-typed-text',
    renderer: (params = {}) => (
      <FullScreenHeroWithPromoImagesAndTypedText {...params} />
    ),
  },
  {
    path: '/blocks/heroes/full-screen-hero-with-image-slider',
    renderer: (params = {}) => (
      <FullScreenHeroWithImageSlider {...params} />
    ),
  },
  {
    path: '/blocks/heroes/hero-with-form-and-background-gradient',
    renderer: (params = {}) => (
      <HeroWithFormAndBackgroundGradient {...params} />
    ),
  },
  {
    path: '/blocks/heroes/hero-for-ecommerce-app',
    renderer: (params = {}) => <HeroForEcommerceApp {...params} />,
  },
  {
    path: '/blocks/heroes/full-screen-hero-with-subscription-form',
    renderer: (params = {}) => (
      <FullScreenHeroWithSubscriptionForm {...params} />
    ),
  },
  {
    path: '/blocks/heroes/hero-with-illustration-and-search-bar',
    renderer: (params = {}) => (
      <HeroWithIllustrationAndSearchBar {...params} />
    ),
  },
  {
    path: '/blocks/heroes/hero-with-mobile-app-screenshot',
    renderer: (params = {}) => <HeroWithMobileAppScreenshot {...params} />,
  },
  {
    path: '/blocks/heroes/hero-with-dashboard-screenshot-and-cta',
    renderer: (params = {}) => (
      <HeroWithDashboardScreenshotAndCta {...params} />
    ),
  },
  {
    path: '/blocks/heroes/simple-hero-with-search-box',
    renderer: (params = {}) => <SimpleHeroWithSearchBox {...params} />,
  },
  {
    path: '/blocks/heroes/simple-hero-with-cta',
    renderer: (params = {}) => <SimpleHeroWithCta {...params} />,
  },
  {
    path: '/blocks/heroes/hero-with-illustration-and-cta',
    renderer: (params = {}) => <HeroWithIllustrationAndCta {...params} />,
  },
  {
    path: '/blocks/heroes/hero-with-logo-grid-and-desktop-screenshot',
    renderer: (params = {}) => (
      <HeroWithLogoGridAndDesktopScreenshot {...params} />
    ),
  },
  {
    path: '/blocks/heroes/hero-with-background-video',
    renderer: (params = {}) => <HeroWithBackgroundVideo {...params} />,
  },
  {
    path: '/blocks/heroes/simple-hero-with-bottom-video',
    renderer: (params = {}) => <SimpleHeroWithBottomVideo {...params} />,
  },
  {
    path: '/blocks/heroes/hero-with-primary-background-and-desktop-screenshot',
    renderer: (params = {}) => (
      <HeroWithPrimaryBackgroundAndDesktopScreenshot {...params} />
    ),
  },
  {
    path: '/blocks/heroes/full-screen-hero-with-logo-grid',
    renderer: (params = {}) => <FullScreenHeroWithLogoGrid {...params} />,
  },
  {
    path: '/blocks/heroes/simple-hero-with-image-and-cta-buttons',
    renderer: (params = {}) => (
      <SimpleHeroWithImageAndCtaButtons {...params} />
    ),
  },
];

export default routes;
