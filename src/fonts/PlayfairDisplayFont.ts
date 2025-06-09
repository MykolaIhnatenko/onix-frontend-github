import localFont from 'next/font/local';

const playfairDisplayFont = localFont({
  src: [
    {
      path: 'PlayfairDisplay/PlayfairDisplay-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: 'PlayfairDisplay/PlayfairDisplay-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: 'PlayfairDisplay/PlayfairDisplay-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--playfairDisplayFont',
  display: 'swap',
});

export default playfairDisplayFont;
