import IBlogAuthorCard from './interface/IBlogAuthorCard';
import ImageComponent from '../Image/Image';
import ContentText from '../ContentText/ContentText';
import { BlogPreviewsCarouselVariant } from '../../constants/enums';
import { useAppSelector } from 'hook/reduxToolkit';

function BlogAuthorCard({
  author, sizePreviewVariant, classes,
}:IBlogAuthorCard) {
  const adminPath = process.env.NEXT_PUBLIC_BACKEND as string;
  const { screenSizes: { isXSDevice, isSMDevice } } = useAppSelector((state) => state?.app);
  const isMobile = isXSDevice || isSMDevice;
  const iconSize = isMobile ? 20 : 40;
  const {
    attributes: {
      name = '', surname = '',
      picture: {
        data: {
          attributes: {
            url: authorImage = '',
          } = {},
        } = {},
      } = {},
    } = {},
  } = author;

  return (
    <div
      className="flex flex-row items-center"
    >
      <div className="mr-[15px]">
        <ImageComponent
          src={`${adminPath}${authorImage}`}
          height={iconSize}
          width={iconSize}
          alt="author"
          loading="lazy"
          className="rounded-full object-cover w-[40px] h-[40px] screen-md:w-[20px] screen-md:h-[20px]"
        />
      </div>

      <div>
        <ContentText
          tag="p"
          className={`
            !m-0 !text-[14px] !leading-[20px]
            min-md:!text-[16px] min-md:!leading-[22px] min-md:tracking-[0.32px]
            ${sizePreviewVariant !== BlogPreviewsCarouselVariant.SINGLE_BLOG
            ? 'min-md:!text-[18px] min-md:!leading-[26px]'
            : ''}
            ${classes?.contentText || ''}
          `}
        >
          {`${name} ${surname}`}
        </ContentText>
      </div>
    </div>
  );
}

export default BlogAuthorCard;
