import React from 'react';

import PageContainer from 'components/PageContainer/PageContainer';
import JakartaTitle from 'components/JakartaTitle/JakartaTitle';
import JakartaText from 'components/JakartaText/JakartaText';
import VRARContent from 'components/VRARContent/VRARContent';

function ThreeStepsBlockTextBlock() {
  return (
    <PageContainer
      className="pt-[100px] pb-[60px] screen-lg:pt-[80px] screen-lg:pb-[40px] screen-md:pt-[60px]
      screen-md:pb-[30px]"
    >
      <div className="max-w-[1080px] min-xxxl:max-w-[1480px]">
        <VRARContent>
          <JakartaTitle className="pb-[40px] screen-lg:pb-[30px] screen-md:pb-[20px]">
            How Onix’s 3-step rescue process solves
            {' '}
            <span className="inline-block">your problem</span>
          </JakartaTitle>
        </VRARContent>
        <VRARContent>
          <JakartaText
            className={`text-[24px]/[1.3] screen-lg:text-[24px]/[1.3] screen-md:text-[18px]/[1.4]
            pb-[30px] screen-lg:pb-[20px] screen-md:pb-[15px]
            tracking-[-0.24px] screen-md:tracking-[-0.18px]`}
          >
            Our
            {' '}
            <span className="font-bold">3-step rescue process</span>
            {' '}
            – Audit &#x2794; Redesign &#x2794; Stabilize – is
            {' '}
            <span className="font-bold">augmented with AI tools</span>
            ,
            helping us deliver
            {' '}
            <span className="font-bold">faster and more precisely than traditional teams</span>
            .
          </JakartaText>
        </VRARContent>
        <VRARContent>
          <JakartaText
            className="text-[16px]/[1.5] screen-md:text-[14px]/[1.5]
            tracking-[-0.16px] screen-md:tracking-[-0.14px]"
          >
            At each step, we leverage AI-assisted code analysis, automated testing, and our deep domain
            expertise for software development services to work faster and smarter.
          </JakartaText>
        </VRARContent>
      </div>
    </PageContainer>
  );
}

export default ThreeStepsBlockTextBlock;
