import { useRouter } from 'next/router';

import PageContainer from '../../../components/PageContainer/PageContainer';
import JakartaTitle from '../../../components/JakartaTitle/JakartaTitle';
import Link from '../../../components/Link/Link';
import ImageComponent from '../../../components/Image/Image';
import { IPageBlogs } from '../../../interfaces/IPages';
import { getOurInsightsContent } from '../../../utils/blogsHelpers';
import JakartaText from '../../../components/JakartaText/JakartaText';
import ButtonPrimary from '../../../components/UI/ButtonPrimary/ButtonPrimary';
import { ButtonType } from '../../../constants/enums';
import PageLinks from '../../../constants/PageLinks';
import { useAppSelector } from '../../../hook/reduxToolkit';
import OurInsightsBlogs from '../../../components/OurInsightsSection/components/OurInsightsBlogs';
import VRARContent from '../../../components/VRARContent/VRARContent';

function PageBlogs({ pageBlogs }:IPageBlogs) {
  const blogs = getOurInsightsContent(pageBlogs);
  const router = useRouter();
  const {
    isLGDevice,
    isXLDevice,
    isXXLDevice,
    isXXXLDevice,
  } = useAppSelector((state) => state.app.screenSizes);

  const isDesktop = isLGDevice || isXLDevice || isXXLDevice || isXXXLDevice;

  const btnOnClick = () => router.push(PageLinks.BLOGS);
  return (
    <PageContainer
      tag="section"
      className="bg-white pt-[100px] pb-[100px] relative overflow-hidden
      screen-lg:pt-[80px] screen-lg:pb-[80px]
      screen-md:pt-[60px] screen-md:pb-[60px]"
    >
      <VRARContent>
        <JakartaTitle className="pb-[60px] screen-lg:pb-[40px] screen-md:pb-[30px]">
          Insights from our experts
        </JakartaTitle>
      </VRARContent>
      {!isDesktop ? (
        <OurInsightsBlogs
          blogs={blogs}
          classes={{
            wrapper: 'screen-md:gap-[15px] ',
            blogTitle: 'screen-md:!text-[18px]/[1.4] !font-jakartaSans !font-medium ',
          }}
        />
      ) : (
        <div className="flex flex-wrap gap-[20px] gap-y-[60px]">
          {blogs?.map(({
            id,
            link,
            title,
            picture,
          }) => (
            <VRARContent
              key={id}
              className="w-[calc(33.333%-14px)]"
            >
              <Link href={link}>
                <div className="relative w-full aspect-[7/5] overflow-hidden">
                  <ImageComponent
                    src={picture}
                    alt="Blog Image"
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                </div>
                <JakartaText
                  tag="h3"
                  className="!text-[24px] leading-[130%] font-[500] screen-lg:!text-[20px]/[28px] pt-[20px]"
                >
                  {title}
                </JakartaText>
              </Link>
            </VRARContent>
          ))}
        </div>
      )}

      <VRARContent className="flex justify-center pt-[60px] screen-lg:pt-[40px] screen-md:pt-[30px]">
        <ButtonPrimary
          id={ButtonType.BLOG}
          onClick={btnOnClick}
          text="Explore more articles"
          styleContainer="max-w-[420px] screen-md:max-w-[330px]"
          isJakarta
        />
      </VRARContent>
    </PageContainer>
  );
}

export default PageBlogs;
