import MainTitleWithoutSize from 'components/MainTitleWithoutSize/MainTitleWithoutSize';
import ContentText from '../../ContentText/ContentText';
import ImageComponent from '../../Image/Image';
import { ISecurityStandardsItem } from '../interfaces/ISecurityStandards';

function SecurityStandardsItem({
  icon, image, text, title, background,
}: ISecurityStandardsItem) {
  return (
    <div className="sticky bottom-[50px] w-[964px] h-[500px] mb-[80px]
      screen-xl:w-[808px] screen-lg:w-[708px] screen-lg:h-[500px]
      screen-md:w-full screen-md:h-auto"
    >
      <div className="absolute left-0 bottom-0 w-full h-full">
        <ImageComponent
          src={background}
          className="w-full h-full object-cover"
          alt="background"
        />
      </div>
      <div className="relative flex flex-row screen-md:flex-col-reverse">
        <div className="flex">
          <ImageComponent
            className="w-[330px] h-[500px] screen-md:mx-auto
              screen-sm:w-full screen-sm:object-cover"
            src={image}
            alt="image"
          />
        </div>
        <div className="p-[60px_70px_0_70px] screen-xl:p-[50px_50px_0_50px]
            screen-lg:p-[30px_30px_0_30px] screen-md:p-[30px_15px_20px_15px]"
        >
          <div>
            {icon}
          </div>
          <MainTitleWithoutSize
            tag="p"
            className="p-[30px_0] text-[30px] leading-[40px] screen-lg:p-[20px_0_30px]
              screen-lg:text-[24px] screen-lg:leading-[34px] screen-md:p-[30px_0_20px]"
          >
            {title}
          </MainTitleWithoutSize>
          <ContentText tag="p" className="!m-0 !text-[18px] !leading-[26px]">
            {text}
          </ContentText>
        </div>
      </div>
    </div>
  );
}

export default SecurityStandardsItem;
