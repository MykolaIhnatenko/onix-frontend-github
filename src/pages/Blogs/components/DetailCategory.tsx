import { useSelector } from 'react-redux';

import IDetailCategory from '../interfaces/IDetailCategory';
import Category from './Category';
import CategoryDescriptionBlock from '../../../components/CategoryDescriprionBlock/CategoryDescriptionBlock';
import { BlogPreviewsCarouselVariant } from '../../../constants/enums';
import BlogPreviewList from './BlogPreviewsList';
import IStore from '../../../store/interfaces/IStore';
import { IApp } from '../../../store/app/interfaces/IApp';
import PageContainer from '../../../components/PageContainer/PageContainer';

import styles from '../sass/detailCategory.module.scss';

function DetailCategory({
  title, url, description, blogSubcategories, blogs,
}: IDetailCategory) {
  const {
    screenSizes: {
      isMDDevice,
    },
  } = useSelector<IStore, IApp>((state) => state?.app);
  const firstBlogs = isMDDevice ? blogs?.data?.slice(0, 2) : blogs?.data?.slice(0, 3);

  return (
    <section>
      <PageContainer className={styles.container}>
        <CategoryDescriptionBlock
          title={title}
          url={url}
          description={description}
        />
        {blogSubcategories?.data?.length !== undefined && blogSubcategories?.data?.length > 0 && (
          <div className={styles.subcategories}>
            {blogSubcategories?.data?.map(({ id, attributes: { name, url: subcategoryUrl } }) => (
              <Category
                key={id}
                title={name}
                url={url}
                subcategoryUrl={subcategoryUrl}
              />
            ))}
          </div>
        )}
      </PageContainer>
      <BlogPreviewList
        blogs={firstBlogs}
        variant={BlogPreviewsCarouselVariant.SINGLE_BLOG}
        mainTitleTag="h3"
      />
    </section>
  );
}

export default DetailCategory;
