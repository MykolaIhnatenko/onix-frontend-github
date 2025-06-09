import {
  Lato,
} from 'next/font/google';

const latoFont = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--latoFont',
  display: 'swap',
});

export default latoFont;
