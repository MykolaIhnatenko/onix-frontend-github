import VRARMainTitle from 'components/VRARMainTitle/VRARMainTitle';
import ImageComponent from '../Image/Image';
import IAnimProjectDetailsVr from './interfaces/IAnimProjectDetailsVr';

function AnimProjectDetailsVr({
  title, background, contentBlock, classes = {},
}: IAnimProjectDetailsVr) {
  return (
    <div
      className={`relative py-[80px] px-[15px] min-md:px-[30px] min-md:py-[80px]
       min-lg:px-[70px] min-lg:py-[120px] min-xxxl:px-[80px] ${classes?.container || ''}`}
    >
      {background && (
        <div className={`absolute bottom-0 left-0 w-full h-full ${classes?.bgContainer || ''}`}>
          <ImageComponent
            src={background}
            fill
            sizes="100vw"
            alt="background"
            className="object-cover"
          />
        </div>
      )}
      {title && (
        <div className={`w-full mb-[30px] min-lg:mb-[40px] ${classes?.titleBox || ''}`}>
          <VRARMainTitle title={title} />
        </div>
      )}
      <div className={`w-full flex flex-col ${classes?.contentBlock || ''}`}>
        {contentBlock}
      </div>
    </div>
  );
}

export default AnimProjectDetailsVr;
