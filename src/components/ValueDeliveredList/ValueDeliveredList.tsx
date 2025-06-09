import VRARMainTitle from 'components/VRARMainTitle/VRARMainTitle';
import ItemList from 'components/ItemList/ItemList';
import IValueDeliveredList from './interfaces/IValueDeliveredList';
import PageContainer from 'components/PageContainer/PageContainer';

function ValueDeliveredList({
  contentTitle, contentList, bottomText, classes,
}: IValueDeliveredList) {
  return (
    <PageContainer className={`
        pt-[80px] pb-[120px] screen-lg:pt-[60px] screen-lg:pb-[80px] ${classes?.container || ''}
      `}
    >
      <div className={`
          bg-[#F9F9F9] border-l-2 border-solid border-[#B6EDEE] p-[40px] screen-md:p-[30px]
          ${classes?.content || ''}
        `}
      >
        <VRARMainTitle
          title={contentTitle}
          tag="h3"
          classes={{
            title: `
              mb-[30px] screen-md:mb-[20px] max-w-[1080px] min-xxxl:max-w-[1480px] screen-lg:max-w-full
              !text-[24px]/[34px] screen-md:!text-[20px]/[28px]
              ${classes?.contentTitle || ''}
            `,
          }}
        />
        <ItemList
          list={contentList}
          marginBottomAbsent
          withAnimate
        />
      </div>
      {bottomText && (
        <VRARMainTitle
          title={bottomText}
          tag="p"
          classes={{
            container: 'flex justify-center !max-w-full',
            title: `
              max-w-[1080px] min-xxxl:max-w-[1480px] screen-lg:max-w-full
              !text-[24px]/[34px] screen-md:!text-[20px]/[28px] text-center mt-[80px] screen-lg:mt-[60px] 
              ${classes?.bottomText || ''}
            `,
          }}
        />
      )}
    </PageContainer>
  );
}

export default ValueDeliveredList;
