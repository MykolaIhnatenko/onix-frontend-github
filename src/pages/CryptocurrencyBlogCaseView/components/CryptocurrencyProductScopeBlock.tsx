import { StaticImageData } from 'next/image';

import PageContainer from '../../../components/PageContainer/PageContainer';
import MainTitle from '../../../components/MainTitle/MainTitle';
import ContentText from '../../../components/ContentText/ContentText';
import ImageComponent from '../../../components/Image/Image';
import Icon1 from '../../../assets/images/cryptocurrencyBlog/icons/img_icon_1.webp';
import Icon2 from '../../../assets/images/cryptocurrencyBlog/icons/img_icon_2.webp';
import Icon3 from '../../../assets/images/cryptocurrencyBlog/icons/img_icon_3.webp';

function CryptocurrencyProductScopeBlock({ background }:{ background: StaticImageData }) {
  return (
    <section className="relative bg-black py-[120px] screen-lg:py-[80px] screen-md:pt-[80px] screen-md:pb-[60px]">
      <ImageComponent
        src={background}
        alt="background"
        className="max-h-[520px] screen-lg:max-h-[480px] screen-md:max-h-[430px] object-cover"
        fill
      />
      <PageContainer className="relative text-color-white">
        <MainTitle className="max-w-[1080px] min-xxxl:max-w-[1480px]">
          Product scope
        </MainTitle>
        <ContentText tag="p" marginAbsent className="!mt-[40px] !mb-[80px] screen-lg:!mb-[40px] screen-md:!mt-[30px]">
          The Onix team was responsible for:
        </ContentText>
        <div className="relative flex justify-between gap-[80px] max-w-full mx-auto screen-lg:flex-col
                        screen-lg:gap-10 screen-md:gap-5"
        >
          <div className="flex flex-1 flex-col text-color-white max-w-[380px]
                          screen-lg:max-w-full min-xxl:max-w-[534px]"
          >
            <ImageComponent
              src={Icon1}
              alt="icon"
              className="w-[60px] h-[60px] m-[20px_0_30px] screen-md:m-[20px_0_20px] screen-md:w-10 screen-md:h-10 "
            />
            <ContentText tag="p" marginAbsent>
              Building a demo of a decentralized blog platform on the Web3 infrastructure
            </ContentText>
          </div>
          <div className="flex flex-1 flex-col max-w-[380px] screen-lg:max-w-full min-xxl:max-w-[534px]">
            <ImageComponent
              src={Icon2}
              alt="icon"
              className="w-[60px] h-[60px] m-[20px_0_30px] screen-md:m-[20px_0_20px] screen-md:w-10 screen-md:h-10"
            />
            <ContentText tag="p" marginAbsent>
              Enabling users to add new posts
              and like existing posts using ONIX tokens via MetaMask
            </ContentText>
          </div>
          <div className="flex flex-1 flex-col max-w-[380px] screen-lg:max-w-full min-xxl:max-w-[534px]">
            <ImageComponent
              src={Icon3}
              alt="icon"
              className="w-[60px] h-[60px] m-[20px_0_30px] screen-md:m-[20px_0_20px] screen-md:w-10 screen-md:h-10"
            />
            <ContentText tag="p" marginAbsent>
              Utilizing Polygon&apos;s network
              for faster and cost-effective transactions
            </ContentText>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

export default CryptocurrencyProductScopeBlock;
