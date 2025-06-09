import IVRARContentTextList from './interfaces/IVRARContentTextList';
import VRARContent from 'components/VRARContent/VRARContent';

function VRARContentTextList({
  text,
  tag: Tag = 'p',
  smallFontSizeOnMobile,
  classes,
}: IVRARContentTextList) {
  return (
    <>
      {text.map((item, index) => (
        <VRARContent className={classes?.container || ''}>
          <Tag
            className={`
              ${index !== (text.length - 1) ? 'mb-[30px] screen-md:mb-[20px]' : ''}
              font-ibmPlexMono font-normal text-[18px]/[26px] screen-md:text-[16px]/[24px]
              ${smallFontSizeOnMobile ? 'screen-md:!text-[14px]/[20px]' : ''}
              ${classes?.text || ''}
            `}
          >
            {item}
          </Tag>
        </VRARContent>
      ))}
    </>
  );
}

export default VRARContentTextList;
