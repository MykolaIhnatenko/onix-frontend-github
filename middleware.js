/* eslint-disable max-len */
import { NextResponse } from 'next/server';

import getSingleRedirect from './src/api/getSingleRedirect';
import isEmpty from './src/utils/isEmpty';

const validateUrl = (url) => url.toLowerCase()
  .replace(/%2f/g, '%2F')
  .replace(/%3a/g, '%3A');

const baseRedirectBody = {
  status: 301,
  headers: {
    'Content-Type': 'text/html; charset=utf-8',
    'Cache-Control': 'No-Cache',
  },
};

const wrongCharacters = ['&', '+'];

const customRedirect = (url, params = baseRedirectBody) => NextResponse.redirect(url, params);

const middleware = async (request) => {
  const pathname = request?.nextUrl?.pathname;

  const response = NextResponse.next();
  response.headers.set(
    'Content-Security-Policy',
    "default-src 'self'; "
    + "connect-src 'self' https: blob: wss://ws.hotjar.com; "
    + "script-src 'self' 'unsafe-inline' 'unsafe-eval' *.tinymce.com *.tiny.cloud cdn-cookieyes.com *.googletagmanager.com *.clutch.co *.pipedrive.com https://cdn.onix-systems.com www.google.com www.gstatic.com https://widget.clutch.co https://assets.mailerlite.com https://groot.mailerlite.com https://assets.mlcdn.com https://www.google-analytics.com https://app.convertful.com https://sc.lfeeder.com https://static.hotjar.com https://6629377.adoric-om.com https://script.hotjar.com https://www.clarity.ms; "
    + "script-src-elem 'self' 'unsafe-inline' 'unsafe-eval' *.tinymce.com *.tiny.cloud cdn-cookieyes.com *.googletagmanager.com *.clutch.co *.pipedrive.com https://cdn.onix-systems.com www.google.com www.gstatic.com https://widget.clutch.co https://assets.mailerlite.com https://groot.mailerlite.com https://assets.mlcdn.com https://www.google-analytics.com https://app.convertful.com https://sc.lfeeder.com https://static.hotjar.com https://6629377.adoric-om.com https://script.hotjar.com https://www.clarity.ms; "
    + "style-src 'self' 'unsafe-inline' https://cdn.onix-systems.com https://assets.mailerlite.com https://assets.mlcdn.com https://fonts.mailerlite.com https://static.adoric.com; "
    + "style-src-elem 'self' 'unsafe-inline' https://cdn.onix-systems.com https://assets.mailerlite.com https://assets.mlcdn.com https://fonts.mailerlite.com https://static.adoric.com; "
    + "font-src 'self' data: https://leadbooster-chat.pipedrive.com https://cdn.onix-systems.com https://fonts.mailerlite.com; "
    + "img-src 'self' *.tinymce.com *.tiny.cloud data: blob: *.onix-systems.com onix-systems.com onix-systems-onix-admin.dev.onix.team www.googletagmanager.com cdn-cookieyes.com tr-rc.lfeeder.com www.google.com.ua www.google-analytics.com https://assets.mailerlite.com https://storage.mlcdn.com; "
    + "media-src 'self' *.tinymce.com *.tiny.cloud data: blob: *.onix-systems.com onix-systems.com; "
    + "frame-src 'self' *.youtube.com *.vimeo.com widget.clutch.co www.google.com www.gstatic.com https://my.spline.design https://td.doubleclick.net https://assets.mailerlite.com https://static.hotjar.com https://adoric-om.com; ",
  );
  response.headers.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');
  response.headers.set('X-Frame-Options', 'SAMEORIGIN');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'no-referrer');
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');

  if (pathname?.includes('/api/v2/file')) {
    const url = request.nextUrl.clone();
    return customRedirect(url.origin);
  }
  if (pathname?.includes('/uploads')) {
    const url = `${process.env.NEXT_PUBLIC_BACKEND}${pathname}`;
    return customRedirect(url);
  }
  if (!pathname?.includes('/static/') && !pathname?.includes('/_next/') && pathname !== '/') {
    const search = request?.nextUrl?.search;
    const url = request.nextUrl.clone();
    const validatePath = validateUrl(pathname);
    if (search) {
      let fullUrl = `${pathname}${search}`;

      wrongCharacters.forEach((item) => {
        fullUrl = fullUrl.replaceAll(item, '');
      });

      const redirectFullPath = await getSingleRedirect(fullUrl);
      const urlWithSearch = request.nextUrl.clone();
      if (redirectFullPath.attributes) {
        const { redirectToUrl } = redirectFullPath.attributes;
        urlWithSearch.pathname = redirectToUrl;
        urlWithSearch.search = '';
        return customRedirect(urlWithSearch);
      }
    }

    const redirectPath = await getSingleRedirect(validatePath);
    if ((redirectPath && !isEmpty(redirectPath)) || validatePath !== pathname) {
      const { attributes: { redirectToUrl } = {} } = redirectPath || {};
      url.pathname = redirectToUrl || validatePath;
      return customRedirect(url);
    }
  }

  return response;
};

export default middleware;
