import JakartaText from 'components/JakartaText/JakartaText';
import VRARContent from 'components/VRARContent/VRARContent';
import Icon from '../../../../assets/icon';
import IThreeStepsBlockListItem from 'pages/MainPage/interfaces/IThreeStepsBlockListItem';

function ThreeStepsBlockListItem({ item }: IThreeStepsBlockListItem) {
  return (
    <li
      className="pb-[10px] last:pb-0"
    >
      <VRARContent className="flex pb-[10px] last:pb-0">
        <Icon.IconListMarker className="mt-[10px] mr-[10px] screen-md:mt-[8px] flex-shrink-0" />
        <JakartaText
          className="text-[16px]/[1.5] screen-md:text-[14px]/[1.5]
          tracking-[-0.16px] screen-md:tracking-[-0.14px]"
        >
          {item}
        </JakartaText>
      </VRARContent>
    </li>
  );
}

export default ThreeStepsBlockListItem;
