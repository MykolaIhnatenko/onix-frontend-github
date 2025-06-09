import { IDevelopmentServicesTemplateTitleBlock } from './interfaces/IDevelopmentServicesTemplateTitleBlock';
import VRARContent from 'components/VRARContent/VRARContent';
import MainTitle from 'components/MainTitle/MainTitle';
import ContentText from 'components/ContentText/ContentText';
import PageContainer from 'components/PageContainer/PageContainer';
import VRARMainTitle from 'components/VRARMainTitle/VRARMainTitle';

function DevelopmentServicesTemplateTitleBlock({
  upTitle, title, description, subTitle, classes,
}: IDevelopmentServicesTemplateTitleBlock) {
  return (
    <PageContainer className={classes?.titleContainer || ''}>
      {upTitle && (
        <VRARContent>
          <ContentText
            marginAbsent
            tag="p"
            className="!mb-[20px] screen-md:!mb-[15px]"
          >
            {upTitle}
          </ContentText>
        </VRARContent>
      )}
      {title && (
        <VRARContent>
          <MainTitle
            className={`max-w-[1480px] mb-[40px] screen-xxxl:max-w-[1080px]
              screen-lg:max-w-full screen-md:mb-[30px]
              ${classes?.title || ''}`}
          >
            {title}
          </MainTitle>
        </VRARContent>
      )}
      {description && (
        typeof description === 'string' ? (
          <VRARContent>
            <ContentText
              marginAbsent
              tag="p"
              className={`max-w-[630px] !mb-[40px] screen-xxxl:max-w-[577px] screen-md:!mb-[30px]
                ${classes?.desc || ''}`}
            >
              {description}
            </ContentText>
          </VRARContent>
        ) : (
          description
        )
      )}
      {subTitle && (
        <VRARMainTitle
          tag="p"
          title={subTitle}
          classes={{
            title: `
              !text-[40px]/[56px] screen-lg:!text-[36px]/[46px] screen-md:!text-[20px]/[28px]
              m-[80px_0_40px] screen-lg:m-[60px_0_40px] screen-md:m-[40px_0_30px]
              ${classes?.subTitle || ''}
            `,
          }}
        />
      )}
    </PageContainer>
  );
}

export default DevelopmentServicesTemplateTitleBlock;
