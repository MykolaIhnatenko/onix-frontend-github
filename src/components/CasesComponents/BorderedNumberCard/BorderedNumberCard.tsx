import IBorderedNumberCard from './interfaces/IBorderedNumberCard';
import VRARContent from '../../VRARContent/VRARContent';
import MainTitle from '../../MainTitle/MainTitle';
import ContentText from '../../ContentText/ContentText';

function BorderedNumberCard({
  id, title, content, tag, tagTitle, classesComponent,
}: IBorderedNumberCard) {
  return (
    <div
      className={`flex flex-col justify-between ${classesComponent ? classesComponent.container : ''}`}
    >
      <div className={`${classesComponent ? classesComponent.content : ''}`}>
        <VRARContent>
          <MainTitle
            className={`font-[500] text-[36px] leading-[1.28] pb-[16px]
              screen-lg:text-[30px] screen-lg:leading-[1.33]
              screen-md:text-[18px] screen-md:leading-[1.44] 
              ${classesComponent ? classesComponent.title : ''}`}
            tag={tagTitle}
          >
            {title}
          </MainTitle>
        </VRARContent>
        <VRARContent>
          <ContentText
            className={`!mt-0 !mb-0 !ml-0 !mr-0 !text-[24px] !leading-[1.42]
              screen-lg:!text-[16px] screen-lg:!leading-[1.5]
              ${classesComponent ? classesComponent.text : ''}`}
            tag={tag}
          >
            {content}
          </ContentText>
        </VRARContent>
      </div>
      <VRARContent>
        <MainTitle
          className={`!font-[500] !text-[36px] !leading-[1.28]
            screen-lg:text-[30px] screen-lg:leading-[1.33] 
            ${classesComponent ? classesComponent.number : ''}`}
          tag="p"
        >
          {id}
        </MainTitle>
      </VRARContent>
    </div>
  );
}

export default BorderedNumberCard;
