import {
  Inter,
} from 'next/font/google';

const interFont = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--interFont',
  display: 'swap',
});

export default interFont;
