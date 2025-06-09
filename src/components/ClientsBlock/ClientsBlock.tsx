import BrandsBlock from '../BrandsBlock/BrandsBlock';
import ContentText from '../ContentText/ContentText';
import MainTitle from '../MainTitle/MainTitle';
import PageContainer from '../PageContainer/PageContainer';
import IClientsBlock from './interfaces/IClientsBlock';

function ClientsBlock({
  title, mainTitle, classes,
}: IClientsBlock) {
  return (
    <div className={`overflow-hidden relative ${classes?.clientsSection ?? ''}`}>
      <PageContainer className={`relative z-[1] pt-[80px] !pr-10 !pl-10 
        screen-lg:!pr-[30px] screen-lg:!pl-[30px] screen-lg:pt-5
        screen-md:pt-[5px] screen-md:pb-0 screen-md:!pl-[15px] screen-md:!pr-[15px] ${classes?.container ?? ''}`}
      >
        <ContentText
          tag="p"
          className={`pl-10 screen-xxxl:pl-[30px] !mt-0 !mb-0 !mr-0 !ml-0 screen-lg:!pl-0
            ${classes?.title ?? ''}`}
        >
          {title}
        </ContentText>
        <MainTitle
          tag="h2"
          className={`pl-10 screen-xxxl:pl-[30px] pt-5 screen-md:pt-[15px] screen-xxl:!max-w-[1100px]
            screen-lg:!pl-0 !pb-[80px] ${classes?.subtitle ?? ''}`}
        >
          {mainTitle}
        </MainTitle>
        <BrandsBlock />
      </PageContainer>
    </div>
  );
}

export default ClientsBlock;
