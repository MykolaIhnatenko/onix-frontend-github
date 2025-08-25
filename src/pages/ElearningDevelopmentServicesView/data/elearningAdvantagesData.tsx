import { IAdvantagesData } from '../../../components/AdvantagesBlock/interfaces/IAdvantagesBlock';

import img_Chatbots from '@/images/elernings/img_Chatbots.webp';
import img_ARVR from '@/images/elernings/img_ARVR.webp';
import img_ArtifactIntelligence from '@/images/elernings/img_ArtifactIntelligence.webp';

const elearningAdvantagesData: IAdvantagesData[] = [
  {
    id: 1,
    image: img_ArtifactIntelligence,
  },
  {
    id: 2,
    title: 'Artificial Intelligence',
    text: [
      `Our AI-driven eLearning solutions incorporate natural language processing, machine learning,
      and predictive analytics to provide a truly immersive and personalized learning experience.`,
      `Learners can engage with dynamic content, receive real-time feedback, and access
      personalized recommendations, fostering a deeper understanding of the subject matter.`,
    ],
  },
  {
    id: 3,
    image: img_ARVR,
  },
  {
    id: 4,
    title: 'AR/VR',
    text: [
      `Our AR/VR-powered eLearning solutions enable learners to interact with 3D models,
      simulate real-world scenarios, and engage in hands-on learning.`,
      `This technology provides a multi-sensory experience that enhances understanding
      and retention, making learning an exciting and memorable adventure.`,
    ],
  },
  {
    id: 5,
    image: img_Chatbots,
  },
  {
    id: 6,
    title: 'Chatbots',
    text: [
      `Our chatbot-enabled eLearning solutions foster an interactive and collaborative
      learning environment, allowing learners to receive immediate assistance, engage in discussions,
      and access relevant resources.`,
      `This personalized support system ensures that learners have the help
      they need, precisely when they need it.`,
    ],
  },
];

export default elearningAdvantagesData;
