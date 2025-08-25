import ImageComponent from '../../../components/Image/Image';
import useBackground from '../../../hook/useBackground';
import { MD_DEVICE } from '../../../constants/constants';
import PageContainer from '../../../components/PageContainer/PageContainer';
import IBlogsNewArticleSection from '../interfaces/IBlogsNewArticleSection';
import LinkComponent from '../../../components/Link/Link';
import MainTitle from '../../../components/MainTitle/MainTitle';
import BlogSubcategoryTagList from '../../../components/BlogSubcategoryTagList/BlogSubcategoryTagList';
import { BlogPreviewsCarouselVariant, BlogSubcategoryVariant } from '../../../constants/enums';
import BlogInfoBlock from './BlogInfoBlock';
import ContentText from '../../../components/ContentText/ContentText';
import BlogAuthorCard from '../../../components/BlogAuthorCard/BlogAuthorCard';

import BlogsNewArticleMobile from '@/images/blogsPage/img_new_article_blog_mobile@2x.webp';
import BlogsNewArticleTablet from '@/images/blogsPage/img_new_article_blog_tablet@2x.webp';
import BlogsNewArticle from '@/images/blogsPage/img_new_article_blog@2x.webp';
import styles from '../sass/blogsNewArticleSection.module.scss';

function BlogsNewArticleSection({ newestBlog }: IBlogsNewArticleSection) {
  const background = useBackground(
    BlogsNewArticle,
    BlogsNewArticleTablet,
    BlogsNewArticleMobile,
    MD_DEVICE,
  );

  const blog = newestBlog[0].attributes;
  const adminPath = process.env.NEXT_PUBLIC_BACKEND as string;
  const {
    datePublication,
    time_to_reading: timeToReading,
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
  } = blog;

  const relatedSubcategoryTyped = {
    data: relatedSubcategory?.map(({ id, label, ...params }) => ({
      id,
      attributes: {
        ...params,
        name: label,
      },
    })),
  };

  return (
    <section className={styles.newArticle}>
      {background && (
      <ImageComponent
        src={background}
        fill
        className={styles.bg}
        sizes="100vw"
        alt="new-article-background"
      />
      )}
      <PageContainer className={styles.container}>
        <BlogSubcategoryTagList
          data={relatedSubcategoryTyped.data || blogSubcategories?.data}
          classes={{
            container: `!flex !p-[15px] !flex-wrap !absolute !max-w-[330px]
            min-md:!max-w-[290px] min-lg:!max-w-[407px]`,
          }}
        />
        <div className={styles.imgContainer}>
          <ImageComponent
            src={`${adminPath}${defaultImage}`}
            alt={alternativeText || 'blog picture'}
            fill
          />
        </div>
        <LinkComponent href={`/blog/${url}`} className={styles.contentBlock}>
          <ContentText tag="p" className={styles.title}>[ New article ]</ContentText>
          <BlogInfoBlock
            datePublication={datePublication}
            timeToReading={timeToReading}
            views={views}
            variant={BlogSubcategoryVariant.NEWEST_ARTICLE}
          />
          <MainTitle className={styles.blogTitle}>{title}</MainTitle>
          <ContentText tag="p" className={styles.blogDescription}>{description}</ContentText>
          {executor?.data ? (
            <BlogAuthorCard
              author={executor.data}
              sizePreviewVariant={BlogPreviewsCarouselVariant.SINGLE_BLOG}
              classes={{
                contentText: '!text-[16px] !leading-[22px] !tracking-[0.32px]',
              }}
            />
          ) : null}
          {!executor?.data && writer?.data ? (
            <BlogAuthorCard
              author={writer.data[0]}
              sizePreviewVariant={BlogPreviewsCarouselVariant.SINGLE_BLOG}
              classes={{
                contentText: '!text-[16px] !leading-[22px] !tracking-[0.32px]',
              }}
            />
          ) : null}
        </LinkComponent>
      </PageContainer>
    </section>
  );
}

export default BlogsNewArticleSection;
