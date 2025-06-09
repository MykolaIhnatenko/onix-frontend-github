import Icons from '../../../assets/icon';

const challengeCards = [
  {
    id: 0,
    iconSrc: <Icons.IconBracketologyChallenge1 />,
    title: 'Cost',
    content: 'AWS charges customers only for what they use, and with larger applications and infrastructure, '
            + 'it quickly becomes a more affordable option. AWS also offers tools and services for cost optimization '
            + 'and control.',
  },
  {
    id: 1,
    iconSrc: <Icons.IconBracketologyChallenge2 />,
    title: 'Location',
    content: 'The AWS cloud covers more access zones than Heroku and expands its AWS regions – '
            + 'exactly what a growing fantasy gaming platform needs.',
  },
  {
    id: 2,
    iconSrc: <Icons.IconBracketologyChallenge3 />,
    title: 'Performance',
    content: 'AWS’s virtual server instances come in a wide variety of CPU and memory configurations, '
            + 'have full root access, and offer better performance than Heroku.',
  },
  {
    id: 3,
    iconSrc: <Icons.IconBracketologyChallenge4 />,
    title: 'Convenience',
    content: 'It’s preferable if the client wants to host other cloud services on AWS and keep everything in '
            + 'one place.',
  },
];

export default challengeCards;
