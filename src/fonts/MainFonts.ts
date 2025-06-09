import {
  Mukta_Vaani as MuktaVaani,
} from 'next/font/google';
import localFont from 'next/font/local';

export const generalSans = localFont({
  src: [
    {
      path: 'GeneralSans/GeneralSansRegular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: 'GeneralSans/GeneralSansMedium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: 'GeneralSans/GeneralSans-Semibold.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--generalSans',
  preload: true,
  display: 'swap',
});

export const ibmPlexMono = localFont({
  src: [
    {
      path: 'IbmPlexMono/IBMPlexMono-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: 'IbmPlexMono/IBMPlexMono-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
  ],
  variable: '--ibmPlexMono',
  preload: true,
  display: 'swap',
});

export const muktaVaaniFont = MuktaVaani({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  variable: '--muktaVaani',
  preload: true,
  display: 'swap',
});
