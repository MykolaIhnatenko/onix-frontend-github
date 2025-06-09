import MainTitle from '../../MainTitle/MainTitle';
import ContentText from '../../ContentText/ContentText';
import useBackground from '../../../hook/useBackground';
import ImageComponent from '../../Image/Image';
import { ITransparentCard } from '../interfaces/ITransparentCard';

function TransparentCard({
  bg, bgTablet, bgMobile, icon, title, subTitle, text, classes,
}: ITransparentCard) {
  const background = useBackground(
    bg,
    bgTablet,
    bgMobile,
  );

  return (
    <div className={`
        flex-1 relative p-[30px_30px_40px] border-[1px] border-solid border-[#D9D9D94D]
        bg-[#FFFFFF0D] screen-md:p-[20px] group
        ${classes?.card || ''}
      `}
    >
      {background && (
        <ImageComponent
          src={background}
          fill
          alt="card-background"
          className="object-cover group-first:object-top group-last:object-bottom"
          sizes="100vw"
          quality={95}
        />
      )}
      {icon && (
        <div className="w-[80px] h-[80px] mb-[30px] relative screen-md:w-[60px] screen-md:h-[60px]">
          {icon}
        </div>
      )}
      {title && (
        <MainTitle
          tag="h3"
          className={`
            relative mb-[30px] !text-[30px]/[40px] screen-md:!text-[20px]/[28px] screen-md:mb-[20px]
            ${classes?.cardTitle || ''}
          `}
        >
          {title}
        </MainTitle>
      )}
      {subTitle && (
        <MainTitle
          tag="p"
          className={`
            relative mb-[30px] !text-[20px]/[28px] screen-md:!text-[16px]/[24px] screen-md:mb-[20px]
            ${classes?.cardSubTitle || ''}
          `}
        >
          {subTitle}
        </MainTitle>
      )}
      {typeof text === 'string' ? (
        <ContentText
          tag="p"
          marginAbsent
          className={`relative screen-md:text-[14px]/[20px] ${classes?.cardText || ''}`}
        >
          {text}
        </ContentText>
      ) : (text)}
    </div>
  );
}

export default TransparentCard;
