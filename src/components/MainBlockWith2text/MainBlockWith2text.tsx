import MainTitle from 'components/MainTitle/MainTitle';
import ContentText from 'components/ContentText/ContentText';
import IMainBlockWith2text from './interfaces/IMainBlockWith2text';
import ImageComponent from 'components/Image/Image';

function MainBlockWith2text({
  blockBg, firstText, rightImg, secondText, title,
}: IMainBlockWith2text) {
  return (
    <div className="relative overflow-visible min-h-screen screen-lg:min-h-[100%]">
      <div className="absolute inset-0 w-full h-full">
        <ImageComponent
          src={blockBg}
          alt="MainBackground"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute bottom-[-1px] w-full h-24 bg-gradient-to-t from-white to-transparent" />
      </div>
      <div className="relative flex h-screen flex-col screen-lg:h-full">
        <div
          className="
            min-xxxl:px-[80px] min-xxxl:pb-[80px]
            flex flex-col justify-between pt-[154px] w-[53%] px-[70px] h-[100%] pb-[70px]
            screen-xl:w-full
            screen-lg:px-[30px] screen-lg:pb-[80px]
            screen-md:px-[15px] screen-md:pt-[139px] screen-md:pb-[33px]
          "
        >
          <div className="flex flex-col">
            <MainTitle
              tag="h1"
              className="
                pb-10 text-[50px] leading-[64px]
                screen-lg:!text-[50px] screen-lg:!leading-[64px] screen-lg:pb-[30px]
                screen-md:pb-[15px] screen-md:!text-[40px] screen-md:!leading-[50px]
              "
            >
              {title}
            </MainTitle>
            <ContentText
              tag="p"
              marginAbsent
              className="
                self-end max-w-[460px] m-0 text-[18px] leading-[26px]
                screen-md:self-auto screen-md:text-[16px] screen-md:leading-[24px] screen-md:max-w-full
              "
            >
              {firstText}
            </ContentText>
          </div>
          <ContentText
            tag="p"
            marginAbsent
            className="
              max-w-[460px] m-0 pt-0 text-[18px] leading-[26px]
              screen-lg:pt-[120px]
              screen-md:pt-[30px] screen-md:text-[16px] screen-md:leading-[24px] screen-md:max-w-full
            "
          >
            {secondText}
          </ContentText>
        </div>
        <div className="absolute top-0 right-0 w-[47%] h-[calc(100vh+1px)] min-h-[669px] screen-xl:hidden">
          <div className="w-full h-full">
            <ImageComponent
              src={rightImg}
              alt="developers"
              priority
              fill
              sizes="(max-width: 768px) 50vw, (min-width: 768px) 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainBlockWith2text;
