import ContentText from '../../../components/ContentText/ContentText';
import MainTitleWithoutSize from 'components/MainTitleWithoutSize/MainTitleWithoutSize';
import { ICardSliderItem } from '../../../components/CardSlider/interfaces/ICardSlider';

const titleStyles = `mb-[30px] text-[30px] leading-[40px] font-[500]
screen-md:mb-[15px] screen-md:text-[20px] screen-md:leading-[28px]`;
const textStyles = `!m-0 !text-[18px] !leading-[26px] font-[400] 
screen-md:!text-[14px] screen-md:!leading-[20px]`;
const firstTextStyles = '!pb-[30px] screen-md:!pb-[20px]';

const machineLCardSliderData: ICardSliderItem[] = [
  {
    id: '01',
    title: (
      <MainTitleWithoutSize
        tag="h3"
        className={titleStyles}
      >
        ML Consulting
      </MainTitleWithoutSize>
    ),
    text: (
      <>
        <ContentText tag="p" className={`${textStyles} ${firstTextStyles}`}>
          Ready to harness the power of ML technology for your business but unsure where to start?
          Look no further! All you need is your dataset ready, and we&apos;ll show you how to put it to work!
        </ContentText>
        <ContentText tag="p" className={textStyles}>
          After an in-depth analysis of your business goals, our experts will demonstrate how you
          can use ML in your industry to meet your concrete needs.
        </ContentText>
      </>
    ),
  },
  {
    id: '02',
    title: (
      <MainTitleWithoutSize tag="h3" className={titleStyles}>
        ML Development
      </MainTitleWithoutSize>
    ),
    text: (
      <>
        <ContentText tag="p" className={`${textStyles} ${firstTextStyles}`}>
          Onix specializes in custom machine learning solutions development. We understand how crucial
          it is to gather the right data, prepare it properly, and choose the best model.
        </ContentText>
        <ContentText tag="p" className={textStyles}>
          That&apos;s why our ML experts will be with you every step of the way, from planning and testing
          to launching and keeping things running smoothly.
        </ContentText>
      </>
    ),
  },
  {
    id: '03',
    title: (
      <MainTitleWithoutSize tag="h3" className={titleStyles}>
        Research and Technological Dev
      </MainTitleWithoutSize>
    ),
    text: (
      <>
        <ContentText tag="p" className={`${textStyles} ${firstTextStyles}`}>
          Want to stay ahead of the curve? That’s where our R&D service comes in handy. Our team
          is here to help you innovate and succeed in today&apos;s ever-changing world.
        </ContentText>
        <ContentText tag="p" className={textStyles}>
          We assist you in selecting the best-fit technology and devices for your ML product, ensuring
          long-term profitability and keeping you ahead in the competitive race.
        </ContentText>
      </>
    ),
  },
  {
    id: '04',
    title: (
      <MainTitleWithoutSize tag="h3" className={titleStyles}>
        Maintenance & Support
      </MainTitleWithoutSize>
    ),
    text: (
      <>
        <ContentText tag="p" className={`${textStyles} ${firstTextStyles}`}>
          At Onix, we&apos;re dedicated to the long-term success of your ML solution. Our maintenance and
          support services keep your products running smoothly even after development.
        </ContentText>
        <ContentText tag="p" className={textStyles}>
          This involves upgrading your ML products based on real user feedback, fine-tuning
          performance,
          {' '}
          <span className="inline-block">and adapting</span>
          {' '}
          to meet your evolving needs for lasting success.
        </ContentText>
      </>
    ),
  },
  {
    id: '05',
    title: (
      <MainTitleWithoutSize tag="h3" className={titleStyles}>
        Prototyping and Proof of Concept
      </MainTitleWithoutSize>
    ),
    text: (
      <>
        <ContentText tag="p" className={`${textStyles} ${firstTextStyles}`}>
          Before any investment commitment, we start by exploring your product idea. Our experts
          will create a demo of your ML solution within just a week, giving you a quick glimpse
          into your project&apos;s potential.
        </ContentText>
        <ContentText tag="p" className={textStyles}>
          We’ll validate key features and assess
          {' '}
          <span className="inline-block">the feasibility</span>
          {' '}
          of your concept. This step comes
          before full-scale development, giving you a strong starting point for your project.
        </ContentText>
      </>
    ),
  },
  {
    id: '06',
    title: (
      <MainTitleWithoutSize tag="h3" className={titleStyles}>
        ML Integration
      </MainTitleWithoutSize>
    ),
    text: (
      <ContentText tag="p" className={textStyles}>
        We offer ML integration as part of our development services, allowing you to integrate
        ML features into your existing applications seamlessly. Our developers will help you
        securely connect data sources and select the best-suited ML model for your requirements.
        We ensure the ML models&apos; accuracy and the integrated system&apos;s scalability.
      </ContentText>
    ),
  },
];

export default machineLCardSliderData;
