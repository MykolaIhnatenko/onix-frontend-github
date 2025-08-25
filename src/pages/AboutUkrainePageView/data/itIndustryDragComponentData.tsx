import ImageComponent from '../../../components/Image/Image';
import MainTitle from '../../../components/MainTitle/MainTitle';
import ContentText from '../../../components/ContentText/ContentText';

import AboutUkraineITIndustry1 from '@/images/aboutUkraine/itIndustry/img_it_industry_one.webp';
import AboutUkraineITIndustry2 from '@/images/aboutUkraine/itIndustry/img_it_industry_two.webp';
import AboutUkraineITIndustry3 from '@/images/aboutUkraine/itIndustry/img_it_industry_three.webp';
import AboutUkraineITIndustry4 from '@/images/aboutUkraine/itIndustry/img_it_industry_four.webp';
import AboutUkraineITIndustry5 from '@/images/aboutUkraine/itIndustry/img_it_industry_five.webp';
import AboutUkraineITIndustry6 from '@/images/aboutUkraine/itIndustry/img_it_industry_six.webp';
import AboutUkraineITIndustry7 from '@/images/aboutUkraine/itIndustry/img_it_industry_seven.webp';
import AboutUkraineITIndustry8 from '@/images/aboutUkraine/itIndustry/img_it_industry_eight.webp';
import AboutUkraineITIndustry9 from '@/images/aboutUkraine/itIndustry/img_it_industry_nine.webp';
import AboutUkraineITIndustry10 from '@/images/aboutUkraine/itIndustry/img_it_industry_ten.webp';
import AboutUkraineITIndustry11 from '@/images/aboutUkraine/itIndustry/img_it_industry_eleven.webp';
import AboutUkraineITIndustry12 from '@/images/aboutUkraine/itIndustry/img_it_industry_twelve.webp';
import AboutUkraineITIndustry13 from '@/images/aboutUkraine/itIndustry/img_it_industry_thirteen.webp';
import AboutUkraineITIndustry14 from '@/images/aboutUkraine/itIndustry/img_it_industry_fourteen.webp';
import styles from '../sass/itIndustryDragComponent.module.scss';

const itIndustryDragComponentData = [
  {
    id: 1,
    image: <ImageComponent src={AboutUkraineITIndustry1} alt="industry" className={styles.image} />,
    title: <MainTitle tag="p" className={styles.title}>~5,000</MainTitle>,
    text: <ContentText tag="p" className={styles.text}>IT companies in Ukraine</ContentText>,
  },
  {
    id: 2,
    image: <ImageComponent src={AboutUkraineITIndustry2} alt="industry" className={styles.image} />,
    title: <MainTitle tag="p" className={styles.title}>20+</MainTitle>,
    text: <ContentText tag="p" className={styles.text}>IT clusters</ContentText>,
  },
  {
    id: 3,
    image: <ImageComponent src={AboutUkraineITIndustry3} alt="industry" className={styles.image} />,
    title: <MainTitle tag="p" className={styles.title}>20%</MainTitle>,
    text: (
      <ContentText tag="p" className={styles.text}>
        of Fortune 500 companies have remote development teams in Ukraine
      </ContentText>
    ),
  },
  {
    id: 4,
    image: <ImageComponent src={AboutUkraineITIndustry4} alt="industry" className={styles.image} />,
    title: <MainTitle tag="p" className={styles.title}>100+</MainTitle>,
    text: <ContentText tag="p" className={styles.text}>R&D centers of international companies</ContentText>,
  },
  {
    id: 5,
    image: <ImageComponent src={AboutUkraineITIndustry5} alt="industry" className={styles.image} />,
    title: <MainTitle tag="p" className={styles.title}>3rd</MainTitle>,
    text: <ContentText tag="p" className={styles.text}>largest export is IT services</ContentText>,
  },
  {
    id: 6,
    image: <ImageComponent src={AboutUkraineITIndustry6} alt="industry" className={styles.image} />,
    title: <MainTitle tag="p" className={styles.title}>$7.3</MainTitle>,
    text: (
      <ContentText tag="p" className={styles.text}>
        billion was brought in by IT services export in 2022
      </ContentText>
    ),
  },
  {
    id: 7,
    image: <ImageComponent src={AboutUkraineITIndustry7} alt="industry" className={styles.image} />,
    title: <MainTitle tag="p" className={styles.title}>70%</MainTitle>,
    text: (
      <ContentText tag="p" className={styles.text}>
        of the market for Ukraine’s IT industry is made by the US & UK
      </ContentText>
    ),
  },
  {
    id: 8,
    image: <ImageComponent src={AboutUkraineITIndustry8} alt="industry" className={styles.image} />,
    title: <MainTitle tag="p" className={styles.title}>$571M</MainTitle>,
    text: (
      <ContentText tag="p" className={styles.text}>
        in investments were raised by Ukrainian startups in 2021
      </ContentText>
    ),
  },
  {
    id: 9,
    image: <ImageComponent src={AboutUkraineITIndustry9} alt="industry" className={styles.image} />,
    title: <MainTitle tag="p" className={styles.title}>∼285K</MainTitle>,
    text: <ContentText tag="p" className={styles.text}> IT experts in 2021</ContentText>,
  },
  {
    id: 10,
    image: <ImageComponent src={AboutUkraineITIndustry10} alt="industry" className={styles.image} />,
    title: <MainTitle tag="p" className={styles.title}>619</MainTitle>,
    text: <ContentText tag="p" className={styles.text}>higher institutions prepare IT specialists</ContentText>,
  },
  {
    id: 11,
    image: <ImageComponent src={AboutUkraineITIndustry11} alt="industry" className={styles.image} />,
    title: <MainTitle tag="p" className={styles.title}>~15K</MainTitle>,
    text: <ContentText tag="p" className={styles.text}>IT specialists graduate annually</ContentText>,
  },
  {
    id: 12,
    image: <ImageComponent src={AboutUkraineITIndustry12} alt="industry" className={styles.image} />,
    title: <MainTitle tag="p" className={styles.title}>4th</MainTitle>,
    text: (
      <ContentText tag="p" className={styles.text}>
        place among the best programmers globally (Pentalog, 2022)
      </ContentText>
    ),
  },
  {
    id: 13,
    image: <ImageComponent src={AboutUkraineITIndustry13} alt="industry" className={styles.image} />,
    title: <MainTitle tag="p" className={styles.title}>50th</MainTitle>,
    text: <ContentText tag="p" className={styles.text}>startup ecosystem globally</ContentText>,
  },
  {
    id: 14,
    image: <ImageComponent src={AboutUkraineITIndustry14} alt="industry" className={styles.image} />,
    title: <MainTitle tag="p" className={styles.title}>57th</MainTitle>,
    text: <ContentText tag="p" className={styles.text}>place on the Global Innovation Index 2022</ContentText>,
  },
];

export default itIndustryDragComponentData;
