import { IAccordionData } from 'components/AccordionTemplate/interfaces/IAccordion';
import ItemText from 'components/ItemText/ItemText';

const Data: IAccordionData[] = [
  {
    id: 1001,
    number: '01',
    title: 'Visual tool for education',
    content: (
      <ItemText
        content={[
          `The incorporation of AR in education makes students understand concepts through life on pages,
          floors, and walls or via interactive whiteboards of different objects.`,
        ]}
      />
    ),
  },
  {
    id: 1006,
    number: '06',
    title: 'Visualization tool for designers',
    content: (
      <ItemText
        content={[
          `For professionals, VR means growing their skills to introduce an interior as a
          virtual tour, send virtual design models to customers, and quickly make updates.`,
        ]}
      />
    ),
  },
  {
    id: 1002,
    number: '02',
    title: 'Maps',
    content: (
      <ItemText
        content={[
          `Augmented reality technology is associated with geo-location and geospatial mapping
          by providing data, facilities, and other augmented details.`,
        ]}
      />
    ),
  },
  {
    id: 1007,
    number: '07',
    title: 'Brands in business',
    content: (
      <ItemText
        content={[
          `Customers have a virtual representation of their products,
          which elevates the effectiveness of branding and helps in marketing activities.`,
        ]}
      />
    ),
  },
  {
    id: 1003,
    number: '03',
    title: 'Image recognition',
    content: (
      <ItemText
        content={[
          `It provides Internet users quick access to details and allows them to enjoy
          a more engaging presentation that can be viewed on any supporting device.`,
        ]}
      />
    ),
  },
  {
    id: 1008,
    number: '08',
    title: 'Industrial visualization',
    content: (
      <ItemText
        content={[
          `Site managers can avoid accidents and improve efficiency
          by virtually viewing scenarios in real-time (specifically in the construction business).`,
        ]}
      />
    ),
  },
  {
    id: 1004,
    number: '04',
    title: 'Real estate business representation',
    content: (
      <ItemText
        content={[
          'Users can enjoy a 360-degree interior image, making it easier to make decisions.',
        ]}
      />
    ),
  },
  {
    id: 1009,
    number: '09',
    title: 'Interactive environments in video games',
    content: (
      <ItemText
        content={[
          `3D games programming helps create powerful visualizations of an environment,
          allowing players to enjoy a realistic view of the rooms from different angles.`,
        ]}
      />
    ),
  },
  {
    id: 1005,
    number: '05',
    title: 'Virtual interior design',
    content: (
      <ItemText
        content={[
          `Users create a virtual interior design for their home, using fashionable furniture items
          and competing with other app players.`,
        ]}
      />
    ),
  },
  {
    id: 1010,
    number: '10',
    title: 'Media and entertainment',
    content: (
      <ItemText
        content={[
          `By providing users with new interactive apps in media and entertainment, user engagement is enhanced.
          This is a critical factor in spreading market awareness and creating media and entertainment sensations.`,
        ]}
      />
    ),
  },
];

export default Data;
