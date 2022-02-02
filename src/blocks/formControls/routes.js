// Building blocks formControls components
import { CustomRadioGroup, CustomSelect, IndexView, StackedCustomRadioGroup, ToggleButton } from 'blocks/formControls';
import React from 'react';


const routes = [
  {
    path: '/blocks/form-controls',
    renderer: (params = {}) => <IndexView {...params} />,
  },
  {
    path: '/blocks/form-controls/custom-select',
    renderer: (params = {}) => <CustomSelect {...params} />,
  },
  {
    path: '/blocks/form-controls/stacked-custom-radio-group',
    renderer: (params = {}) => <StackedCustomRadioGroup {...params} />,
  },
  {
    path: '/blocks/form-controls/custom-radio-group',
    renderer: (params = {}) => <CustomRadioGroup {...params} />,
  },
  {
    path: '/blocks/form-controls/toggle-button',
    renderer: (params = {}) => <ToggleButton {...params} />,
  },
];

export default routes;
