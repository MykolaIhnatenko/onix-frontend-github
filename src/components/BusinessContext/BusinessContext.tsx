import IBusinessContext from './interfaces/IBusinessContext';
import BusinessContextTemplate from 'components/BusinessContextTemplate/BusinessContextTemplate';
import BusinessContextContent from './BusinessContextContent';

function BusinessContext({
  upTitle, title, subTitle, leftContent, rightContent, subText, blackTheme, background, classes,
}: IBusinessContext) {
  return (
    <BusinessContextTemplate
      background={background}
      upTitle={upTitle}
      title={title}
      subTitle={subTitle}
      subText={subText}
      blackTheme={blackTheme}
      classes={classes}
    >
      <BusinessContextContent
        leftContent={leftContent}
        rightContent={rightContent}
        classes={classes}
      />
    </BusinessContextTemplate>
  );
}

export default BusinessContext;
