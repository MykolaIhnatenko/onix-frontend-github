import { useRouter } from 'next/router';

import MainTitle from '../../../components/MainTitle/MainTitle';
import ContentText from '../../../components/ContentText/ContentText';
import useBackground from '../../../hook/useBackground';
import { MD_DEVICE } from '../../../constants/constants';
import PageLinks from '../../../constants/PageLinks';
import BlogButtonSectionImage from '../../../components/BlogButtonSection/components/BlogButtonSectionImage';
import ButtonPrimary from 'components/UI/ButtonPrimary/ButtonPrimary';

import BlogsCalculateImgMobile from '@/images/blogsPage/img_blogs_calculate_mobile@2x.webp';
import BlogsCalculateImg from '@/images/blogsPage/img_blogs_calculate@2x.webp';
import styles from '../sass/calculate.module.scss';

function Calculate() {
  const router = useRouter();

  const img = useBackground(
    BlogsCalculateImg,
    BlogsCalculateImg,
    BlogsCalculateImgMobile,
    MD_DEVICE,
  );

  return (
    <>
      <div className={styles.textBlock}>
        <MainTitle className={styles.title}>
          How much does it cost to hire a dedicated team to build a
          top-tier solution?
        </MainTitle>
        <ContentText tag="p" className={styles.text}>
          Specify the number of experts and technologies you need and
          get an approximate cost for your project!
        </ContentText>
        <ButtonPrimary
          text="Calculate now"
          styleContainer={styles.button}
          onClick={() => router.push(PageLinks.DEDICATED_TEAM_CALCULATOR)}
        />
      </div>
      <BlogButtonSectionImage img={img} alt="staff" />
    </>
  );
}

export default Calculate;
