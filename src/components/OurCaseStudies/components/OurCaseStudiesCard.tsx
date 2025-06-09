import IOurCaseStudiesCard from '../interfaces/IOurCaseStudiesCard';
import Icons from '../../../assets/icon';
import MainTitle from 'components/MainTitle/MainTitle';
import ImageComponent from 'components/Image/Image';

function OurCaseStudiesCard({
  id, title, descLeft, descRight, image, goToPage, classes, whiteTheme,
}: IOurCaseStudiesCard) {
  return (

    <div
      role="presentation"
      onClick={goToPage}
      className={`
        w-full min-h-[404px] border-2 border-white transition-all duration-1000 ease-in-out relative
        flex flex-col justify-between bg-transparent p-[40px] overflow-hidden cursor-pointer screen-lg:p-[30px]
        screen-lg:border-transparent screen-lg:min-h-[360px] screen-lg:cursor-default screen-md:min-h-[330px]
        screen-md:p-[15px] text-color-white screen-lg:border-0 group hover:!border-transparent  
        ${whiteTheme ? `!border-color-black !text-color-black min-lg:hover:!text-color-white
          screen-lg:!text-color-white` : ''}  
        ${classes?.card || ''}
      `}
    >
      <div className="w-full flex items-center justify-between z-10">
        <MainTitle
          tag="span"
          className="!text-[36px]/[46px] screen-md:!text-[20px]/[28px]"
        >
          {id}
        </MainTitle>
        <Icons.IconArrowWhite className="hidden screen-lg:block" />
      </div>
      <div className="w-full flex justify-center text-center z-10">
        <MainTitle
          tag="h3"
          className={`!text-[50px]/[64px] screen-md:!text-[30px]/[40px] ${classes?.titleCard || ''}`}
        >
          {title}
        </MainTitle>
      </div>
      <div className="w-full flex items-center justify-between z-10">
        <MainTitle
          tag="p"
          className="!text-[30px]/[40px] screen-lg:!text-[24px]/[34px] screen-md:!text-[14px]/[28px]"
        >
          {descLeft}
        </MainTitle>
        <MainTitle
          tag="p"
          className="!text-[30px]/[40px] screen-lg:!text-[24px]/[34px] screen-md:!text-[14px]/[28px]"
        >
          {descRight}
        </MainTitle>
      </div>
      <div className={`
          w-full absolute left-0 top-0 opacity-0 scale-[1.4] origin-center transition-all
          duration-1000 ease-in-out screen-lg:opacity-100 screen-lg:scale-100
          h-[400px] block screen-lg:h-[360px] screen-md:h-[330px]
          group-hover:opacity-100 group-hover:scale-100 group-hover:origin-center
        `}
      >
        <ImageComponent
          src={image}
          alt="imageCard"
          priority
          quality={94}
          fill
          sizes="100vw"
          className="object-cover object-left"
        />
      </div>
    </div>
  );
}

export default OurCaseStudiesCard;
