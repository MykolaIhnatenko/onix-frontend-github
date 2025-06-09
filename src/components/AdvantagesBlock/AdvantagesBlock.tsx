import PageContainer from 'components/PageContainer/PageContainer';
import MainTitle from '../MainTitle/MainTitle';
import AdvantagesBlockItem from './components/AdvantagesBlockItem';
import IAdvantagesBlock from './interfaces/IAdvantagesBlock';
import ImageComponent from 'components/Image/Image';

function AdvantagesBlock({ blockTitle, data, classes }: IAdvantagesBlock) {
  return (
    <div className={`
        pt-[80px] screen-lg:py-[80px] screen-md:pt-[60px]
        ${classes?.section || ''}
      `}
    >
      {blockTitle && (
        <PageContainer className="w-full">
          <MainTitle className={`pb-[60px] screen-lg:pb-[50px] screen-md:pb-[40px] ${classes?.title || ''}`}>
            {blockTitle}
          </MainTitle>
        </PageContainer>
      )}
      <div className={`
          relative grid grid-cols-2 grid-rows-3 gap-y-[80px] screen-lg:block screen-md:gap-[60px]
          ${classes?.content || ''}
        `}
      >
        {data.map(({
          id, image, title, text, btnText, idBtn,
        }, index) => (
          (index % 2 === 0) ? (
            <div
              key={id}
              className={`
                sticky top-[70px] screen-lg:static screen-lg:top-0 screen-lg:p-[0_30px_40px]
                screen-md:p-[0_15px_30px]
                ${classes?.imageContainer || ''}
              `}
            >
              {image && (
                <ImageComponent
                  src={image}
                  alt="advantage_image"
                  sizes="100vw"
                  className={`
                    object-cover h-[720px] w-full screen-lg:h-[708px] screen-md:h-auto
                    ${classes?.image || ''}
                  `}
                />
              )}
            </div>
          ) : (
            <AdvantagesBlockItem
              key={id}
              title={title}
              text={text}
              btnText={btnText}
              idBtn={idBtn}
              classes={classes}
            />
          )
        ))}
      </div>
    </div>
  );
}

export default AdvantagesBlock;
