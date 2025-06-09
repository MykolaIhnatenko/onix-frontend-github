import ItemText from 'components/ItemText/ItemText';
import { IAccordionData } from 'components/AccordionTemplate/interfaces/IAccordion';

const accordionData: IAccordionData[] = [
  {
    id: 1,
    title: 'Scalability',
    content: (
      <ItemText
        content={[
          `Kubernetes facilitates easy scaling of the digital magazine website by automatically adding
          or removing resources based on demand.`,
          `As traffic spikes, additional resources are allocated to handle the increase in demand,
          ensuring a smooth user experience.`,
        ]}
      />
    ),
  },
  {
    id: 2,
    title: 'Automation',
    content: (
      <ItemText
        content={[
          `Kubernetes automates many tasks related to managing digital magazine applications,
          such as scaling, updates, and deployments.`,
          'Automation helps reduce manual work, allowing our client’s business to operate more efficiently.',
        ]}
      />
    ),
  },
  {
    id: 3,
    title: 'High availability and resilience',
    content: (
      <ItemText
        content={[
          `Kubernetes provides enhanced availability and resilience for our client’s digital
          magazine by ensuring redundancy across multiple nodes.`,
          `If one node fails, traffic is automatically redirected to other available nodes, ensuring
          service continuity.`,
        ]}
        marginBottomAbsent
      />
    ),
  },
];

export default accordionData;
