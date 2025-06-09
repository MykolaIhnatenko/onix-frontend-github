import IBusinessContextWithTable from './interfaces/IBusinessContextWithTable';
import BusinessContextTemplate from 'components/BusinessContextTemplate/BusinessContextTemplate';
import TwoBorderedColumnsAnim from 'components/TwoBorderedColumnsAnim/TwoBorderedColumnsAnim';
import VRARContentText from 'components/VRARContentText/VRARContentText';

function BusinessContextWithTable({
  upTitle, title, subTitle, subText, content, leftContent, rightContent, withoutAnimateTable, classes, blackTheme,
}: IBusinessContextWithTable) {
  return (
    <BusinessContextTemplate
      upTitle={upTitle}
      title={title}
      subTitle={subTitle}
      subText={subText}
      blackTheme={blackTheme}
      classes={classes}
    >
      <TwoBorderedColumnsAnim
        columns={content}
        blackTheme={blackTheme}
        withoutAnimateTable={withoutAnimateTable}
        classes={classes}
      />
      {leftContent && rightContent && (
        <div className={`
            flex justify-between gap-[60px] screen-xxxl:gap-[40px] screen-xxxl:max-w-[1300px]
            screen-lg:flex-col screen-lg:max-w-full screen-lg:gap-[30px] screen-md:gap-[20px]
            mt-[40px] screen-md:mt-[30px]
            ${classes?.contentContainer || ''}
          `}
        >
          <VRARContentText
            text={leftContent}
            classes={{
              container: 'flex-1',
              text: classes?.leftContent || '',
            }}
          />
          <VRARContentText
            text={rightContent}
            classes={{
              container: 'flex-1',
              text: classes?.rightContent || '',
            }}
          />
        </div>
      )}
    </BusinessContextTemplate>
  );
}

export default BusinessContextWithTable;
