import MainTitleWithoutSize from 'components/MainTitleWithoutSize/MainTitleWithoutSize';
import ContentText from '../../../components/ContentText/ContentText';

const card = `bg-white text-black w-[590px] mr-[30px] p-[40px] flex flex-col 
            screen-md:w-[300px] screen-md:p-[30px_20px_20px] screen-md:mr-[15px]`;
const cardTitle = `text-[30px] leading-[40px] mb-[30px] screen-md:text-[20px]
            screen-md:leading-[28px] screen-md:mb-[20px]`;
const text = '!mt-0 !mb-[30px] screen-md:!mb-[20px]';
const listTitle = '!m-[0_0_20px] screen-md:!mb-[15px]';
const list = '';
const listItem = `mb-[5px] font-ibmPlexMono text-[18px] leading-[26px]
            flex screen-md:text-[16px] screen-md:leading-[24px] before:content-['﹂'] before:mr-[10px]`;
const counter = `font-generalSans mt-auto pt-[40px] text-[30px] leading-[40px] font-medium 
            screen-md:pt-[30px] screen-md:text-[20px] screen-md:leading-[28px]`;

const dragInfoBlockData = [
  {
    id: 0,
    content: (
      <div className={card}>
        <MainTitleWithoutSize tag="h3" className={cardTitle}>
          Requirements and&nbsp;Documentation
        </MainTitleWithoutSize>
        <ContentText tag="p" className={text}>
          Before development began, Onix’s developers gathered and had the client&apos;s CRM requirements approved.
        </ContentText>
        <ContentText tag="p" className={listTitle}>
          The documents included:
        </ContentText>
        <ul className={list}>
          <li className={listItem}>
            <p>
              SRS with functional and non-functional requirements
            </p>
          </li>
          <li className={listItem}>
            <p>
              UX charts and UI mockups executed by Onix’s designer in Figma
            </p>
          </li>
          <li className={listItem}>
            <p>
              a detailed work breakdown and effort estimation in hours (Google spreadsheet)
            </p>
          </li>
          <li className={`${listItem} !mb-0`}>
            <p>
              timeline with planned start and end dates for each project phase
            </p>
          </li>
        </ul>
        <span className={counter}>
          01
        </span>
      </div>
    ),
  },
  {
    id: 1,
    content: (
      <div className={card}>
        <MainTitleWithoutSize tag="h3" className={cardTitle}>
          Healthcare Data Security
        </MainTitleWithoutSize>
        <ContentText tag="p" className={text}>
          Development started in January 2023 with one back-end and one front-end developer,
          overseen by a part-time project manager. Measures to ensure healthcare data security included:
        </ContentText>
        <ul className={list}>
          <li className={listItem}>
            <p>
              leads’ consent for processing their contact information when they fill out the online form
            </p>
          </li>
          <li className={listItem}>
            <p>
              the principle of least privilege for the system users
            </p>
          </li>
          <li className={listItem}>
            <p>
              password rotation
            </p>
          </li>
          <li className={`${listItem} !mb-0`}>
            <p>
              inactive user log-out after 15 minutes
            </p>
          </li>
        </ul>
        <span className={counter}>
          02
        </span>
      </div>
    ),
  },
  {
    id: 2,
    content: (
      <div className={card}>
        <MainTitleWithoutSize tag="h3" className={cardTitle}>
          Evolution of UI Usability
        </MainTitleWithoutSize>
        <ContentText tag="p" className={text}>
          The user interface went through several iterations as the team
          tried to maximize its usability at the client’s request.
        </ContentText>
        <span className={counter}>
          03
        </span>
      </div>
    ),
  },
  {
    id: 3,
    content: (
      <div className={card}>
        <MainTitleWithoutSize tag="h3" className={cardTitle}>Testing Conducted by QA Engineer</MainTitleWithoutSize>
        <ContentText tag="p" className={text}>
          One quality assurance engineer conducted the necessary testing.
        </ContentText>
        <span className={counter}>
          04
        </span>
      </div>
    ),
  },
  {
    id: 4,
    content: (
      <div className={card}>
        <MainTitleWithoutSize tag="h3" className={cardTitle}>
          System Rollout:
          <br />
          June 2023
        </MainTitleWithoutSize>
        <ContentText tag="p" className={text}>
          The system was presented to the end-users in June 2023.
        </ContentText>
        <span className={counter}>
          05
        </span>
      </div>
    ),
  },
];

export default dragInfoBlockData;
