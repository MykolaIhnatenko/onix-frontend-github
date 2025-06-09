import { IAccreditationsBlockItem } from '../interfaces/IAccreditationsBlock';
import ImageComponent from '../../Image/Image';
import MainTitleWithoutSize from 'components/MainTitleWithoutSize/MainTitleWithoutSize';

function AccreditationsBlockItem({ img, title }: IAccreditationsBlockItem) {
  return (
    <div className="w-[300px] mx-auto flex flex-col screen-sm:w-auto screen-sm:max-w-[300px]">
      <ImageComponent
        className="mx-auto w-[200px] h-[200px] screen-md:w-[160px] screen-md:h-[160px]"
        src={img}
        alt="image"
      />
      <MainTitleWithoutSize
        tag="p"
        className="pt-[15px] mx-auto text-center text-[24px] leading-[34px]
        screen-md:text-[20px] screen-md:leading-[28px]"
      >
        {title}
      </MainTitleWithoutSize>
    </div>
  );
}

export default AccreditationsBlockItem;
