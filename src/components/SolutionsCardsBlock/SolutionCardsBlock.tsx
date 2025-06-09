import { ISolutionsCardBlock } from './interfaces/ISolutionsCardBlock';
import SolutionCard from './components/SolutionCard';

function SolutionCardsBlock({ cards }: ISolutionsCardBlock) {
  return (
    <div
      className={`pt-[40px] pb-[50px]
        min-md:pt-[60px] min-md:pb-[20px]
        min-lg:pt-[10px] min-lg:pb-0
      `}
    >
      {cards.map(({
        id, title, text, img, imgTablet, imgMobile, video,
      }) => (
        <SolutionCard
          key={id}
          title={title}
          text={text}
          img={img}
          imgTablet={imgTablet}
          imgMobile={imgMobile}
          video={video}
        />
      ))}
    </div>
  );
}

export default SolutionCardsBlock;
