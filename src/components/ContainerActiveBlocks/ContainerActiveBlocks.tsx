import MainTitle from 'components/MainTitle/MainTitle';
import { generalSans, ibmPlexMono } from '../../fonts/MainFonts';
import CardsBlock from '../CardsBlock/CardsBlock';
import IContainerActiveBlocks from './interfaces/IContainerActiveBlocks';

function ContainerActiveBlocks({
  data, title, btnTitle, disableInfoBlock, titleBlock, dropBlockBtnVariant, dropBlockVariant,
  idBtn, classes,
}: IContainerActiveBlocks) {
  return (
    <div
      className={`
        max-w-[1920px] mx-auto relative flex flex-col
        screen-md:pt-[40px]
      ${classes?.containerBlock || ''}
      ${generalSans.variable}
      ${ibmPlexMono.variable}`}
    >
      {titleBlock && (
        <MainTitle className={`
          text-[50px] leading-[64px] font-[500]
          p-[80px_70px] w-[70%]
          min-xxxl:p-[80px]
          screen-lg:p-[30px] screen-lg:text-[40px] screen-lg:leading-[56px] screen-lg:w-[90%]
          screen-md:p-[30px_15px] screen-md:text-[25px] screen-md:leading-[35px] screen-md:w-[100%]
          ${classes?.title || ''}`}
        >
          {titleBlock}
        </MainTitle>
      )}
      <CardsBlock
        data={data}
        dropBlockTitle={title}
        dropBlockBtnTitle={btnTitle}
        disableInfoBlock={disableInfoBlock}
        dropBlockBtnVariant={dropBlockBtnVariant}
        disableBg
        dropBlockVariant={dropBlockVariant}
        idBtn={idBtn}
        classes={classes?.cardBlock}
      />
    </div>
  );
}

export default ContainerActiveBlocks;
