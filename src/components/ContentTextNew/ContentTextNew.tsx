import IContentTextNew from './interfaces/IContentTextNew';

function ContentTextNew({
  text,
  tag: Tag = 'p',
  smallFontSizeOnMobile,
  className,
}: IContentTextNew) {
  return (
    <Tag
      className={`
        font-ibmPlexMono font-normal text-[18px]/[26px] screen-md:text-[16px]/[24px]
        ${smallFontSizeOnMobile ? 'screen-md:!text-[14px]/[20px]' : ''}
        ${className || ''}
      `}
    >
      {text}
    </Tag>
  );
}

export default ContentTextNew;
