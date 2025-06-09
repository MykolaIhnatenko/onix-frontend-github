import localFont from 'next/font/local';

const hobeauxFont = localFont({
  src: [
    {
      path: 'Hobeaux/Hobeaux-Bold.woff',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--hobeauxFont',
  display: 'swap',
});

export default hobeauxFont;
