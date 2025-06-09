import ImageComponent from '../Image/Image';
import { IDevelopmentServicesTemplate } from './interfaces/IDevelopmentServicesTemplate';
import DevelopmentServicesItem from './components/DevelopmentServicesItem';
import PageContainer from 'components/PageContainer/PageContainer';
import ItemText from 'components/ItemText/ItemText';
import AccordionWhite from 'components/AccordionWhite/AccordionWhite';
import { AccordionWhiteStyleTypes } from 'constants/AccordionStyleTypes';
import DevelopmentServicesTemplateTitleBlock from 'components/DevelopmentServicesTemplateTitleBlock/DevelopmentServicesTemplateTitleBlock';

function DevelopmentServicesTemplate({
  upTitle, title, description, subTitle, data, accordionOnMobile, background, classes,
  withoutBackground, isMobile, blackTheme, customBackground, backgroundWithAccordion,
}: IDevelopmentServicesTemplate) {
  const getAccordionData = () => data.map(({
    id, number, title: itemTitle, content,
  }) => ({
    id,
    number,
    title: itemTitle,
    content: Array.isArray(content) ? (<ItemText content={content} />) : content,
  }));

  const showBackground = (
    <div className={`absolute left-0 top-0 w-full before:content-[''] before:absolute before:bottom-0
      before:left-0 before:w-full before:h-[90px]
      before:bg-[linear-gradient(180deg,_rgba(253,253,253,0)_0%,_#ffffff_100%)]
      ${blackTheme ? 'before:!bg-[linear-gradient(180deg,_rgba(253,253,253,0)_0%,_#000000_100%)]' : ''}
      ${classes?.background || ''}`}
    >
      <ImageComponent
        className={`w-full object-cover object-[top_left] h-[464px] screen-lg:h-[424px]
          screen-md:h-[280px]
          ${classes?.bgImg || ''}`}
        src={customBackground || background}
        sizes="100vw"
        quality={91}
      />
    </div>
  );

  return (
    <section className={`relative p-[120px_0] screen-xxxl:p-[120px_0] screen-lg:p-[80px_0]
      screen-md:p-[80px_0_60px]
      ${blackTheme ? '!bg-black !text-white' : ''}
      ${classes?.devServices || ''}`}
    >
      {accordionOnMobile ? (
        ((!withoutBackground && !isMobile) || backgroundWithAccordion) && showBackground
      ) : (
        !withoutBackground && showBackground
      )}
      <DevelopmentServicesTemplateTitleBlock
        upTitle={upTitle}
        title={title}
        description={description}
        subTitle={subTitle}
        classes={classes?.titleBlock}
      />
      {isMobile && accordionOnMobile ? (
        <AccordionWhite
          data={getAccordionData()}
          activeFirst
          accordionStyleTypes={AccordionWhiteStyleTypes.ACTIVE_BLACK_TITLE_AND_CONTENT}
          classes={classes?.accordion}
        />
      ) : (
        <PageContainer className={classes?.content || ''}>
          {data?.map(({
            id, number, title: itemTitle, content,
          }) => (
            <DevelopmentServicesItem
              key={id}
              id={id}
              number={number}
              title={itemTitle}
              content={content}
              blackTheme={blackTheme}
              classes={classes?.item}
            />
          ))}
        </PageContainer>
      )}
    </section>
  );
}

export default DevelopmentServicesTemplate;
