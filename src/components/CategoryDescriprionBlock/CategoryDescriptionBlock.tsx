import { useRouter } from 'next/router';

import MainTitleWithoutSize from 'components/MainTitleWithoutSize/MainTitleWithoutSize';
import ViewAllButton from '../ViewAllButton/VIewAllButton';
import { ViewAllButtonVariant } from '../../constants/enums';
import ContentText from '../ContentText/ContentText';
import ICategoryDescriptionBlock from './interfaces/ICategoryDescriptionBlock';

function CategoryDescriptionBlock({
  title, url, description,
}: ICategoryDescriptionBlock) {
  const router = useRouter();
  const getTag = () => (router.asPath === '/blogs' ? 'h2' : 'h1');
  return (
    <div className="relative border-b-[2px] border-black">
      {title && (
        <MainTitleWithoutSize
          tag={getTag()}
          className="font-[500] text-[25px] leading-[35px] text-black font-generalSans
          min-md:text-[40px] min-md:leading-[56px] min-lg:text-[50px] min-lg:leading-[64px]"
        >
          {title}
        </MainTitleWithoutSize>
      )}
      {url && (
      <div className="absolute top-[10px] right-0 min-md:top-[24px] min-lg:top-unset min-lg:bottom-[30px]">
        <ViewAllButton
          title="View all"
          href={`/blogs/${url}`}
          variant={ViewAllButtonVariant.VIEW_ALL}
        />
      </div>
      )}
      <ContentText
        tag="p"
        className="!m-0 p-[30px_0] min-lg:max-w-[730px] min-xl:max-w-[900px] min-xxl:max-w-[1060px]"
      >
        {description}
      </ContentText>
    </div>
  );
}

export default CategoryDescriptionBlock;
