import { useRouter } from 'next/router';
import { useState } from 'react';

import MainTitleWithoutSize from 'components/MainTitleWithoutSize/MainTitleWithoutSize';
import ContentText from '../../../components/ContentText/ContentText';
import useBackground from '../../../hook/useBackground';
import BlogsCase from '@/images/blogsPage/img_blogs_case@2x.webp';
import BlogsCaseMobile from '@/images/blogsPage/img_blogs_case_mobile@2x.webp';
import BlogsPortfolio from '@/images/blogsPage/img_blogs_portfolio@2x.webp';
import BlogsPortfolioMobile from '@/images/blogsPage/img_blogs_portfolio_mobile@2x.webp';
import { MD_DEVICE } from '../../../constants/constants';
import PageLinks from '../../../constants/PageLinks';
import BlogButtonSectionImage from '../../../components/BlogButtonSection/components/BlogButtonSectionImage';
import switchSectionData from '../data/SwitchSectionData';
import ButtonPrimary from 'components/UI/ButtonPrimary/ButtonPrimary';

function Switch() {
  const router = useRouter();
  const paddingStyle = 'min-md:pl-[210px] min-xl:pl-[478px]';

  const caseImg = useBackground(
    BlogsCase,
    BlogsCase,
    BlogsCaseMobile,
    MD_DEVICE,
  );

  const portfolioImg = useBackground(
    BlogsPortfolio,
    BlogsPortfolio,
    BlogsPortfolioMobile,
    MD_DEVICE,
  );

  const [active, setActive] = useState<number>(0);

  const onClickHandler = (btnId: number) => setActive(btnId);

  return (
    <>
      <div>
        <div className={`flex ${paddingStyle}`}>
          {switchSectionData.map(({ title }, index) => (
            <p
              key={[title, index].join('_')}
              className={`border-[2px] border-black bg-white uppercase font-medium
              text-[15px] leading-[22px] tracking-[0.2px] p-[9px_0] min-w-[166px] min-md:min-w-[209px]
              flex justify-center transition-colors duration-[500ms] ease-in-out
              min-lg:cursor-pointer min-lg:hover:!bg-black min-lg:hover:text-white
              first:rounded-[21px_0_0_21px] first:border-r-[1px]
              last:rounded-[0_21px_21px_0] last:border-l-[1px] ${active === index ? '!bg-[#B6EDEE]' : ''}`}
              onClick={() => onClickHandler(index)}
              onKeyDown={() => onClickHandler(index)}
              aria-hidden="true"
            >
              {title}
            </p>
          ))}
        </div>
        <div
          className={`pt-[30px] min-md:pt-[26px] min-xl:pt-[40px]
          ${paddingStyle} ${active === 0 ? 'pb-[64px] min-md:pb-[28px]' : 'pb-[40px] min-md:pb-0'}`}
        >
          <MainTitleWithoutSize
            className="font-medium text-[30px] leading-[40px] min-md:text-[50px] min-md:leading-[64px]"
          >
            {switchSectionData[active].title}
          </MainTitleWithoutSize>
          <ContentText
            tag="p"
            className="!m-0 p-[30px_0] min-md:p-[40px_0] min-md:!text-[20px] min-md:!leading-[28px]
              min-xl:max-w-[760px]"
          >
            {switchSectionData[active].description}
          </ContentText>
          <ButtonPrimary
            text={switchSectionData[active].btnTitle}
            styleContainer="!max-w-[330px] min-md:!max-w-[478px] min-xl:!max-w-[420px]"
            onClick={() => router.push(active === 0 ? PageLinks.CASE_STUDIES : PageLinks.DESIGN_PORTFOLIO)}
          />
        </div>
      </div>
      <BlogButtonSectionImage img={active === 0 ? caseImg : portfolioImg} alt="project" />
    </>
  );
}

export default Switch;
