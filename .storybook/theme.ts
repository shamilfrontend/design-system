import { create } from 'storybook/theming/create';
import logo from '../.readme-assets/qui-logo.svg';

export default create({
  name: 'Theme',
  base: 'light',

  colorPrimary: '#7367f0',
  colorSecondary: '#7367f0',

  appBg: '#f8f7fa',
  appContentBg: '#ffffff',
  appBorderColor: '#ebe9f1',
  appBorderRadius: 6,

  barTextColor: '#6e6b7b',
  barSelectedColor: '#7367f0',
  barBg: '#ffffff',

  textColor: '#5e5873',

  brandTitle: 'QUI-MAX',
  brandUrl: 'https://qui-max.netlify.app',
  brandImage: logo
});
