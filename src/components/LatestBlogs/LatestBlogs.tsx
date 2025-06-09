import Image from '../Image/Image';
import LinkComponent from '../Link/Link';
import { ILatestBlogs } from './interfaces/ILatestBlogs';
import VRARContent from '../VRARContent/VRARContent';

function LatestBlogs({
  latestBlogs, header, titleColor,
}: ILatestBlogs) {
  const adminPath = process.env.NEXT_PUBLIC_BACKEND as string;

  return (
    <div className="flex flex-col items-center bg-color-white6
      pt-[100px] pb-[150px] pl-0 pr-0
      mt-0 mb-0 screen-md:!hidden"
    >
      <div className="box-border max-w-[1110px] pl-0 pr-0 mt-0 mb-0
        screen-xl:max-w-[950px] screen-lg:max-w-[700px]"
      >
        <VRARContent>
          <h2 className={`font-bold pb-7 text-[44px] leading-[66px] 
            text-center ${titleColor ?? ''}`}
          >
            {header}
          </h2>
        </VRARContent>
        <VRARContent>
          <div className="flex justify-stretch items-start w-full">
            {latestBlogs.map(({ url, picture, title }) => (
              <div
                key={url}
                className="mr-[30px] last:mr-0 basis-[33%]"
              >
                <LinkComponent
                  href={`/blog/${url}`}
                >
                  <div className="mb-[15px] h-[230px]">
                    {picture && (
                    <Image
                      className="object-cover w-full h-full"
                      src={`${adminPath}${picture?.data?.attributes?.url
                      || picture?.data?.attributes?.formats?.medium?.url
                      || picture?.data?.attributes?.formats?.large?.url
                      || ''}`}
                      width={345}
                      height={247}
                      alt={title}
                    />
                    )}
                  </div>
                  <h3 className="w-full no-underline text-color-black]
                    text-[22px] leading-[28px] font-medium"
                  >
                    {title}
                  </h3>
                </LinkComponent>
              </div>
            ))}
          </div>
        </VRARContent>
      </div>
    </div>
  );
}

export default LatestBlogs;
