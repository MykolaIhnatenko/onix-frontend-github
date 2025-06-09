import { IIndustrySection } from './interfaces/IIndustrySection';
import PageContainer from '../PageContainer/PageContainer';
import ContentText from '../ContentText/ContentText';
import MainTitleWithoutSize from 'components/MainTitleWithoutSize/MainTitleWithoutSize';

function IndustrySection({
  sectionTitle, firstText, secondText, data, classes,
}: IIndustrySection) {
  return (
    <section>
      <PageContainer
        className={`relative pt-[80px] pb-[80px] min-lg:pb-[100px]
          min-lg:flex min-lg:gap-[3%] min-lg:justify-between ${classes?.container || ''}`}
      >
        <div className="min-lg:grow-0 min-lg:basis-[45%] min-lg:relative">
          <div className="min-lg:sticky min-lg:top-[80px]">
            {sectionTitle}
            {firstText}
            {secondText}
          </div>
        </div>
        <ul className={`list-none min-lg:grow-0 min-lg:basis-[47.9%] ${classes?.items || ''}`}>
          {data.map(({ id, title, text }) => (
            <li
              key={id}
              className={`gap-[5%] p-[15px_0] border-t border-t-[#D9D9D9]
                d-flex d-justify-between ${classes?.item || ''}`}
            >
              <MainTitleWithoutSize
                tag="h3"
                className={`font-medium text-[20px] leading-[28px] grow-0 basis-[46%]
                min-md:text-[24px] min-md:leading-[34px] min-md:basis-[35%]
                min-lg:grow-0 min-lg:basis-[33%] ${classes?.itemTitle || ''}`}
              >
                {title}
              </MainTitleWithoutSize>
              <ContentText
                tag="p"
                className={`!m-0 grow-0 basis-[44%] min-md:basis-[60%]
                  min-lg:basis-[62%] min-lg:pt-[12px] ${classes?.itemText || ''}`}
              >
                {text}
              </ContentText>
            </li>
          ))}
        </ul>
      </PageContainer>
    </section>
  );
}

export default IndustrySection;
