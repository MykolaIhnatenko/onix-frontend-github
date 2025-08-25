import { useSelector } from 'react-redux';
import { StaticImageData } from 'next/image';

import ImageComponent from '../../../components/Image/Image';
import PageContainer from '../../../components/PageContainer/PageContainer';
import MainTitle from '../../../components/MainTitle/MainTitle';
import estimateBlockData from '../data/EstimateBlockData';
import ContentText from '../../../components/ContentText/ContentText';
import pageToSalesChannels from '../../../constants/PageToSalesChannels';
import SubscribeForm from '../../Blogs/components/SubscribeForm';
import { IFormBlock } from '../interfaces/IFormBlock';
import { FormMessageButtonVariant, SubscribeFormVariant } from '../../../constants/enums';
import BlogsFormModal from '../../Blogs/components/BlogsFormModal';
import IStore from 'store/interfaces/IStore';
import { IApp } from 'store/app/interfaces/IApp';

import SingleBlogFormBgMobile from '@/images/singleBlog/img_blogs_form_mobile@2x.webp';
import SingleBlogFormBgTablet from '@/images/singleBlog/img_blogs_form_tablet@2x.webp';
import SingleBlogFormBg from '@/images/singleBlog/img_blogs_form@2x.webp';
import styles from '../sass/formBlock.module.scss';

function FormBlock({ salesChannel }: IFormBlock) {
  const {
    screenSizes: {
      isMDDevice,
      isSMDevice,
      isXSDevice,
    },
  } = useSelector<IStore, IApp>((state) => state?.app);

  const getBackground = () => {
    const bg:{ [propName:string]: StaticImageData } = {
      background: SingleBlogFormBg,
    };
    if (isMDDevice) {
      bg.background = SingleBlogFormBgTablet;
    } else if (isXSDevice || isSMDevice) {
      bg.background = SingleBlogFormBgMobile;
    }
    return bg;
  };
  return (
    <>
      <div className={styles.formSection}>
        <div className={styles.bg}>
          <ImageComponent
            src={getBackground().background}
            alt="form-block-background"
            fill
            sizes="(max-width: 768px) 100vw, (min-width: 768px) 100vw"
          />
        </div>
        <PageContainer className={styles.container}>
          <div className={styles.formBlock}>
            <MainTitle className={styles.title}>Never miss a new blog post from us!</MainTitle>
            <MainTitle className={styles.subtitle} tag="h3">
              Join us now and get your FREE copy of &quot;Software Development Cost Estimation&quot;!
            </MainTitle>
            <div className={styles.form}>
              <SubscribeForm
                salesChannel={salesChannel || pageToSalesChannels.BLOG_SUBCATEGORIES}
                variant={SubscribeFormVariant.SINGLE_BLOG}
                idFocus="unfocused"
              />
            </div>
          </div>
          <div className={styles.estimateBlock}>
            <MainTitle className={`${styles.estimateTitle} ${styles.pb}`} tag="p">
              This pricing guide is created to enhance transparency, empower you to make well-informed decisions, and
              alleviate any confusion associated with pricing. In this guide, you&apos;ll find:
            </MainTitle>
            <div className={styles.estimateContent}>
              {estimateBlockData.map(({ id, title }) => (
                <div key={id} className={styles.estimateItem}>
                  <MainTitle className={styles.estimateTitle} tag="div">
                    {id}
                  </MainTitle>
                  <ContentText tag="p" className={styles.text}>{title}</ContentText>
                </div>
              ))}
            </div>
          </div>
        </PageContainer>
      </div>
      <BlogsFormModal btnVariant={FormMessageButtonVariant.BLOGS} />
    </>
  );
}

export default FormBlock;
