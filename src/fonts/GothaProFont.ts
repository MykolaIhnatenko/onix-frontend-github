import localFont from 'next/font/local';

const gothaProFont = localFont({
  src: [
    {
      path: 'GothaPro/GothaPro300.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: 'GothaPro/GothaPro500.woff2',
      weight: '500',
      style: 'normal',
    },
  ],
  variable: '--gothaProFont',
  display: 'swap',
});

export default gothaProFont;
