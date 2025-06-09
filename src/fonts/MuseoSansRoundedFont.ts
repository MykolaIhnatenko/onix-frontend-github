import localFont from 'next/font/local';

const museoSansRoundedFont = localFont({
  src: [
    {
      path: 'MuseoSansRounded/MuseoSansRounded300.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: 'MuseoSansRounded/MuseoSansRounded500.woff2',
      weight: '500',
      style: 'normal',
    },
  ],
  variable: '--museoSansRoundedFont',
  display: 'swap',
});

export default museoSansRoundedFont;
