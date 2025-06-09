import { useAppSelector } from '../../../hook/reduxToolkit';
import MainTitle from '../../../components/MainTitle/MainTitle';
import PageContainer from '../../../components/PageContainer/PageContainer';
import Pagination from '../../../components/Pagination/Pagination';
import BlogPreview from '../../Blogs/components/BlogPreview';
import BlogPreviewsSelector from '../../Blogs/components/BlogPreviewsSelector';
import { BlogsSectionType } from '../interfaces/IAuthorPageView';
import { BlogPreviewsCarouselVariant } from '../../../constants/enums';

import styles from '../sass/blogsSection.module.scss';

function BlogsSection({
  authorBlogs, surname, name, url, pagination,
}:BlogsSectionType) {
  const { screenSizes: { isMDDevice } } = useAppSelector((state) => state?.app);

  const firstBlogs = authorBlogs?.slice(0, isMDDevice ? 1 : 2);

  return (
    <section className={styles.blogsSection}>
      <PageContainer className={styles.container}>
        <MainTitle className={styles.title} tag="h2">
          More from
          {' '}
          {`${name} ${surname}`}
        </MainTitle>
        <hr />
      </PageContainer>
      <div className={styles.blogs}>
        <BlogPreviewsSelector
          blogs={firstBlogs}
          variant={BlogPreviewsCarouselVariant.BIG_PREVIEWS}
        />
        <PageContainer>
          <div className={styles.blogsContainer}>
            {authorBlogs?.slice(isMDDevice ? 1 : 2)
              ?.map((item) => (
                <BlogPreview
                  key={item.id}
                  item={item}
                  variant={BlogPreviewsCarouselVariant.SINGLE_BLOG}
                />
              ))}
          </div>
        </PageContainer>
      </div>
      <Pagination
        pagination={pagination}
        author={url}
      />
    </section>
  );
}

export default BlogsSection;
