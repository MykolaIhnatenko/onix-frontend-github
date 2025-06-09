import MainTitle from 'components/MainTitle/MainTitle';
import IVRARMainTitle from './interfaces/IVRARMainTitle';
import VRARContent from 'components/VRARContent/VRARContent';

function VRARMainTitle({
  id, tag = 'h2', title, capitalize, classes,
}: IVRARMainTitle) {
  return (
    <VRARContent className={classes?.container || ''}>
      <MainTitle
        id={id}
        tag={tag}
        capitalize={capitalize}
        className={classes?.title || ''}
      >
        {title}
      </MainTitle>
    </VRARContent>
  );
}

export default VRARMainTitle;
