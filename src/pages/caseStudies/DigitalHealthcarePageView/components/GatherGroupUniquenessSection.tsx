import { useSelector } from 'react-redux';
import { StaticImageData } from 'next/image';

import BorderedNumberCard from '../../../../components/CasesComponents/BorderedNumberCard/BorderedNumberCard';
import ImageComponent from '../../../../components/Image/Image';
import VRARContent from '../../../../components/VRARContent/VRARContent';
import MainTitle from '../../../../components/MainTitle/MainTitle';
import digitalHealthcareUniqueness from '../data/digitalHealthcareUniqueness';
import IStore from '../../../../store/interfaces/IStore';
import { IApp } from '../../../../store/app/interfaces/IApp';

import mainImg from '@/images/caseStudiesPage/DigitalHealthcareCaseStudy/uniquenessSection/img_bg@2x.webp';
import mainImgTablet from '@/images/caseStudiesPage/DigitalHealthcareCaseStudy/uniquenessSection/img_bg-tablet@2x.webp';
import mainImgMobile from '@/images/caseStudiesPage/DigitalHealthcareCaseStudy/uniquenessSection/img_bg-mobile@2x.webp';
import styles from '../sass/gatherGroupUniquenessSection.module.scss';

function GatherGroupUniquenessSection() {
  const {
    screenSizes: {
      isSMDevice,
      isXSDevice,
      isMDDevice,
    },
  } = useSelector<IStore, IApp>((state) => state?.app);

  const getBackground = () => {
    const bg:{ [propName:string]: StaticImageData } = {
      background: mainImg,
    };
    if (isMDDevice) {
      bg.background = mainImgTablet;
    } else if (isXSDevice || isSMDevice) {
      bg.background = mainImgMobile;
    }
    return bg;
  };

  return (
    <section className={styles.uniquenessSection}>
      <div className={styles.imageBlock}>
        <ImageComponent
          src={getBackground().background}
          fill
          sizes="(max-width: 768px) 50vw, (min-width: 768px) 100vw"
          alt="figures"
        />
      </div>
      <div className={styles.container}>
        <VRARContent>
          <MainTitle tag="h2" className={styles.title}>
            The uniqueness of the product
          </MainTitle>
        </VRARContent>
        <div className={styles.list}>
          {digitalHealthcareUniqueness.map(({ id, title, content }) => (
            <BorderedNumberCard
              key={id}
              id={id}
              title={title}
              content={content}
              classesComponent={{
                container: 'border-2 border-color-black z-3 min-h-[480px] py-[30px] px-[40px] '
                + 'transition-all duration-1000 ease-in-out flex-[0_1_50%] '
                + 'group hover:bg-color-black '
                + '[&:nth-of-type(3)]:!border-r-0 [&:nth-of-type(1)]:!border-b-0 '
                + '[&:nth-of-type(1)]:!border-r-0 [&:nth-of-type(2)]:!border-b-0 '
                + 'screen-lg:[&:nth-of-type(1)]:!border-r-2 screen-lg:[&:nth-of-type(3)]:!border-r-2 '
                + 'screen-lg:[&:nth-of-type(3)]:!border-b-0 screen-lg:hover:bg-transparent '
                + 'screen-lg:!px-[30px] screen-lg:!py-[30px] screen-lg:!min-h-[400px] '
                + 'screen-md:!py-[20px] screen-md:!pl-[17px] screen-md:!pr-[35px] screen-md:!min-h-[354px] ',
                content: '',
                title: 'text-color-black group-hover:!text-color-white !text-[36px] '
                + 'screen-lg:group-hover:!text-color-black screen-lg:!text-[30px] screen-lg:!leading-[39.9px] '
                + 'screen-md:!text-[18px] screen-md:!leading-[25.92px]',
                text: 'text-color-black group-hover:!text-color-white screen-lg:group-hover:!text-color-black '
                + 'screen-lg:!text-[24px] screen-lg:!leading-[34px] screen-md:!text-[16px] screen-md:!leading-[24px]',
                number: 'text-color-black group-hover:!text-color-white screen-lg:group-hover:!text-color-black',
              }}
              tag="p"
              tagTitle="h3"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default GatherGroupUniquenessSection;
