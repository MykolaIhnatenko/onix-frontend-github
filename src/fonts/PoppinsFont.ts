import {
  Poppins,
} from 'next/font/google';

const poppinsFont = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--poppinsFont',
  display: 'swap',
});

export default poppinsFont;
