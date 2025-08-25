import Icons from '../../../assets/icon';

const iconStyle = 'w-[24px] h-[24px] screen-md:w-[16px] screen-md:h-[16px]';

const blogAiBtns = [
  {
    title: 'ChatGPT',
    url: 'https://chat.openai.com/?q=',
    style: 'bg-[#0F9B79] before:bg-[#10A37F]',
    icon: <Icons.IconChatGPT className={iconStyle} />,
  },
  {
    title: 'Perplexity',
    url: 'https://www.perplexity.ai/search?q=',
    style: 'bg-[#6441B1] before:bg-[#6944BA]',
    icon: <Icons.IconPerplexity className={iconStyle} />,
  },
  {
    title: 'Claude',
    url: 'https://claude.ai/new?q=',
    style: 'bg-[#CE7153] before:bg-[#D97757]',
    icon: <Icons.IconClaude className={iconStyle} />,
  },
  {
    title: 'Grok',
    url: 'https://x.com/i/grok?text=',
    style: 'bg-[#1A1A1A] before:bg-[#000000]',
    icon: <Icons.IconGrok className={iconStyle} />,
  },
  {
    title: 'Google AI Mode',
    url: 'https://www.google.com/search?udm=50&aep=11&q=',
    style: 'bg-[#F2F2F2] before:bg-[#FFFFFF] !text-black !border-[2px] !border-black py-[6px] screen-md:py-[1px]',
    icon: <Icons.IconGoogleAi className={iconStyle} />,
  },
];

export default blogAiBtns;
