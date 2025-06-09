import IContentText from './interfaces/IContentText';

function ContentText({
  children, className, marginAbsent = false, tag: Tag = 'span', styleItems,
}: IContentText) {
  return (
    <div
      className={`
        font-ibmPlexMono font-normal text-[18px]/[26px] my-[40px] screen-md:text-[16px]/[24px]
        ${marginAbsent ? '!m-0' : ''} ${className || ''}
      `}
      style={styleItems}
    >
      <Tag>
        {children}
      </Tag>
    </div>
  );
}

export default ContentText;
