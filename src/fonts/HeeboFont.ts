import {
  Heebo,
} from 'next/font/google';

const heeboFont = Heebo({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--heeboFont',
  display: 'swap',
});

export default heeboFont;
