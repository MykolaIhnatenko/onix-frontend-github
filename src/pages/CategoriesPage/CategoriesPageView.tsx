import useBackground from '../../hook/useBackground';
import CategoriesBg from '@/images/categories/img_categories@2x.webp';
import CategoriesBgTablet from '@/images/categories/img_categories_tablet@2x.webp';
import CategoriesBgMobile from '@/images/categories/img_categories_mobile@2x.webp';
import ImageComponent from '../../components/Image/Image';
import PageContainer from '../../components/PageContainer/PageContainer';
import SearchInputBlock from '../../components/SearchInputBlock/SearchInputBlock';
import ICategoriesPageView from './interfaces/ICategoriesPageView';
import Categories from './components/CategoriesBlock';
import RecommendedBlock from './components/RecommendedBlock';

import styles from './sass/categoriesPageView.module.scss';

function CategoriesPageView({
  categories, designItem, technologiesItem, mobileItem,
}: ICategoriesPageView) {
  const bg = useBackground(
    CategoriesBg,
    CategoriesBgTablet,
    CategoriesBgMobile,
  );

  return (
    <div className={styles.categories}>
      <div className={styles.bg}>
        {bg && (
        <ImageComponent
          src={bg}
          fill
          priority
          sizes="(max-width: 768px) 50vw, (min-width: 768px) 100vw"
          alt="figures"
        />
        )}
      </div>
      <PageContainer className={styles.container}>
        <SearchInputBlock
          label="Search all topics..."
          isCategories
          classes={{
            inputBlock: 'min-lg:basis-auto min-lg:max-w-[854px] min-lg:m-[0_auto]',
            inputContainer: `px-[15px] py-[16px] m-0 bg-color-pale-gray
              min-lg:max-w-[854px] border-b border-solid border-color-black`,
            input: 'bg-color-pale-gray',
            results: 'left-0 w-full bg-color-pale-gray border-t-0 min-lg:max-w-[854px]',
          }}
        />
        <RecommendedBlock designItem={designItem} mobileItem={mobileItem} technologiesItem={technologiesItem} />
        <Categories categories={categories} />
      </PageContainer>
    </div>
  );
}

export default CategoriesPageView;
