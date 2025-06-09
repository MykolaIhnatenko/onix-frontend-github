import MainTitle from '../MainTitle/MainTitle';
import IAboutProjectProps from './interfaces/IAboutProjectProps';
import AboutProjectBlock from './AboutProjectBlock';
import VRARContent from '../VRARContent/VRARContent';

function AboutProjectSection({
  title, content, subtitle, variant,
}: IAboutProjectProps) {
  return (
    <section
      className={`bg-black text-white ${variant?.section || ''}`}
    >
      <div
        className={`px-4 py-20 md:py-20 md:px-6 lg:py-20 lg:px-8 xl:px-20
                   screen-xxxl:px-[70px] screen-xxxl:py-[120px]
                   screen-lg:px-[30px] screen-lg:py-[80px]
                   screen-md:px-[15px] screen-md:py-[80px]
                   min-xxxl:px-[80px] min-xxxl:py-[120px] ${variant?.container || ''}`}
      >
        <VRARContent>
          <MainTitle
            tag="h2"
            className={`max-w-[1080px]
                       min-xxxl:max-w-[1480px] ${variant?.mainTitle || ''}`}
          >
            {title}
          </MainTitle>
          {subtitle && (
            <p
              className={`font-ibmPlexMono mt-10 text-[18px] leading-[1.45] max-w-[1080px]
                         min-xxxl:max-w-[1480px]
                         screen-lg:mt-10
                         screen-md:mt-[30px] screen-md:text-[16px] screen-md:leading-[1.5]
                         ${variant?.subTitle || ''}`}
            >
              {subtitle}
            </p>
          )}
        </VRARContent>
        <AboutProjectBlock content={content} variant={variant?.content} />
      </div>
    </section>
  );
}

export default AboutProjectSection;
