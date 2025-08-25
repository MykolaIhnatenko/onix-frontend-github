import IBusinessContext from './interfaces/IBusinessContext';
import BusinessContextTemplate from 'components/BusinessContextTemplate/BusinessContextTemplate';
import BusinessContextContent from './BusinessContextContent';

function BusinessContext({
  upTitle, title, subTitle, leftContent, rightContent, subText,
  blackTheme, background, classes, isJakarta, isButton, buttonText,
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
      isJakarta={isJakarta}
      isButton={isButton}
      buttonText={buttonText}
    >
      <BusinessContextContent
        leftContent={leftContent}
        rightContent={rightContent}
        isJakarta={isJakarta}
        classes={classes}
      />
    </BusinessContextTemplate>
  );
}

export default BusinessContext;
