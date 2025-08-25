import { useRouter } from 'next/router';

import ButtonLight from '../../../components/UI/ButtonLight/ButtonLight';
import ImageComponent from '../../../components/Image/Image';
import PageContainer from '../../../components/PageContainer/PageContainer';
import JakartaTitle from '../../../components/JakartaTitle/JakartaTitle';
import JakartaText from '../../../components/JakartaText/JakartaText';
import { ButtonType } from '../../../constants/enums';
import PageLinks from '../../../constants/PageLinks';
import features from '../data/featuresData';
import VRARContent from '../../../components/VRARContent/VRARContent';

function AiSolutions() {
  const router = useRouter();
  const btnOnClick = () => router.push(PageLinks.MACHINE_LEARNING_DEVELOPMENT_SERVICES);

  return (
    <section className="text-white py-[100px] screen-lg:py-[80px] screen-md:py-[60px] ">
      <PageContainer>
        <div className="max-w-[1080px] min-xxxl:max-w-[1480px]">
          <VRARContent>
            <JakartaTitle className="!leading-[120%] tracking-[-0.01em] mb-[40px]
          screen-lg:mb-[30px] screen-md:mb-[20px]"
            >
              Our AI-powered solutions for enterprises, SMEs&nbsp;&&nbsp;startups
            </JakartaTitle>
          </VRARContent>
          <VRARContent>
            <JakartaText
              tag="p"
              className="leading-[130%] !text-[24px] tracking-[-0.01em] mb-[30px] screen-lg:mb-[20px]
          screen-md:!text-[18px] screen-md:mb-[15px]"
            >
              We’re not here to throw buzzwords at you. Our AI experts build real,
              practical solutions that solve the problems you’re facing right now.
            </JakartaText>
          </VRARContent>
          <VRARContent>
            <JakartaText
              tag="p"
              className="leading-[150%] !text-[16px] tracking-[-0.01em] screen-md:!text-[14px] "
            >
              Need to scale? Streamline operations? Deliver more personal experiences?
              We’ve done it and we can do it for you.
            </JakartaText>
          </VRARContent>
        </div>
        <div className="mt-[60px] screen-lg:mt-[40px] screen-md:mt-[30px] ">
          <div className="grid grid-cols-3 screen-lg:grid-cols-2 gap-x-[80px] gap-y-[60px]
          screen-lg:gap-x-[60px] screen-lg:gap-y-[40px] screen-md:gap-x-[20px] screen-md:gap-y-[20px]"
          >
            {features.map((feature, index) => (
              <div key={[feature.title, index].join('_')}>
                <VRARContent>
                  <ImageComponent
                    alt="Feature Icon"
                    src={feature.icon}
                    className="w-[60px] h-[60px] mt-[20px] screen-md:w-[40px] screen-md:h-[40px]"
                  />
                  <JakartaText
                    tag="h3"
                    className="leading-[130%] !text-[24px] tracking-[-0.01em] mt-[30px] mb-[20px]
                   screen-md:mb-[15px] screen-md:!text-[18px]"
                  >
                    {feature.title}
                  </JakartaText>
                  <JakartaText
                    tag="p"
                    className="leading-[150%] !text-[16px] tracking-[-0.01em] screen-md:!text-[14px]"
                  >
                    {feature.description}
                  </JakartaText>
                </VRARContent>
              </div>
            ))}
          </div>
        </div>

        <VRARContent className="flex justify-center pt-[40px] screen-md:pt-[30px]">
          <ButtonLight
            id={ButtonType.LAND2}
            text="View our AI solutions"
            onClick={btnOnClick}
            isJakarta
            styleContainer="max-w-[420px] screen-md:max-w-[330px]"
          />
        </VRARContent>
      </PageContainer>
    </section>
  );
}

export default AiSolutions;
