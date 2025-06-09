import {
  Mulish,
} from 'next/font/google';

const mulishFont = Mulish({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--mulishFont',
  display: 'swap',
});

export default mulishFont;
