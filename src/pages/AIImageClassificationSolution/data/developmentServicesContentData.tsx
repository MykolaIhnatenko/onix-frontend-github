import { IDevelopmentServicesItemData } from 'components/DevelopmentServicesTemplate/interfaces/IDevelopmentServicesTemplate';

const developmentServicesItemData: IDevelopmentServicesItemData[] = [
  {
    id: 11,
    number: '01',
    title: 'Manufacturers',
    content: [
      `For those in manufacturing, quality control is paramount. The software can help identify product defects
       or anomalies on the assembly line in real time. This reduces wastage and ensures product quality.`,
    ],
  },
  {
    id: 12,
    number: '02',
    title: 'Healthcare professionals',
    content: [
      `Doctors or radiologists can use the tool to quickly analyze medical images, assisting
       in early diagnosis or anomaly detection.`,
    ],
  },
  {
    id: 13,
    number: '03',
    title: 'Wildlife researchers and conservationists',
    content: [
      `Researchers can track animal movements, numbers, and behaviors more efficiently 
      by classifying species from trap camera images.`,
    ],
  },
  {
    id: 14,
    number: '04',
    title: 'General public',
    content: [
      `For individuals keen on comprehending and organizing images 
      for educational, research, or recreational endeavors.`,
    ],
  },
  {
    id: 15,
    number: '05',
    title: 'Retail',
    content: [
      `Retailers can classify products, track inventory visually, or 
      even help customers find products with similar attributes.`,
    ],
  },
];

export default developmentServicesItemData;
