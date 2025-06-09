import { ReactNode } from 'react';

import IBusinessContextDiagonal from './interfaces/IBusinessContextDiagonal';
import BusinessContextTemplate from 'components/BusinessContextTemplate/BusinessContextTemplate';
import VRARContentText from 'components/VRARContentText/VRARContentText';
import VRARContent from 'components/VRARContent/VRARContent';
import VRARContentTextList from 'components/VRARContentTextList/VRARContentTextList';

function BusinessContextDiagonal({
  upTitle, title, subTitle, leftContent, rightContent, subText, blackTheme, background, classes,
}: IBusinessContextDiagonal) {
  const getContent = (content: string | string[] | ReactNode, className: string, secondContent?: boolean) => {
    const secondContentClasses = secondContent ? 'mt-[40px] screen-lg:mt-[30px] screen-md:mt-[20px]' : '';

    if (typeof content === 'string') {
      return (
        <VRARContentText
          text={content}
          classes={{
            container: 'min-lg:max-w-[1300px] min-xxxl:max-w-[1480px]',
            text: `
              min-lg:max-w-[630px] min-xxxl:max-w-[710px]
              ${secondContentClasses}
              ${className}
            `,
          }}
        />
      );
    }

    if (Array.isArray(content)) {
      return (
        <div className={`
            min-lg:max-w-[1300px] min-xxxl:max-w-[1480px]
            ${secondContentClasses}
          `}
        >
          <VRARContentTextList
            text={content}
            classes={{
              text: `min-lg:max-w-[630px] min-xxxl:max-w-[710px] ${className}`,
            }}
          />
        </div>
      );
    }

    return (
      <VRARContent className={`
          min-lg:max-w-[1300px] min-xxxl:max-w-[1480px]
          ${secondContentClasses}
          ${className}
        `}
      >
        {content}
      </VRARContent>
    );
  };

  return (
    <BusinessContextTemplate
      background={background}
      upTitle={upTitle}
      title={title}
      subTitle={subTitle}
      subText={subText}
      classes={classes}
      blackTheme={blackTheme}
    >
      {leftContent && getContent(leftContent, classes?.leftContent || '')}
      {rightContent && getContent(
        rightContent,
        `min-lg:ml-auto ${classes?.rightContent || ''}`,
        true,
      )}
    </BusinessContextTemplate>
  );
}

export default BusinessContextDiagonal;
