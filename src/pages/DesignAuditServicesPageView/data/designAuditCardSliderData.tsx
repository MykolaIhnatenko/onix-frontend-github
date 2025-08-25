import ContentText from '../../../components/ContentText/ContentText';
import MainTitleWithoutSize from '../../../components/MainTitleWithoutSize/MainTitleWithoutSize';
import { ICardSliderItem } from '../../../components/CardSlider/interfaces/ICardSlider';

const titleStyles = `mb-[30px] text-[30px] leading-[40px] font-[500]
screen-md:mb-[15px] screen-md:text-[20px] screen-md:leading-[28px]`;
const textStyles = `!m-0 !text-[18px] !leading-[26px] font-[400] 
screen-md:!text-[14px] screen-md:!leading-[20px]`;

const designAuditCardSliderData: ICardSliderItem[] = [
  {
    id: '01',
    title: (
      <MainTitleWithoutSize tag="h3" className={titleStyles}>
        User Research and Understanding
      </MainTitleWithoutSize>
    ),
    text: (
      <ContentText tag="p" className={textStyles}>
        Onix conducts thorough user research, including interviews and usability testing, to
        gain deep insights into user needs, preferences, and behavior.
      </ContentText>
    ),
  },
  {
    id: '02',
    title: (
      <MainTitleWithoutSize tag="h3" className={titleStyles}>
        Innovation and Differentiation
      </MainTitleWithoutSize>
    ),
    text: (
      <ContentText tag="p" className={textStyles}>
        Onix employs a team of creative designers who stay up-to-date with the latest design
        trends and innovative approaches, ensuring unique and standout designs.
      </ContentText>
    ),
  },
  {
    id: '03',
    title: (
      <MainTitleWithoutSize tag="h3" className={titleStyles}>
        User Experience and Usability
      </MainTitleWithoutSize>
    ),
    text: (
      <ContentText tag="p" className={textStyles}>
        Onix focuses on creating intuitive and user-friendly interfaces, employing user-centered
        design principles to optimize the user experience.
      </ContentText>
    ),
  },
  {
    id: '04',
    title: (
      <MainTitleWithoutSize tag="h3" className={titleStyles}>
        Technical Constraints and Feasibility
      </MainTitleWithoutSize>
    ),
    text: (
      <ContentText tag="p" className={textStyles}>
        Onix collaborates closely with developers and engineers to ensure that design concepts are
        feasible and compatible with technical requirements.
      </ContentText>
    ),
  },
  {
    id: '05',
    title: (
      <MainTitleWithoutSize tag="h3" className={titleStyles}>
        Time and Resource Management
      </MainTitleWithoutSize>
    ),
    text: (
      <ContentText tag="p" className={textStyles}>
        Onix follows a structured design process, utilizing project management techniques to manage
        time and resources and meet deadlines effectively.
      </ContentText>
    ),
  },
  {
    id: '06',
    title: (
      <MainTitleWithoutSize tag="h3" className={titleStyles}>
        Stakeholder Alignment and Communication
      </MainTitleWithoutSize>
    ),
    text: (
      <ContentText tag="p" className={textStyles}>
        Onix maintains clear and constant communication with stakeholders, involving them in the design
        process and addressing their feedback and concerns.
      </ContentText>
    ),
  },
];

export default designAuditCardSliderData;
