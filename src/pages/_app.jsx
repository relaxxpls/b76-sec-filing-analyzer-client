import { ConfigProvider } from 'antd';
import { RecoilRoot } from 'recoil';

import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => (
  <RecoilRoot>
    <Component {...pageProps} />
  </RecoilRoot>
);

export default MyApp;

ConfigProvider.config({
  theme: {
    primaryColor: '#5d5ff0',
    linkColor: '#5d5ff0',
    successColor: '#26c69a',
    warningColor: '#fac41b',
    errorColor: '#fd5371',
  },
});

// @component-background: #303030;
// @body-background: #303030;
// @popover-background: #303030;
// @border-color-base: #6f6c6c;
// @border-color-split: #424242;
// @table-header-sort-active-bg: #424242;
// @card-skeleton-bg: #424242;
// @skeleton-color: #424242;
// @table-header-sort-active-bg: #424242;
