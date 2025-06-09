import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';
import Script from 'next/script';

import GTMNoScriptLoader from '../src/lib/gtmLoader';

class MyDocument extends Document {
  render() {
    const auth = process.env.NEXT_PUBLIC_GTM_AUTH || '';
    const preview = process.env.NEXT_PUBLIC_GTM_PREVIEW || '';
    const gtmId = process.env.NEXT_PUBLIC_GTM_ID || '';

    return (
      <Html lang="en-US" prefix="og: http://ogp.me/ns#">
        <Head>
          <Script
            id="gtm_cookies"
            strategy="lazyOnload"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag() { dataLayer.push(arguments); }
                gtag('consent', 'default', {
                'ad_storage': 'granted',
                'personalization_storage': 'granted',
                'analytics_storage': 'granted',
                'ad_user_data': 'granted',
                'ad_personalization': 'granted',
                'functionality_storage': 'granted',
                'security_storage': 'granted'
              });`,
            }}
          />
          <Script
            id="gtm_script"
            strategy="lazyOnload"
            defer
            dangerouslySetInnerHTML={{
              __html: `
                  (function(w,d,s,l,i){
                    w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
                    var f=d.getElementsByTagName(s)[0], j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:'';
                    j.async=true; j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl+ '&gtm_auth=${auth}'
                    + '&gtm_preview=${preview}&gtm_cookies_win=x';
                    if (f && f.parentNode) {
                      f.parentNode.insertBefore(j, f);
                    } else {
                      console.error("Script gtm_script not found.");
                    }
                  })(window,document,'script','dataLayer','${gtmId}');
              `,
            }}
          />
        </Head>
        <body>
          <GTMNoScriptLoader />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
