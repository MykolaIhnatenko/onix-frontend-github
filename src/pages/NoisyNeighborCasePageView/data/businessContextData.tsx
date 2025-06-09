import IconsContent from '../../../components/IconsContent/IconsContent';
import IconsContentData from './IconsContentData';

export const businessContextDataFirst = {
  name: '[ About the project ]',
  title: `The "Noisy Neighbor" project was conceived as
    a fun and interactive online quiz that aimed to
    provide users insights into the impact of their daily habits on the people around them.`,
  firstText: `The idea originated from a\u00A0personal experience where
    an Onix team member faced noisy neighbors in their newly purchased apartment.`,
  secondText: `This inspired the creation of a\u00A0questionnaire to gauge
    and\u00A0understand the noise levels of individuals in various daily scenarios.`,
};

export const businessContextDataSecond = {
  name: '[ Results ]',
  title: 'The Noisy Neighbor website earns an\u00A0"Honorable Mention" award on Awwwards.com.',
  subtitle: `This recognition is a testament to the creative excellence, engaging design, and technical
    prowess demonstrated in developing the interactive 3D design for online quiz.`,
  firstText: (
    <IconsContent
      data={IconsContentData}
      classes={{
        container: `!p-[40px_0] !gap-[40px] min-xxxl:!gap-[60px]
          screen-lg:!p-[20px_0] screen-md:!gap-[40px_15px] !max-w-[1300px] !mx-0`,
        containerItemWrapper: `screen-md:!flex screen-md:!w-[calc(50%-10px)]
          screen-md:!flex-col screen-md:!justify-center screen-md:!items-center
          [&:nth-child(3)>div>div:nth-child(2)]:screen-md:!max-w-[100px]`,
        containerItem: `!w-[265px] !max-w-[180px] !flex !flex-col !items-center
          screen-xl:!w-[unset] screen-xl:!max-w-[170px] 
          screen-lg:!min-w-[144px] screen-md:!min-w-[132px]`,
        iconContainer: `!w-[160px] !h-[160px] !border !border-black !m-0 !p-[48px]
          !flex !justify-center !items-center !rounded-[1000px]
          screen-lg:!w-[144px] screen-lg:!h-[144px] screen-lg:!p-[28px]
          screen-md:!w-[132px] screen-md:!h-[132px] screen-md:!p-[8px]`,
        title: `!text-black screen-lg:!w-[144px]
          screen-md:!text-[18px] screen-md:!w-[155px]`,
      }}
    />
  ),
  bottomText: `"Noisy Neighbor" perfectly blended engagement, visual appeal, technical efficiency,
    and\u00A0accessibility, making it a successful and memorable online quiz experience!`,
};
