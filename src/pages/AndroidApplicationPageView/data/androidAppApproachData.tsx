import getAccordionTextData, { IAccordionTextData } from 'utils/getAccordionTextData';

const data: IAccordionTextData[] = [
  {
    number: '01',
    title: 'Native mobile app development',
    content: [
      `Our developers have extensive experience building top-of-the-line native Android apps that are secure,
      flexible, customizable, scalable, and operate properly. Let's create a highly competitive Android app
      tailored to your business and customers' needs.`,
    ],
  },
  {
    number: '02',
    title: 'Hybrid mobile app development',
    content: [
      `We build hybrid apps that operate like websites but can use features of mobile devices. We craft
      native-like mobile apps using a single codebase that makes the development process faster and cheaper.`,
    ],
  },
  {
    number: '03',
    title: 'Progressive web apps',
    content: [
      `Onix helps you boost your business efficiency with solid and reliable progressive web apps. Leveraging
      the most robust technologies, our team creates highly competitive solutions that deliver user experiences
      similar to native apps on mobile devices.`,
    ],
  },
  {
    number: '04',
    title: 'Wearables and embedded software',
    content: [
      `Our engineers develop Android apps not only for smartphones. We can create solutions for various wearable
      devices such as watches, TVs, and many other smart devices. We help you deliver an omnichannel experience
      and win more users!`,
    ],
  },
];

const androidAppApproachBlockData = {
  title: 'Android app development for various platforms',
  data: getAccordionTextData(data),
};

export default androidAppApproachBlockData;
