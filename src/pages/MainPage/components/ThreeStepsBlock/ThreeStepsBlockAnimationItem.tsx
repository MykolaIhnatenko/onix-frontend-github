import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import JakartaText from 'components/JakartaText/JakartaText';
import IThreeStepsBlockAnimationItem from 'pages/MainPage/interfaces/IThreeStepsBlockAnimationItem';
import VRARContent from 'components/VRARContent/VRARContent';

function ThreeStepsBlockAnimationItem({
  id, title, content, setActiveImage,
}: IThreeStepsBlockAnimationItem) {
  const { ref, inView } = useInView({
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView && id) {
      setActiveImage(id);
    }
  }, [inView, id]);

  return (
    <div
      ref={ref}
      className="flex flex-col justify-center h-[960px]"
    >
      <VRARContent>
        <JakartaText
          tag="div"
          className="text-[28px]/[1.3] pb-[30px] tracking-[-0.28px] flex items-start"
        >
          <span className="min-w-[40px] pr-[20px]">{id}</span>
          <h3>
            {title}
          </h3>
        </JakartaText>
      </VRARContent>
      {content}
    </div>
  );
}

export default ThreeStepsBlockAnimationItem;
