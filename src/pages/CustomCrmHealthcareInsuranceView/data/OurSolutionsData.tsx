import VRARContent from '../../../components/VRARContent/VRARContent';
import ContentText from '../../../components/ContentText/ContentText';
import OurSolutionsImg1 from '../../../assets/images/customCrmHealthcareInsurancePage/img_ourSolutions1@2x.webp';
import OurSolutionsImg2 from '../../../assets/images/customCrmHealthcareInsurancePage/img_ourSolutions2@2x.webp';
import OurSolutionsImg3 from '../../../assets/images/customCrmHealthcareInsurancePage/img_ourSolutions3@2x.webp';
import OurSolutionsImg4 from '../../../assets/images/customCrmHealthcareInsurancePage/img_ourSolutions4@2x.webp';
import OurSolutionsImg5 from '../../../assets/images/customCrmHealthcareInsurancePage/img_ourSolutions5@2x.webp';
import OurSolutionsImg6 from '../../../assets/images/customCrmHealthcareInsurancePage/img_ourSolutions6@2x.webp';
import OurSolutionsImg7 from '../../../assets/images/customCrmHealthcareInsurancePage/img_ourSolutions7@2x.webp';
import OurSolutionsImg8 from '../../../assets/images/customCrmHealthcareInsurancePage/img_ourSolutions8@2x.webp';
import OurSolutionsImg9 from '../../../assets/images/customCrmHealthcareInsurancePage/img_ourSolutions9@2x.webp';
import OurSolutionsImg10 from '../../../assets/images/customCrmHealthcareInsurancePage/img_ourSolutions10@2x.webp';
import OurSolutionsImgTablet1 from '../../../assets/images/customCrmHealthcareInsurancePage/img_ourSolutionsTablet1@2x.webp';
import OurSolutionsImgTablet2 from '../../../assets/images/customCrmHealthcareInsurancePage/img_ourSolutionsTablet2@2x.webp';
import OurSolutionsImgTablet3 from '../../../assets/images/customCrmHealthcareInsurancePage/img_ourSolutionsTablet3@2x.webp';
import OurSolutionsImgTablet4 from '../../../assets/images/customCrmHealthcareInsurancePage/img_ourSolutionsTablet4@2x.webp';
import OurSolutionsImgTablet5 from '../../../assets/images/customCrmHealthcareInsurancePage/img_ourSolutionsTablet5@2x.webp';
import OurSolutionsImgTablet6 from '../../../assets/images/customCrmHealthcareInsurancePage/img_ourSolutionsTablet6@2x.webp';
import OurSolutionsImgTablet7 from '../../../assets/images/customCrmHealthcareInsurancePage/img_ourSolutionsTablet7@2x.webp';
import OurSolutionsImgTablet8 from '../../../assets/images/customCrmHealthcareInsurancePage/img_ourSolutionsTablet8@2x.webp';
import OurSolutionsImgTablet9 from '../../../assets/images/customCrmHealthcareInsurancePage/img_ourSolutionsTablet9@2x.webp';
import OurSolutionsImgTablet10 from '../../../assets/images/customCrmHealthcareInsurancePage/img_ourSolutionsTablet10@2x.webp';
import OurSolutionsImgMobile1 from '../../../assets/images/customCrmHealthcareInsurancePage/img_ourSolutionsMobile1@2x.webp';
import OurSolutionsImgMobile2 from '../../../assets/images/customCrmHealthcareInsurancePage/img_ourSolutionsMobile2@2x.webp';
import OurSolutionsImgMobile3 from '../../../assets/images/customCrmHealthcareInsurancePage/img_ourSolutionsMobile3@2x.webp';
import OurSolutionsImgMobile4 from '../../../assets/images/customCrmHealthcareInsurancePage/img_ourSolutionsMobile4@2x.webp';
import OurSolutionsImgMobile5 from '../../../assets/images/customCrmHealthcareInsurancePage/img_ourSolutionsMobile5@2x.webp';
import OurSolutionsImgMobile6 from '../../../assets/images/customCrmHealthcareInsurancePage/img_ourSolutionsMobile6@2x.webp';
import OurSolutionsImgMobile7 from '../../../assets/images/customCrmHealthcareInsurancePage/img_ourSolutionsMobile7@2x.webp';
import OurSolutionsImgMobile8 from '../../../assets/images/customCrmHealthcareInsurancePage/img_ourSolutionsMobile8@2x.webp';
import OurSolutionsImgMobile9 from '../../../assets/images/customCrmHealthcareInsurancePage/img_ourSolutionsMobile9@2x.webp';
import OurSolutionsImgMobile10 from '../../../assets/images/customCrmHealthcareInsurancePage/img_ourSolutionsMobile10@2x.webp';
import { IOurSolutionsData } from 'components/OurSolutions/interfaces/IOurSolutions';

const ourSolutionsData: IOurSolutionsData[] = [
  {
    id: 1,
    title: 'Insurance Lead Account Creation Methods',
    text: (
      <>
        <VRARContent>
          <ContentText tag="p" marginAbsent className="!mb-[20px] screen-md:!mb-[15px]">
            Accounts are created in two ways:
          </ContentText>
        </VRARContent>
        <VRARContent>
          <ContentText tag="div" marginAbsent>
            <ol className="min-xl:list-decimal min-xl:ml-[27px]">
              <li>
                <p>through an online form that leads fill out on the company’s website</p>
              </li>
              <li>
                <p>manually, when an insurance agent enters a lead’s information:</p>
              </li>
            </ol>
            <ul>
              <li>
                <p>﹂ name</p>
              </li>
              <li>
                <p>﹂ phone number</p>
              </li>
              <li>
                <p>﹂ email</p>
              </li>
              <li>
                <p>﹂ gender</p>
              </li>
              <li>
                <p>﹂ date of birth</p>
              </li>
              <li>
                <p>﹂ Medicare beneficiary identifier</p>
              </li>
              <li>
                <p>﹂ ZIP-code</p>
              </li>
              <li>
                <p>﹂ healthcare proxy’s contacts</p>
              </li>
              <li>
                <p>﹂ health plan</p>
              </li>
              <li>
                <p>﹂ primary care physician</p>
              </li>
              <li>
                <p>﹂ pharmacy</p>
              </li>
            </ul>
          </ContentText>
        </VRARContent>
      </>
    ),
    img: OurSolutionsImg1,
    imgTablet: OurSolutionsImgTablet1,
    imgMobile: OurSolutionsImgMobile1,
  },
  {
    id: 2,
    title: 'Assigning Leads to Agents',
    text: 'When a manager receives a lead from the website, they assign it to an insurance agent as an “open account”.',
    img: OurSolutionsImg2,
    imgTablet: OurSolutionsImgTablet2,
    imgMobile: OurSolutionsImgMobile2,
  },
  {
    id: 3,
    title: 'Lead Communication and Task Management',
    text: `Once an agent has received or created an account, they can start communications with
      the lead via phone or email. The system facilitates scheduling, assigning, and tracking these
      interactions (tasks) and results, as well as uploading and sharing documents.`,
    img: OurSolutionsImg3,
    imgTablet: OurSolutionsImgTablet3,
    imgMobile: OurSolutionsImgMobile3,
  },
  {
    id: 4,
    title: 'System Notifications',
    text: `The system sends notifications (on the user’s interface and via emails) regarding
      new accounts, assigned tasks, etc.`,
    img: OurSolutionsImg4,
    imgTablet: OurSolutionsImgTablet4,
    imgMobile: OurSolutionsImgMobile4,
  },
  {
    id: 5,
    title: 'Lead Status Indicators',
    text: `As agents interact with leads, they indicate when they “contact” and “convert” a lead.
      They may also mark an account as “lost”.`,
    img: OurSolutionsImg5,
    imgTablet: OurSolutionsImgTablet5,
    imgMobile: OurSolutionsImgMobile5,
  },
  {
    id: 6,
    title: 'Lead to Customer Journey',
    text: `A lead proceeds through the pipeline, changing their category from “Lead” to “Opportunity”
      and from “Opportunity” to “Contact” (a customer who bought a health plan).`,
    img: OurSolutionsImg6,
    imgTablet: OurSolutionsImgTablet6,
    imgMobile: OurSolutionsImgMobile6,
  },
  {
    id: 7,
    title: 'Account Management and Search Filters',
    text: `Agents can manage accounts in each category – Leads, Opportunities, and Contacts – on
      separate pages. They can search accounts by name and filter them by dates, status (open pending,
      closed/won, overdue, rejected, not qualified), assignee, and source.`,
    img: OurSolutionsImg7,
    imgTablet: OurSolutionsImgTablet7,
    imgMobile: OurSolutionsImgMobile7,
  },
  {
    id: 8,
    title: 'Comprehensive Account Information Overview',
    text: `Each account page contains the person’s contact information and MBI, healthcare proxy’s
      contacts, health plan, primary care physician, pharmacy, medication, other important details that
      agents can enter as notes, relevant documents, agent’s tasks regarding the account, and the whole
      history of the account’s interactions with the company.`,
    img: OurSolutionsImg8,
    imgTablet: OurSolutionsImgTablet8,
    imgMobile: OurSolutionsImgMobile8,
  },
  {
    id: 9,
    title: 'Stats and Reports',
    text: `Reports enable agents and managers to see the essential statistics, such as AEP and OEP
      success percentages, monthly Leads and Opportunities, Leads-to-Closed and Opportunities-to-Closed
      monthly ratios, current Leads and Opportunities by status, and more.`,
    img: OurSolutionsImg9,
    imgTablet: OurSolutionsImgTablet9,
    imgMobile: OurSolutionsImgMobile9,
  },
  {
    id: 10,
    title: 'Integrating Customer Support Module: Overview',
    text: `Contacts would phone the company when they need assistance with their health plans.
      An automatic system would identify the customer calling and retrieve all information about
      them to the customer support’s interface. Their interface also enables creating and assigning
      tasks for solving the Contact’s problem, and the software would record all customer support’s
      actions regarding the call. This customer support module still needs to be integrated.`,
    img: OurSolutionsImg10,
    imgTablet: OurSolutionsImgTablet10,
    imgMobile: OurSolutionsImgMobile10,
  },
];

export default ourSolutionsData;
