import React from 'react';

// Building blocks progressSteps components
import { IndexView, LinearSteps, WithNumbersOnly, VerticalStepper } from 'blocks/progressSteps';

const routes = [
  {
    path: '/blocks/progress-steps',
    renderer: (params = {}) => <IndexView {...params} />,
  },
  {
    path: '/blocks/progress-steps/linear-steps',
    renderer: (params = {}) => <LinearSteps {...params} />,
  },
  {
    path: '/blocks/progress-steps/with-numbers-only',
    renderer: (params = {}) => <WithNumbersOnly {...params} />,
  },
  {
    path: '/blocks/progress-steps/vertical-stepper',
    renderer: (params = {}) => <VerticalStepper {...params} />,
  },
];

export default routes;
