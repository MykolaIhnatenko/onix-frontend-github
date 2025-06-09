import { IDevelopmentServicesItemData } from 'components/DevelopmentServicesTemplate/interfaces/IDevelopmentServicesTemplate';

const contentData: IDevelopmentServicesItemData[] = [
  {
    id: 1,
    number: '01',
    title: <>Bringing Realism to&nbsp;VR Models</>,
    content: [
      `Creating lifelike, highly detailed 3D car models was the first hurdle. The models needed to capture 
       everything from the texture of leather seats to the gleam of metallic paint. But high-detail models 
       can drain device resources, especially on mobile AR platforms like Apple Vision Pro. Onix had to find
       a way to make these models realistic while ensuring they would run smoothly on mobile hardware.`,
    ],
  },
  {
    id: 2,
    number: '02',
    title: 'Performance vs. Visual Fidelity',
    content: [
      `Achieving the right balance between detail and performance was crucial. The team couldn’t compromise
       on visual quality, yet they also needed to optimize the experience so users wouldn’t be faced with lag
       or interruptions while exploring the showroom.`,
    ],
  },
  {
    id: 3,
    number: '03',
    title: 'Designing an Intuitive User Experience',
    content: [
      `For many users, this would be their first VR car showroom experience. The interface needed to be 
      intuitive—users should be able to explore features without thinking too much about how to navigate them.`,
    ],
  },
  {
    id: 4,
    number: '04',
    title: 'Creating Realistic Interactions',
    content: [
      `The client wanted customers to feel as if they were really there. This meant incorporating interactive 
       elements like opening doors, sitting inside, and customizing colors,
       which presented additional technical challenges.`,
    ],
  },
];

export default contentData;
