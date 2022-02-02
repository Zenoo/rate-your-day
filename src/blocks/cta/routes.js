// Building blocks CTA components
import { CtaAlignedLeftWithTypedText, CtaSimpleCentered, CtaWithAppStoreButtons, CtaWithCoverImage, CtaWithIllustration, CtaWithInputField, CtaWithRightAppStoreButtons, CtaWithRightButtons, CtaWithRightDownloadButton, IndexView, SupportCenterCta } from 'blocks/cta';
import React from 'react';

const routes = [
  {
    path: '/blocks/cta',
    renderer: (params = {}) => <IndexView {...params} />,
  },
  {
    path: '/blocks/cta/cta-simple-centered',
    renderer: (params = {}) => <CtaSimpleCentered {...params} />,
  },
  {
    path: '/blocks/cta/cta-aligned-left-with-typed-text',
    renderer: (params = {}) => <CtaAlignedLeftWithTypedText {...params} />,
  },
  {
    path: '/blocks/cta/cta-with-right-buttons',
    renderer: (params = {}) => <CtaWithRightButtons {...params} />,
  },
  {
    path: '/blocks/cta/support-center-cta',
    renderer: (params = {}) => <SupportCenterCta {...params} />,
  },
  {
    path: '/blocks/cta/cta-with-input-field',
    renderer: (params = {}) => <CtaWithInputField {...params} />,
  },
  {
    path: '/blocks/cta/cta-with-cover-image',
    renderer: (params = {}) => <CtaWithCoverImage {...params} />,
  },
  {
    path: '/blocks/cta/cta-with-right-download-button',
    renderer: (params = {}) => <CtaWithRightDownloadButton {...params} />,
  },
  {
    path: '/blocks/cta/cta-with-app-store-buttons',
    renderer: (params = {}) => <CtaWithAppStoreButtons {...params} />,
  },
  {
    path: '/blocks/cta/cta-with-illustration',
    renderer: (params = {}) => <CtaWithIllustration {...params} />,
  },
  {
    path: '/blocks/cta/cta-with-right-app-store-buttons',
    renderer: (params = {}) => <CtaWithRightAppStoreButtons {...params} />,
  },
];

export default routes;
