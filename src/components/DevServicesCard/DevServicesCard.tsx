import ImageComponent from '../Image/Image';
import IDevServicesCard from './interfaces/IDevServicesCard';
import VRARContent from 'components/VRARContent/VRARContent';
import ContentText from 'components/ContentText/ContentText';

function DevServicesCard({
  icon, text,
}: IDevServicesCard) {
  return (
    <div className="pt-[20px] w-full">
      <VRARContent>
        <ImageComponent
          src={icon}
          width={60}
          height={60}
          alt="icon"
          sizes="100vw"
          className="screen-md:w-[40px] screen-md:h-[40px]"
        />
      </VRARContent>
      <VRARContent>
        <ContentText
          marginAbsent
          tag="p"
          className="pt-[30px]"
        >
          {text}
        </ContentText>
      </VRARContent>
    </div>
  );
}

export default DevServicesCard;
