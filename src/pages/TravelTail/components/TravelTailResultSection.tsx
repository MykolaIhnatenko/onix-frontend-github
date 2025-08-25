import PageContainer from '../../../components/PageContainer/PageContainer';
import MainTitle from '../../../components/MainTitle/MainTitle';
import ContentText from '../../../components/ContentText/ContentText';
import useBackground from '../../../hook/useBackground';
import ImageComponent from '../../../components/Image/Image';
import resultData from '../data/resultData';
import BorderedNumberCard from '../../../components/CasesComponents/BorderedNumberCard/BorderedNumberCard';

import TravelTailResultBg from '@/images/travelTail/resultSection/img_bg@2x.webp';
import TravelTailResultBgMobile from '@/images/travelTail/resultSection/img_bg_mobile@2x.webp';
import TravelTailResultBgTablet from '@/images/travelTail/resultSection/img_bg_tablet@2x.webp';
import styles from '../sass/travelTailResultSection.module.scss';

function TravelTailResultSection() {
  const bg = useBackground(
    TravelTailResultBg,
    TravelTailResultBgTablet,
    TravelTailResultBgMobile,
  );

  return (
    <section className={styles.resultSection}>
      <PageContainer className={styles.container}>
        <ContentText className={styles.results} tag="p">
          [ Results ]
        </ContentText>
        <MainTitle className={styles.title}>
          The Onix team successfully developed a pet-focused travel platform,
          addressing a longstanding gap in the travel industry.
        </MainTitle>
        <div className={styles.texts}>
          <ContentText className={styles.text} tag="p">
            TravelTail&apos;s journey from concept to execution has not only met the client&apos;s vision but has also
            established a new standard in the pet travel industry.
          </ContentText>
          <ContentText className={styles.text} tag="p">
            The Onix team&apos;s dedication to understanding and addressing the unique needs of pet owners has resulted
            in a groundbreaking platform that brings joy and convenience to pet-centric travel experiences.
          </ContentText>
        </div>
        <div className={styles.borderedCards}>
          {resultData.map(({ id, title, content }) => (
            <BorderedNumberCard
              key={id}
              id={id}
              title={title}
              tag="div"
              content={content}
              classesComponent={{
                container: 'border-2 border-color-black z-3 min-h-[424px] py-[30px] px-[40px] '
                + 'transition-all duration-1000 ease-in-out flex-[0_1_50%] '
                + 'group hover:bg-color-black '
                + '[&:nth-of-type(1)]:!border-r-0 '
                + 'screen-lg:[&:nth-of-type(1)]:!border-r-2 '
                + 'screen-lg:[&:nth-of-type(1)]:!border-b-0 screen-lg:hover:bg-transparent '
                + 'screen-lg:!px-[40px] screen-lg:!py-[40px] screen-lg:!min-h-[352px] screen-lg:last:!min-h-[424px] '
                + 'screen-md:!py-[20px] screen-md:!px-[20px] screen-md:!min-h-[352px] screen-lg:last:!min-h-[424px]',
                content: '',
                title: 'text-color-black group-hover:!text-color-white !text-[30px] !leading-[40px] pb-[30px] '
                + 'screen-lg:group-hover:!text-color-black screen-lg:!text-[30px] screen-lg:!leading-[39.9px] '
                + 'screen-md:!text-[20px] screen-md:!leading-[28px] screen-md:!pb-[20px] ',
                text: 'text-color-black group-hover:!text-color-white screen-lg:group-hover:!text-color-black '
                + 'screen-lg:!text-[24px] screen-lg:!leading-[34px] screen-md:!text-[16px] screen-md:!leading-[24px]',
                number: 'text-color-black !text-[30px] !leading-[40px] group-hover:!text-color-white '
                + 'screen-lg:group-hover:!text-color-black screen-lg:!text-[24px] screen-lg:!leading-[34px] '
                + 'screen-md:!text-[20px] screen-md:!leading-[28px]',
              }}
              tagTitle="p"
            />
          ))}
        </div>
      </PageContainer>
      <div className={styles.background}>
        {bg && (
          <ImageComponent
            src={bg}
            alt="Travel Tail Result Background"
            fill
            sizes="(max-width: 768px) 100vw, (min-width: 768px) 100vw"
          />
        )}
      </div>
    </section>
  );
}

export default TravelTailResultSection;
