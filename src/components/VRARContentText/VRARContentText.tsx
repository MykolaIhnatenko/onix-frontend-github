import IVRARContentText from './interfaces/IVRARContentText';
import VRARContent from 'components/VRARContent/VRARContent';

function VRARContentText({
  text,
  tag: Tag = 'p',
  smallFontSizeOnMobile,
  classes,
}: IVRARContentText) {
  return (
    <VRARContent className={classes?.container || ''}>
      <Tag className={`font-ibmPlexMono font-normal text-[18px]/[26px] screen-md:text-[16px]/[24px]
          ${smallFontSizeOnMobile ? 'screen-md:!text-[14px]/[20px]' : ''}
          ${classes?.text || ''}
        `}
      >
        {text}
      </Tag>
    </VRARContent>
  );
}

export default VRARContentText;
