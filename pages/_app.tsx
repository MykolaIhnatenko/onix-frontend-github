import { Provider } from 'react-redux';
import { useEffect, useState } from 'react';
import sbjs from 'sourcebuster';
import type { AppProps } from 'next/app';
import Script from 'next/script';
import { usePathname } from 'next/navigation';

import { useStore } from '../src/store/store';
import IPageProps from '../src/pages/App/interfaces/IPageProps';
import { checkSaleUrl } from 'utils/helpers';
import ChatBot from 'components/ChatBot/ChatBot';

import '../src/pages/App/sass/globals.scss';

function App({ Component, pageProps }: AppProps) {
  const { initialReduxState } = pageProps as IPageProps;
  const store = useStore(initialReduxState);
  const [cookies, setCookies] = useState(<> </>);
  const saleUrl = checkSaleUrl();
  const pathname = usePathname();
  const shouldDisableScripts = pathname === '/403';
  const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID || '';

  useEffect(() => {
    if (pathname === '/contact-us') return;

    const prevPage = sessionStorage.getItem('previousPage');
    if (prevPage !== pathname) {
      sessionStorage.setItem('previousPage', pathname);
    }
  }, [pathname]);

  useEffect(() => {
    sbjs.init();

    const timer = setTimeout(() => {
      setCookies(
        <Script
          id="cookieyes"
          strategy="afterInteractive"
          type="text/javascript"
          src="https://cdn-cookieyes.com/client_data/eb378c67432216b928b691c2/script.js"
        />,
      );
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
      {!(saleUrl || shouldDisableScripts) && (
        <>
          {cookies}
          <Script
            id="pipedrive_script"
            strategy="lazyOnload"
            dangerouslySetInnerHTML={{
              // eslint-disable-next-line max-len
              __html: 'window.pipedriveLeadboosterConfig = {base: \'leadbooster-chat.pipedrive.com\',companyId: 1153610,playbookUuid: \'56b84bef-16fa-4d33-a6b9-bac1b6ec268e\',version: 2};(function () {var w = window;if (w.LeadBooster) {console.warn(\'LeadBooster already exists\');} else {w.LeadBooster = {q: [],on: function (n, h) {this.q.push({ t: \'o\', n: n, h: h });},trigger: function (n) {this.q.push({ t: \'t\', n: n });},};}})();',
            }}
          />
          <Script
            id="clarity"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                if (typeof window.clarity === 'undefined') {
                  (function(c,l,a,r,i,t,y){
                    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                  })(window, document, "clarity", "script", '${clarityId}');
                }
              `,
            }}
          />
          <Script
            id="hotjar"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
              (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:6419610,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
            `,
            }}
          />
          <ChatBot />
        </>
      )}
    </Provider>
  );
}

export default App;
