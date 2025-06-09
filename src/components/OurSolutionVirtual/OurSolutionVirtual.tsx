import MainTitle from '../MainTitle/MainTitle';
import PageContainer from '../PageContainer/PageContainer';
import OurSolutionVirtualItem from './coponents/OurSolutionVirtualItem';
import IOurSolutionVirtual from './interfaces/IOurSolutionVirtual';

function OurSolutionVirtual({
  title, data, smallDesktop = false, classes,
}: IOurSolutionVirtual) {
  return (
    <PageContainer tag="section" className={`py-[120px] screen-lg:py-[80px] ${classes?.section || ''}`}>
      <MainTitle className={`mb-[80px] screen-lg:mb-[60px] screen-md:mb-[40px] ${classes?.title || ''}`}>
        {title}
      </MainTitle>
      <div className={`
          flex flex-col gap-[70px] screen-lg:gap-[60px] screen-md:gap-[40px]
          ${classes?.contentContainer || ''}
        `}
      >
        {data.map(({
          id, img, imgTablet, imgMobile, title: titleCard, text,
        }) => (
          <OurSolutionVirtualItem
            key={id}
            smallDesktop={smallDesktop}
            img={img}
            imgTablet={imgTablet}
            imgMobile={imgMobile}
            title={titleCard}
            text={text}
          />
        )) }
      </div>
    </PageContainer>
  );
}

export default OurSolutionVirtual;
