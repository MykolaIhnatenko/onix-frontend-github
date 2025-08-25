import React from 'react';

import MainTitle from '../../../components/MainTitle/MainTitle';
import PageContainer from '../../../components/PageContainer/PageContainer';
import ImageComponent from '../../../components/Image/Image';
import { IBenefitsSectionProps } from '../interfaces/IBenefitsSection';

import styles from '../sass/benefitsSection.module.scss';

function BenefitsSection({
  data, title, background, classes,
}: IBenefitsSectionProps) {
  return (
    <section className={`relative bg-black ${classes?.section || ''}`}>
      {background && (
        <div
          className={`absolute top-0 left-0 h-[608px] w-full screen-lg:h-[520px]
          screen-md:h-[302px] ${classes?.background || ''}`}
        >
          <ImageComponent
            className="object-cover"
            src={background}
            alt="background"
            fill
            sizes="100vw"
          />
        </div>
      )}
      <PageContainer
        className={`relative p-[80px_70px] min-xxxl:p-[80px_80px] screen-xl:p-[80px_40px]
        screen-lg:p-[80px_30px] screen-md:p-[80px_0_0] ${classes?.container || ''}`}
      >
        <MainTitle
          className={`text-white text-[50px] leading-[64px] w-[583px] mb-[40px] screen-lg:text-[40px]
          screen-lg:leading-[56px] screen-lg:w-full screen-md:w-fit screen-md:ml-[15px]
          screen-md:mr-[15px] screen-md:text-[25px] screen-md:leading-[35px] ${classes?.title || ''}`}
        >
          {title}
        </MainTitle>
        <div
          className={`grid gap-[30px] grid-cols-2 [grid-template-areas:"first_fourth""second_fifth""third_sixth"]
            screen-lg:flex screen-lg:flex-col screen-lg:gap-[20px]
            screen-md:gap-[15px] ${styles.cardsBlock} ${classes?.cardsBlock || ''}`}
        >
          {data.map(({ id, content }) => (
            <React.Fragment key={id}>{content}</React.Fragment>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}

export default BenefitsSection;
