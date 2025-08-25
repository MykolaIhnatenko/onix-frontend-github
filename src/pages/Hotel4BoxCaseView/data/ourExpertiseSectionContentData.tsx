import { IAccordionData } from 'components/AccordionTemplate/interfaces/IAccordion';
import AccordionItemContentWithImg from 'components/AccordionItemContentWithImg/AccordionItemContentWithImg';
import ItemText from 'components/ItemText/ItemText';
import MainTitle from '../../../components/MainTitle/MainTitle';

import OurExpertie1 from '@/images/hotel4BoxCase/ourExpertise/img_1.webp';
import OurExpertie2 from '@/images/hotel4BoxCase/ourExpertise/img_2.webp';
import OurExpertie3 from '@/images/hotel4BoxCase/ourExpertise/img_3.webp';
import OurExpertie4 from '@/images/hotel4BoxCase/ourExpertise/img_4.webp';
import OurExpertie5 from '@/images/hotel4BoxCase/ourExpertise/img_5.webp';

const classes = {
  container: '!p-[0_0_30px_70px] !gap-[70px] screen-xl:!px-0 '
    + 'screen-xl:!gap-[30px] screen-md:!gap-[20px] screen-md:!pb-[20px]',
  content: '!max-w-[452px] min-xxxl:!max-w-[770px] screen-xl:!w-full',
};

const ourExpertiseSectionContentData: IAccordionData[] = [
  {
    id: 1,
    number: '01',
    title: 'Modernized ERP system',
    content: (
      <AccordionItemContentWithImg
        image={OurExpertie1}
        imageAlt="expertise-image"
        contentReverse
        classes={classes}
      >
        <ItemText
          content={(
            <>
              <MainTitle
                tag="span"
                className="block !text-[24px]/[34px] screen-lg:!text-[24px]/[34px] screen-lg:mb-[20px]
                  screen-md:!text-[16px]/[24px]
                  mb-[30px] screen-md:mb-[20px]"
              >
                Optimized logistics
              </MainTitle>
              We developed a highly scalable and efficient ERP solution that streamlines order
              management, automates warehouse operations, and optimizes shipping workflows.
              The new system allows batch processing of packages, reducing manual intervention and processing time.
            </>
        )}
          marginBottomAbsent
        />
      </AccordionItemContentWithImg>
    ),
  },
  {
    id: 2,
    number: '02',
    title: 'Advanced API integration',
    content: (
      <AccordionItemContentWithImg
        image={OurExpertie2}
        imageAlt="expertise-image"
        contentReverse
        classes={classes}
      >
        <ItemText
          content={(
            <>
              <MainTitle
                tag="span"
                className="block !text-[24px]/[34px] screen-lg:!text-[24px]/[34px] screen-lg:mb-[20px]
                  screen-md:!text-[16px]/[24px]
                  mb-[30px] screen-md:mb-[20px]"
              >
                Seamless API connectivity
              </MainTitle>
              The new platform features robust API functionality, enabling seamless communication between Hotel4Box,
              shipping carriers, and payment providers. The enhanced API structure supports real-time tracking,
              multi-carrier shipping calculations, and automated customs documentation.
            </>
          )}
          marginBottomAbsent
        />
      </AccordionItemContentWithImg>
    ),
  },
  {
    id: 3,
    number: '03',
    title: <>Improved package consolidation and&nbsp;splitting</>,
    content: (
      <AccordionItemContentWithImg
        image={OurExpertie3}
        imageAlt="expertise-image"
        contentReverse
        classes={classes}
      >
        <ItemText
          content={(
            <>
              <MainTitle
                tag="span"
                className="block !text-[24px]/[34px] screen-lg:!text-[24px]/[34px] screen-lg:mb-[20px]
                  screen-md:!text-[16px]/[24px]
                  mb-[30px] screen-md:mb-[20px]"
              >
                Flexible package management
              </MainTitle>
              Customers now have full control over package handling, allowing them to consolidate
              multiple purchases into one shipment or split orders into separate parcels. This reduces
              shipping costs and enhances flexibility in international logistics.
            </>
          )}
          marginBottomAbsent
        />
      </AccordionItemContentWithImg>
    ),
  },
  {
    id: 4,
    number: '04',
    title: 'Enhanced user experience',
    content: (
      <AccordionItemContentWithImg
        image={OurExpertie4}
        imageAlt="expertise-image"
        contentReverse
        classes={classes}
      >
        <ItemText
          content={(
            <>
              <MainTitle
                tag="span"
                className="block !text-[24px]/[34px] screen-lg:!text-[24px]/[34px] screen-lg:mb-[20px]
                  screen-md:!text-[16px]/[24px]
                  mb-[30px] screen-md:mb-[20px]"
              >
                Streamlined dashboard experience
              </MainTitle>
              The entire dashboard was redesigned to provide a seamless experience for users managing multiple
              shipments. Customers can easily add, modify, and track their orders while receiving automated
              cost estimates before finalizing their shipments.
            </>
          )}
          marginBottomAbsent
        />
      </AccordionItemContentWithImg>
    ),
  },
  {
    id: 5,
    number: '05',
    title: 'End-to-end order tracking',
    content: (
      <AccordionItemContentWithImg
        image={OurExpertie5}
        imageAlt="expertise-image"
        contentReverse
        classes={classes}
      >
        <ItemText
          content={(
            <>
              <MainTitle
                tag="span"
                className="block !text-[24px]/[34px] screen-lg:!text-[24px]/[34px] screen-lg:mb-[20px]
                  screen-md:!text-[16px]/[24px]
                  mb-[30px] screen-md:mb-[20px]"
              >
                Real-time shipment visibility
              </MainTitle>
              We implemented real-time tracking and notification systems to ensure customers are always
              informed about their shipments. The tracking dashboard provides detailed shipment progress,
              estimated delivery times, and alerts for customs clearance.
            </>
          )}
          marginBottomAbsent
        />
      </AccordionItemContentWithImg>
    ),
  },
];

export default ourExpertiseSectionContentData;
