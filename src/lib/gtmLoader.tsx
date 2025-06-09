function GTMNoScriptLoader() {
  const params = {
    id: `${process.env.NEXT_PUBLIC_GTM_ID || ''}`,
    gtm_auth: `${process.env.NEXT_PUBLIC_GTM_AUTH || ''}`,
    gtm_preview: `${process.env.NEXT_PUBLIC_GTM_PREVIEW || ''}`,
    gtm_cookies_win: 'x',
  };

  const queryString = Object.keys(params).map((key) => `${key}=${params[key as keyof typeof params]}`).join('&');
  const src = `"https://www.googletagmanager.com/ns.html?${queryString}"`;

  return (
    <noscript
      key="googletagmanager"
      dangerouslySetInnerHTML={{
        __html: `<iframe src=${src} height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
      }}
    />
  );
}

export default GTMNoScriptLoader;
