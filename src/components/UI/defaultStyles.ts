const defaultStyles = {
  container: `
    relative w-full p-[16px_10px] overflow-hidden border-none cursor-pointer screen-lg:cursor-default
    transition-transform active:scale-[0.98] active:before:hidden group/button

    hover:before:scale-x-0 hover:before:origin-left
    before:absolute before:top-0 before:left-0 before:w-full before:h-full
    before:transition-transform before:duration-[.3s] before:ease-linear before:origin-right
  `,
  disabled: 'pointer-events-none before:relative !bg-[#EAEAEF]',
  disabledText: '!text-[#999] !mix-blend-normal',
  fontSizeSmallOnMobile: 'screen-md:!text-[16px]/[24px]',
  content: `
    flex items-center justify-center relative group-hover/button:text-color-black group-hover/button:button-animation
  `,
  text: '!font-ibmPlexMono font-medium text-[18px]/[24px] uppercase',
};

export default defaultStyles;
