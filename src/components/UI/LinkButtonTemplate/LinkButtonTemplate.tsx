import Arrow from '../Arrow/Arrow';
import defaultStyles from '../defaultStyles';
import ILinkButtonTemplate from '../interfaces/ILinkButtonTemplate';
import LinkComponent from 'components/Link/Link';

function LinkButtonTemplate({
  text, styleContainer, hasArrow = true, id,
  arrowVariant, path, fontSizeSmallOnMobile, classes,
}: ILinkButtonTemplate) {
  return (
    <LinkComponent
      id={id}
      href={path}
      absolute
      className={`
        ${defaultStyles.container}
        ${classes?.customContainer || ''}
        ${styleContainer || ''}
        
        ${classes?.container || ''}
      `}
    >
      <span className={`${defaultStyles.content} ${classes?.customContent || ''} ${classes?.content || ''}`}>
        <span className={`
            ${defaultStyles.text}
            ${fontSizeSmallOnMobile ? defaultStyles.fontSizeSmallOnMobile : ''}
            ${classes?.textContainer || ''}
          `}
        >
          {text}
        </span>
        {hasArrow && <Arrow arrowVariant={arrowVariant} classes={classes} />}
      </span>
    </LinkComponent>
  );
}

export default LinkButtonTemplate;
