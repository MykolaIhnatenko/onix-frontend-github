import MainTitle from '../../../components/MainTitle/MainTitle';
import ContentText from '../../../components/ContentText/ContentText';
import IPhone1 from '@/images/phlexCase/killer/img_iPhone_1@2x.webp';
import IPhone2 from '@/images/phlexCase/killer/img_iPhone_2@2x.webp';
import IPhone3 from '@/images/phlexCase/killer/img_iPhone_3@2x.webp';
import IPhone4 from '@/images/phlexCase/killer/img_iPhone_4@2x.webp';

import styles from '../../ConvertCasePageView/sass/killerFeaturesBlock.module.scss';

const killerSliderData = [
  {
    id: 1,
    title: (
      <MainTitle className={styles.titleCard} tag="h3">
        Swim-tracking
      </MainTitle>),
    img: IPhone1,
    text: (
      <ContentText className={styles.text} tag="p">
        Put on a swim-tracking device
      </ContentText>
    ),
  },
  {
    id: 2,
    title: (
      <MainTitle className={styles.titleCard} tag="h3">
        Connect the device
      </MainTitle>),
    img: IPhone2,
    text: (
      <ContentText className={styles.text} tag="p">
        Connect the device with a mobile app and start swimming
      </ContentText>
    ),
  },
  {
    id: 3,
    title: (
      <MainTitle className={styles.titleCard} tag="h3">
        Track vital metrics
      </MainTitle>),
    img: IPhone3,
    text: (
      <ContentText className={styles.text} tag="p">
        Track vital metrics and get accurate results
      </ContentText>),
  },
  {
    id: 4,
    title: (
      <MainTitle className={styles.titleCard} tag="h3">
        Adjust workout plan
      </MainTitle>),
    img: IPhone4,
    text: (
      <ContentText className={styles.text} tag="p">
        Adjust workout plan to conquer even better goals
      </ContentText>),
  },
];

export default killerSliderData;
