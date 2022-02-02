import React from 'react';

import { IndexView, Home, Customers, HireUs, Faq, Agency, CareerListing, CareerListingMinimal, CareerOpening, ContactPage, Coworking, Elearning, Enterprise, Service, WebBasic, DesktopApp, Expo, Startup, DesignCompany, MobileApp, JobListing, Rental, CloudHosting, Logistics, Ecommerce, Pricing, About, HelpCenter, HelpCenterArticle, PortfolioPage, PortfolioMasonry, PortfolioGrid, CompanyTerms, ContactPageSidebarMap, ContactPageCover, AboutSideCover, BlogSearch, BlogNewsroom, BlogArticle, BlogReachView, PasswordResetCover, PasswordResetSimple, SigninSimple, SigninCover, SignupSimple, SignupCover, AccountBilling, AccountGeneral, AccountNotifications, AccountSecurity, NotFound, NotFoundCover } from 'views';

const routes = [
  {
    path: '/',
    renderer: (params = {}) => <IndexView {...params} />,
  },
  {
    path: '/home',
    renderer: (params = {}) => <Home {...params} />,
  },
  {
    path: '/customers',
    renderer: (params = {}) => <Customers {...params} />,
  },
  {
    path: '/hire-us',
    renderer: (params = {}) => <HireUs {...params} />,
  },
  {
    path: '/faq',
    renderer: (params = {}) => <Faq {...params} />,
  },
  {
    path: '/career-listing',
    renderer: (params = {}) => <CareerListing {...params} />,
  },
  {
    path: '/career-listing-minimal',
    renderer: (params = {}) => <CareerListingMinimal {...params} />,
  },
  {
    path: '/career-opening',
    renderer: (params = {}) => <CareerOpening {...params} />,
  },
  {
    path: '/contact-page',
    renderer: (params = {}) => <ContactPage {...params} />,
  },
  {
    path: '/coworking',
    renderer: (params = {}) => <Coworking {...params} />,
  },
  {
    path: '/e-learning',
    renderer: (params = {}) => <Elearning {...params} />,
  },
  {
    path: '/enterprise',
    renderer: (params = {}) => <Enterprise {...params} />,
  },
  {
    path: '/service',
    renderer: (params = {}) => <Service {...params} />,
  },
  {
    path: '/web-basic',
    renderer: (params = {}) => <WebBasic {...params} />,
  },
  {
    path: '/desktop-app',
    renderer: (params = {}) => <DesktopApp {...params} />,
  },
  {
    path: '/expo',
    renderer: (params = {}) => <Expo {...params} />,
  },
  {
    path: '/agency',
    renderer: (params = {}) => <Agency {...params} />,
  },
  {
    path: '/startup',
    renderer: (params = {}) => <Startup {...params} />,
  },
  {
    path: '/design-company',
    renderer: (params = {}) => <DesignCompany {...params} />,
  },
  {
    path: '/mobile-app',
    renderer: (params = {}) => <MobileApp {...params} />,
  },
  {
    path: '/job-listing',
    renderer: (params = {}) => <JobListing {...params} />,
  },
  {
    path: '/rental',
    renderer: (params = {}) => <Rental {...params} />,
  },
  {
    path: '/cloud-hosting',
    renderer: (params = {}) => <CloudHosting {...params} />,
  },
  {
    path: '/logistics',
    renderer: (params = {}) => <Logistics {...params} />,
  },
  {
    path: '/e-commerce',
    renderer: (params = {}) => <Ecommerce {...params} />,
  },
  {
    path: '/help-center',
    renderer: (params = {}) => <HelpCenter {...params} />,
  },
  {
    path: '/help-center-article',
    renderer: (params = {}) => <HelpCenterArticle {...params} />,
  },
  {
    path: '/portfolio-page',
    renderer: (params = {}) => <PortfolioPage {...params} />,
  },
  {
    path: '/portfolio-masonry',
    renderer: (params = {}) => <PortfolioMasonry {...params} />,
  },
  {
    path: '/portfolio-grid',
    renderer: (params = {}) => <PortfolioGrid {...params} />,
  },
  {
    path: '/company-terms',
    renderer: (params = {}) => <CompanyTerms {...params} />,
  },
  {
    path: '/contact-sidebar-map',
    renderer: (params = {}) => <ContactPageSidebarMap {...params} />,
  },
  {
    path: '/contact-page-cover',
    renderer: (params = {}) => <ContactPageCover {...params} />,
  },
  {
    path: '/about',
    renderer: (params = {}) => <About {...params} />,
  },
  {
    path: '/about-side-cover',
    renderer: (params = {}) => <AboutSideCover {...params} />,
  },
  {
    path: '/pricing',
    renderer: (params = {}) => <Pricing {...params} />,
  },
  {
    path: '/blog-search',
    renderer: (params = {}) => <BlogSearch {...params} />,
  },
  {
    path: '/blog-newsroom',
    renderer: (params = {}) => <BlogNewsroom {...params} />,
  },
  {
    path: '/blog-article',
    renderer: (params = {}) => <BlogArticle {...params} />,
  },
  {
    path: '/blog-reach-view',
    renderer: (params = {}) => <BlogReachView {...params} />,
  },
  {
    path: '/password-reset-cover',
    renderer: (params = {}) => <PasswordResetCover {...params} />,
  },
  {
    path: '/password-reset-simple',
    renderer: (params = {}) => <PasswordResetSimple {...params} />,
  },
  {
    path: '/signin-simple',
    renderer: (params = {}) => <SigninSimple {...params} />,
  },
  {
    path: '/signin-cover',
    renderer: (params = {}) => <SigninCover {...params} />,
  },
  {
    path: '/signup-simple',
    renderer: (params = {}) => <SignupSimple {...params} />,
  },
  {
    path: '/signup-cover',
    renderer: (params = {}) => <SignupCover {...params} />,
  },
  {
    path: '/account-billing',
    renderer: (params = {}) => <AccountBilling {...params} />,
  },
  {
    path: '/account-general',
    renderer: (params = {}) => <AccountGeneral {...params} />,
  },
  {
    path: '/account-notifications',
    renderer: (params = {}) => <AccountNotifications {...params} />,
  },
  {
    path: '/account-security',
    renderer: (params = {}) => <AccountSecurity {...params} />,
  },
  {
    path: '/not-found',
    renderer: (params = {}) => <NotFound {...params} />,
  },
  {
    path: '/not-found-cover',
    renderer: (params = {}) => <NotFoundCover {...params} />,
  },
];

export default routes;
