import { ReactNode } from 'react';

import VRARContentText from 'components/VRARContentText/VRARContentText';
import VRARContent from 'components/VRARContent/VRARContent';
import VRARContentTextList from 'components/VRARContentTextList/VRARContentTextList';
import IBusinessContextContent from './interfaces/IBusinessContextContent';

function BusinessContextContent({ leftContent, rightContent, classes }: IBusinessContextContent) {
  const getContent = (content: string | string[] | ReactNode, className?: string) => {
    if (typeof content === 'string') {
      return (
        <VRARContentText
          text={content}
          classes={{
            container: 'flex-1',
            text: className || '',
          }}
        />
      );
    }

    if (Array.isArray(content)) {
      return (
        <div className="flex-1">
          <VRARContentTextList
            text={content}
            classes={{
              text: className || '',
            }}
          />
        </div>
      );
    }

    return (
      <VRARContent className="flex-1">
        {content}
      </VRARContent>
    );
  };

  return (
    <div className={`
        flex justify-between gap-[60px] screen-xxxl:gap-[40px] screen-xxxl:max-w-[1300px]
        screen-lg:flex-col screen-lg:max-w-full screen-lg:gap-[30px] screen-md:gap-[20px]
        ${classes?.contentContainer || ''}
      `}
    >
      {getContent(leftContent, classes?.leftContent)}
      {getContent(rightContent, classes?.rightContent)}
    </div>
  );
}

export default BusinessContextContent;
