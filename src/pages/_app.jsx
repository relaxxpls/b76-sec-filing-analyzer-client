import { RecoilRoot } from 'recoil';

import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => (
  <RecoilRoot>
    <Component {...pageProps} />
  </RecoilRoot>
);

export default MyApp;
