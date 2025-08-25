const resultsBlockWhite = {
  resultBlock: '!bg-white !text-black',
  line: '!bg-[#CECECE]',
  lineActive: '!bg-black',
};

export const containerActiveBlocksClasses = {
  cards: '!border-b-2 !border-black',
  dropBlock: `min-md:!justify-between min-md:!self-stretch min-md:!flex-[0_1_50%]
  min-md:!p-[28px_20px_20px_15px] min-md:!h-auto min-xl:!flex-[0_1_33.33333%] min-xl:!p-[25px]`,
  dropBlockBg: 'min-md:!hidden',
  dropBlockTitle: `min-md:!text-left min-md:!text-[24px] min-md:!leading-[34px] min-md:!max-w-[332px]
  min-md:!m-0 min-xl:!text-[40px] min-xl:!leading-[56px] min-xl:!max-w-[400px]`,
  buttonWrapper: 'min-md:!max-w-[346px] min-md:!ml-[3px] min-xl:!m-0',
  cardClasses: {
    card: '!h-[450px] screen-lg:!h-[430px]',
  },
};

export const trustUsBlockFor6Cards = `[&:last-of-type]:!border-b-2 [&:last-of-type]:!border-black
            min-md:[&:nth-of-type(5)]:!border-b-2 min-md:[&:nth-of-type(5)]:!border-black
            min-xl:[&:nth-of-type(4)]:!border-b-2 min-xl:[&:nth-of-type(4)]:!border-black`;

export const aboutProjectSectionWhite = {
  section: '!bg-white !text-black',
  content: {
    listItem: '!border-black',
  },
};

export const technologiesBlockBlack = {
  container: '!bg-black',
  technologies: {
    technology: '!border-b-2 !border-white [&:not(:last-child)]:!border-b-2',
    keyTitle: '!text-white',
    item: '!text-white',
  },
};

export const containerActiveBlocksBooking = {
  containerBlock: '!pb-[60px] screen-lg:!pb-[40px] screen-md:!pb-0',
  cardBlock: containerActiveBlocksClasses,
};

export const benefitsClasses = {
  card: `bg-black text-white p-[30px] border-b-[2px] border-white transition-all
  duration-[400ms] min-lg:hover:bg-white min-lg:hover:text-black screen-lg:pointer-events-none screen-md:border-b-[0px]
  screen-md:pb-0 screen-md:px-[15px]`,
  number: 'text-[36px] leading-[46px] mb-[120px] screen-md:text-[24px] screen-md:leading-[34px] screen-md:mb-[40px]',
  text: `text-[30px] leading-[40px] screen-md:pb-[28px] screen-md:border-b-[2px] screen-md:border-white
  screen-md:text-[20px] screen-md:leading-[28px]`,
};

export const trustUsBlockSubtitle = `mb-[40px] px-[15px] z-[2] relative max-w-[670px] 
  min-md:pl-[30px] min-md:mb-[60px] 
  min-lg:mb-[80px] min-lg:pl-[70px] 
  min-xxxl:pl-[80px]`;

export const usabilityTestingMainBlockIcon = `w-[258px] h-[56px]
  max-1390:w-[202px] max-1390:h-[44px]
  screen-md:w-[147px] screen-md:h-[32px]`;

export default resultsBlockWhite;
