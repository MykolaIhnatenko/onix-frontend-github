import PageContainer from 'components/PageContainer/PageContainer';
import Card from './Card';
import IFourCardsTable from './interfaces/IFourCardsTable';
import VRARMainTitle from 'components/VRARMainTitle/VRARMainTitle';
import ImageComponent from 'components/Image/Image';

// import TableBg from '@/images/fourCardsTable/img_whiteBg.webp';
// import TableBgXXXL from '@/images/fourCardsTable/img_whiteBgXXXL.webp';
// import TableBgTablet from '@/images/fourCardsTable/img_whiteBgTablet.webp';
// import TableBgMobile from '@/images/fourCardsTable/img_whiteBgMobile.webp';

function FourCardsTable({
  title, background, cardsData, themeBlack, classes,
}: IFourCardsTable) {
  return (
    <section className={`relative ${themeBlack ? 'text-color-white bg-color-black' : ''} ${classes?.section || ''}`}>
      {background && (
        <div className={`
            absolute w-full top-0 left-0 h-[528px] screen-lg:h-[480px] screen-md:h-[431px]
            after:content-[""] after:absolute after:bottom-0 after:left-0
            after:w-full after:h-[70px] after:bg-gradient-to-b from-transparent to-color-white
            ${themeBlack ? 'to-color-black h-[464px] screen-lg:h-[424px] screen-md:h-[361px]' : ''}
          `}
        >
          <ImageComponent
            src={background}
            alt="background"
            sizes="100vw"
            quality={93}
            fill
            className="w-full h-full object-left-top object-cover"
          />
        </div>
      )}
      <PageContainer className={`relative py-[120px] screen-lg:py-[80px] ${classes?.container || ''}`}>
        <VRARMainTitle
          title={title}
          classes={{
            title: classes?.title,
          }}
        />
        <div className={`
            grid grid-cols-2 grid-rows-2 screen-lg:grid-cols-1 screen-lg:grid-rows-none
            mt-[80px] screen-lg:mt-[60px] screen-md:mt-[40px]
            ${classes?.cards || ''}
          `}
        >
          {cardsData.map(({ title: cardTitle, desc, number }, i) => {
            const isLeft = i % 2 === 0;
            const isTopRow = i < 2;
            const isLast = i === 3;

            return (
              <Card
                key={number}
                title={cardTitle}
                desc={desc}
                number={number}
                classes={{
                  ...classes,
                  card: `
                    ${isLeft ? 'min-lg:border-r-0' : ''} ${isTopRow ? 'min-lg:border-b-0' : ''}
                    ${isLast ? 'screen-lg:!border-b-2' : 'screen-lg:border-b-0'}
                    ${themeBlack ? 'border-color-white' : ''}
                    ${classes?.card || ''}`,
                }}
              />
            );
          })}
        </div>
      </PageContainer>
    </section>
  );
}

export default FourCardsTable;
