import ContentText from 'components/ContentText/ContentText';
import { IDevelopmentServicesItem } from '../interfaces/IDevelopmentServicesTemplate';
import MainTitleWithoutSize from 'components/MainTitleWithoutSize/MainTitleWithoutSize';
import VRARContent from 'components/VRARContent/VRARContent';

function DevelopmentServicesItem({
  number, title, content, blackTheme, classes,
}: IDevelopmentServicesItem) {
  const textStyles = 'text-[24px] leading-[34px] screen-md:text-[20px] screen-md:leading-[28px]';

  return (
    <div className={`
        flex justify-between relative p-[40px_0] gap-[40px] border-b-[2px]
        border-[var(--color-black)] screen-lg:flex-col screen-lg:p-[30px_0]
        screen-lg:gap-[20px] screen-md:p-[20px_0] last:border-b-0 last:!pb-0
        ${blackTheme ? 'border-white' : ''}
        ${classes?.devServicesItem || ''}
      `}
    >
      <VRARContent className={`flex w-[674px] min-w-[674px] screen-xxxl:w-[394px] screen-xxxl:min-w-[394px]
        screen-lg:w-full screen-lg:min-w-full ${classes?.containerItemLeft || ''}`}
      >
        {number && (
          <MainTitleWithoutSize
            tag="span"
            className={`${textStyles} w-[30px] mr-[45px] screen-lg:mr-[30px]
              screen-md:mr-[15px] ${classes?.number || ''}`}
          >
            {number}
          </MainTitleWithoutSize>
        )}
        <MainTitleWithoutSize tag="h3" className={`${textStyles} ${classes?.title || ''}`}>
          {title}
        </MainTitleWithoutSize>
      </VRARContent>
      <div className={`max-w-[850px] w-full screen-xxxl:max-w-[660px] screen-lg:max-w-full
        ${classes?.containerItemRight || ''}`}
      >
        {Array.isArray(content) ? content.map((item, index) => (
          <VRARContent key={['text', index].join('_')} className="pb-[30px] screen-md:pb-[20px] last:pb-0">
            <ContentText tag="p" marginAbsent>
              {item}
            </ContentText>
          </VRARContent>
        )) : content }
      </div>
    </div>
  );
}

export default DevelopmentServicesItem;
