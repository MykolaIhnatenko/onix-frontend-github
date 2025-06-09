import MainTitleWithoutSize from 'components/MainTitleWithoutSize/MainTitleWithoutSize';
import PageContainer from '../PageContainer/PageContainer';
import SecurityStandardsItem from './components/SecurityStandardsItem';
import { ISecurityStandards } from './interfaces/ISecurityStandards';
import ContentText from 'components/ContentText/ContentText';

function SecurityStandards({ pageTitle, data }: ISecurityStandards) {
  return (
    <PageContainer className="pt-[80px]">
      <MainTitleWithoutSize
        className="max-w-[1070px] pb-[40px] text-[50px] leading-[64px]
        screen-lg:text-[40px] screen-lg:leading-[56px]
        screen-md:pb-[30px] screen-md:text-[25px] screen-md:leading-[35px]"
      >
        {pageTitle}
      </MainTitleWithoutSize>
      <div className="pb-[80px] screen-lg:pb-[60px]">
        <ContentText
          tag="p"
          className="max-w-[551px] !m-0 !text-[18px] !leading-[26px]
            screen-lg:pb-[40px] screen-md:pb-[30px] screen-md:!text-[16px]
            screen-md:!leading-[24px]"
        >
          At Onix, we prioritize the security and compliance of our custom software development for the
          healthcare industry, adhering strictly to global industry regulations, standards, and best practices.
        </ContentText>
        <div className="flex justify-end">
          <ContentText
            tag="p"
            className="max-w-[551px] !m-0 !text-[18px] !leading-[26px]
              screen-md:!text-[16px] screen-md:!leading-[24px]"
          >
            We understand the importance of safeguarding sensitive patient information and clinical
            data, and our expertise in healthcare security ensures that your solutions are protected.
          </ContentText>
        </div>
      </div>
      <p
        className="m-0 pb-[40px] text-center text-[24px] leading-[34px]
          font-medium font-generalSans screen-md:text-start
          screen-md:text-[20px] screen-md:leading-[28px]"
      >
        Our healthcare security expertise encompasses:
      </p>
      <div className="relative">
        {data.map(({
          id, icon, image, text, title, background,
        }) => (
          <div
            key={id}
            className="mx-auto w-[964px] sticky bottom-[50px]
              [&:nth-child(1)]:z-[3] [&:nth-child(2)]:z-[2] [&:nth-child(3)]:z-[1]
              screen-xl:w-[808px] screen-lg:w-[708px]
              screen-md:w-full screen-md:bottom-[-350px]"
          >
            <SecurityStandardsItem
              id={id}
              icon={icon}
              image={image}
              title={title}
              text={text}
              background={background}
            />
          </div>
        ))}
      </div>
    </PageContainer>
  );
}

export default SecurityStandards;
