import {
  Open_Sans as OpenSans,
} from 'next/font/google';

const openSans = OpenSans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--openSans',
  preload: true,
  display: 'swap',
});

export default openSans;
