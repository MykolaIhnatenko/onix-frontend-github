import PDSoftwareEngineerImage from '@/images/productDiscovery/img_software_engineer.webp';
import PDUiUxExpertImage from '@/images/productDiscovery/img_uiux_expert.webp';
import PDSolutionArchitectImage from '@/images/productDiscovery/img_solution_architect.webp';
import PDProjectManagerImage from '@/images/productDiscovery/img_project_manager.webp';
import { IAccordionHorizontalData } from 'components/AccordionHorizontal/interfaces/IAccordionHorizontal';

const cooperateList: IAccordionHorizontalData[] = [
  {
    id: 1,
    number: '01',
    title: 'Project manager / Business analyst',
    content: 'Ensures effective communication between the client and the team and works directly'
    + ' on creating software requirement documentation.',
    image: PDProjectManagerImage,
  },
  {
    id: 2,
    number: '02',
    title: 'Solution architect',
    content: 'Helps with defining product architecture and potential scaling, decides on the tech '
    + 'stack, and defines the project budget.',
    image: PDSolutionArchitectImage,
  },
  {
    id: 3,
    number: '03',
    title: 'UI/UX expert',
    content: 'Outlines the relationship of roles, creates the user flow, and prepares prototypes.',
    image: PDUiUxExpertImage,
  },
  {
    id: 4,
    number: '04',
    title: 'Software engineers',
    content: 'Are responsible for technical solutions, including architecture documentation, defines '
    + 'technology requirements, thinks through the development process, and provides time estimates.',
    image: PDSoftwareEngineerImage,
  },
];

export default cooperateList;
