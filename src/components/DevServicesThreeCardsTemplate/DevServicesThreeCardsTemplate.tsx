import PageContainer from '../PageContainer/PageContainer';
import IDevServicesThreeCardsTemplate from './interfaces/IDevServicesThreeCardsTemplate';
import VRARContent from 'components/VRARContent/VRARContent';
import ContentText from 'components/ContentText/ContentText';
import DevServicesCard from 'components/DevServicesCard/DevServicesCard';
import MainTitle from 'components/MainTitle/MainTitle';

function DevServicesThreeCardsTemplate({
  title, text, data,
}: IDevServicesThreeCardsTemplate) {
  return (
    <PageContainer className="text-white">
      <VRARContent>
        <MainTitle
          className="max-w-[1480px] pb-[40px] screen-xxxl:max-w-[1080px] screen-lg:max-w-full"
        >
          {title}
        </MainTitle>
      </VRARContent>
      {text && (
        <VRARContent>
          <ContentText
            marginAbsent
            tag="p"
            className="max-w-[1480px] screen-xxxl:max-w-[1080px] screen-lg:max-w-full"
          >
            {text}
          </ContentText>
        </VRARContent>
      )}
      <div
        className={`flex justify-between gap-[80px] mt-[40px] screen-lg:!flex-col
        screen-lg:gap-[40px] screen-lg:mt-0 screen-md:gap-[20px]`}
      >
        {data.map(({
          id, text: cardText, icon,
        }) => (
          <DevServicesCard
            key={id}
            icon={icon}
            text={cardText}
          />
        ))}
      </div>
    </PageContainer>
  );
}

export default DevServicesThreeCardsTemplate;
