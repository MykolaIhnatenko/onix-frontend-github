import { Roboto } from 'next/font/google';

const robotoFont = Roboto({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--robotoFont',
  display: 'swap',
});

export default robotoFont;
