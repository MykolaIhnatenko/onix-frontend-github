import VRARContent from 'components/VRARContent/VRARContent';
import IVRARMainTitleWithoutSize from './interfaces/IVRARMainTitleWithoutSize';
import MainTitleWithoutSize from 'components/MainTitleWithoutSize/MainTitleWithoutSize';

function VRARMainTitleWithoutSize({
  id, tag = 'h2', title, capitalize, classes,
}: IVRARMainTitleWithoutSize) {
  return (
    <VRARContent className={classes?.container || ''}>
      <MainTitleWithoutSize
        id={id}
        tag={tag}
        capitalize={capitalize}
        className={classes?.title || ''}
      >
        {title}
      </MainTitleWithoutSize>
    </VRARContent>
  );
}

export default VRARMainTitleWithoutSize;
