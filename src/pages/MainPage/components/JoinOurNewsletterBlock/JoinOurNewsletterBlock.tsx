import { StaticImageData } from 'next/image';

import ImageComponent from '../../../../components/Image/Image';
import PageContainer from '../../../../components/PageContainer/PageContainer';
import JakartaTitle from '../../../../components/JakartaTitle/JakartaTitle';
import JakartaText from '../../../../components/JakartaText/JakartaText';
import VRARContent from '../../../../components/VRARContent/VRARContent';
import SubscribeForm from './SubscribeForm';
import SubscribeFormModal from './SubscribeFormModal';

function JoinOurNewsletterBlock({ bg }: { bg: StaticImageData }) {
  return (
    <div className="relative bg-white py-[100px] screen-lg:py-[80px] screen-md:py-[60px] ">
      <ImageComponent
        src={bg}
        alt="subscribe-bg"
        fill
        sizes="(max-width: 768px) 100vw, (min-width: 768px) 100vw"
      />
      <PageContainer className="relative !max-w-[1440px] flex gap-[70px] justify-between
      max-1310:gap-[30px] max-1310:flex-col screen-md:gap-[30px]"
      >
        <div className="max-w-[630px] max-1310:max-w-full">
          <VRARContent>
            <JakartaTitle className="mb-[40px] screen-lg:mb-[30px] screen-md:mb-[20px]">
              Join our newsletter
            </JakartaTitle>
          </VRARContent>
          <VRARContent>
            <JakartaText
              tag="p"
              className="text-[24px]/[1.2] mb-[30px] screen-lg:mb-[20px] screen-md:mb[15px]
                  screen-md:text-[18px]/[1.4]
                  tracking-[-0.24px] screen-md:tracking-[-0.2px] screen-md:mb-[15px]"
            >
              Receive monthly tips on managing software projects, leveraging AI for
              product development, and keeping your tech investments on track.
            </JakartaText>
          </VRARContent>
          <VRARContent>
            <JakartaText tag="p" className="text-[16px]/[1.5] tracking-[-0.24px] screen-md:text-[14px]/[1.5]">
              We’re committed to sharing knowledge so you can lead successful,
              future&#8209;proof&nbsp;projects.
            </JakartaText>
          </VRARContent>
        </div>
        <SubscribeForm />
        <SubscribeFormModal />
      </PageContainer>
    </div>
  );
}

export default JoinOurNewsletterBlock;
