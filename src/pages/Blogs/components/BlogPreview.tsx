import ImageComponent from '../../../components/Image/Image';
import ContentText from '../../../components/ContentText/ContentText';
import MainTitle from '../../../components/MainTitle/MainTitle';
import LinkComponent from '../../../components/Link/Link';
import BlogAuthorCard from '../../../components/BlogAuthorCard/BlogAuthorCard';
import BlogSubcategoryTagList from '../../../components/BlogSubcategoryTagList/BlogSubcategoryTagList';
import BlogInfoBlock from './BlogInfoBlock';
import { IBLogPreview } from '../interfaces/IBLogPreview';
import { BlogPreviewsCarouselVariant } from '../../../constants/enums';
import IRelatedSubcategoryTyped from '../interfaces/IRelatedSubcategoryTyped';

import styles from '../sass/blogPreview.module.scss';

function BlogPreview({
  item, variant, priority = false, mainTitleTag = 'h3', generalSubcategory = false, categoryUrl, ref,
}:IBLogPreview) {
  const {
    datePublication,
    time_to_reading: timeToReading,
    blogTitle,
    title,
    description,
    url,
    views,
    picture: {
      data: {
        attributes: {
          alternativeText = '',
          url: defaultImage = '',
        } = {},
      } = {},
    } = {},
    executor,
    writer,
    relatedSubcategory,
    blogSubcategories,
    categories,
  } = item?.attributes || {};
  const adminPath = process.env.NEXT_PUBLIC_BACKEND as string;

  const relatedSubcategoryTyped: IRelatedSubcategoryTyped = {
    data: relatedSubcategory?.map((subcategory) => ({
      id: subcategory.id,
      attributes: {
        name: subcategory.label,
        url: subcategory.url,
      },
    })),
  };

  const checkRelatedSubcategory = relatedSubcategoryTyped.data ? relatedSubcategoryTyped : blogSubcategories;

  const modeRelatedSubcategory = {
    data: checkRelatedSubcategory?.data?.filter((related) => {
      if (!related?.attributes?.name) return false;
      return categories?.data?.some((category) => category?.attributes?.url === categoryUrl
        && category.attributes?.blogSubcategories?.data?.some(
          (subcategory) => subcategory?.attributes?.name === related?.attributes?.name,
        ));
    }).map(({ id, attributes }) => ({
      id: id ?? '',
      attributes: {
        name: attributes?.name ?? '',
        url: attributes?.url ?? '',
      },
    })),
  };

  return (
    <div ref={ref} className={`${styles.container} ${variant ? styles[variant] : ''}`}>
      <div>
        <LinkComponent href={`/blog/${url}`}>
          <BlogSubcategoryTagList
            data={generalSubcategory ? modeRelatedSubcategory?.data : checkRelatedSubcategory?.data}
          />
          <div className={styles.imgContainer}>
            <ImageComponent
              src={`${adminPath}${defaultImage}`}
              alt={alternativeText || 'blog-image'}
              fill
              className={styles.img}
              priority={priority}
              sizes="(max-width: 768px) 80vw,(max-width: 1200px) 50vw, 66vw"
              loading={priority ? 'eager' : 'lazy'}
            />
          </div>
        </LinkComponent>
      </div>
      <div className={styles.contentContainer}>
        <LinkComponent href={`/blog/${url}`} className={styles.linkWrapper}>
          <BlogInfoBlock
            datePublication={datePublication}
            timeToReading={timeToReading}
            views={views}
            carouselVariant={variant}
          />
          <MainTitle
            tag={mainTitleTag}
            className={`${styles.title} ${variant === BlogPreviewsCarouselVariant.BIG_PREVIEWS
              || variant === BlogPreviewsCarouselVariant.TOP_BLOGS_PREVIEW ? styles.bigTitle : ''}`}
          >
            {blogTitle || title}
          </MainTitle>
          <ContentText
            tag="p"
            className={`${styles.description} ${variant === BlogPreviewsCarouselVariant.BIG_PREVIEWS
              || variant === BlogPreviewsCarouselVariant.TOP_BLOGS_PREVIEW ? styles.bigDescription : ''}`}
          >
            {description}
          </ContentText>
        </LinkComponent>
        {executor?.data ? (
          <div className={styles.author}>
            <LinkComponent href={`/author/${executor?.data?.attributes?.url}`}>
              <BlogAuthorCard author={executor?.data} sizePreviewVariant={variant} />
            </LinkComponent>
          </div>
        ) : null}
        {!executor?.data && writer?.data[0] ? <BlogAuthorCard author={writer?.data[0]} /> : null}
      </div>
    </div>
  );
}

export default BlogPreview;
