import getAccordionTextData, { IAccordionTextData } from 'utils/getAccordionTextData';

const data: IAccordionTextData[] = [
  {
    id: 1,
    number: '01',
    title: 'DevOps as a Service',
    content: [
      `We offer web development services to build stable and reliable web solutions that meet your unique goals,
      boost your business efficiency, and satisfy the needs of modern users.`,
      `Our software development experts assist you in creating beautifully striking and high-performing web solutions
      for your specific industry, regardless of the project's complexity and scale.`,
    ],
  },
  {
    id: 9,
    number: '09',
    title: 'Optimization Serverless Architecture',
    content: [
      `To remain relevant, you should continue to innovate.
      That’s where our R&D service comes in handy.`,
      `We assist you in choosing the best technology and suitable devices/accessories
      for your project that contributes to a company’s long-term profitability.
      Our R&D service allows you to produce cutting-edge solutions and stay ahead of your competition.`,
    ],
  },
  {
    id: 2,
    number: '02',
    title: 'DevOps Assessment',
    content: [
      `To remain relevant, you should continue to innovate.
      That’s where our R&D service comes in handy.`,
      `We assist you in choosing the best technology and suitable devices/accessories
      for your project that contributes to a company’s long-term profitability.
      Our R&D service allows you to produce cutting-edge solutions and stay ahead of your competition.`,
    ],
  },
  {
    id: 10,
    number: '10',
    title: 'Cloud Management',
    content: [
      `To remain relevant, you should continue to innovate.
      That’s where our R&D service comes in handy.`,
      `We assist you in choosing the best technology and suitable devices/accessories
      for your project that contributes to a company’s long-term profitability.
      Our R&D service allows you to produce cutting-edge solutions and stay ahead of your competition.`,
    ],
  },
  {
    id: 3,
    number: '03',
    title: 'Infrastructure as a Code',
    content: [
      `To remain relevant, you should continue to innovate.
      That’s where our R&D service comes in handy.`,
      `We assist you in choosing the best technology and suitable devices/accessories
      for your project that contributes to a company’s long-term profitability.
      Our R&D service allows you to produce cutting-edge solutions and stay ahead of your competition.`,
    ],
  },
  {
    id: 11,
    number: '11',
    title: 'Documentation Support',
    content: [
      `To remain relevant, you should continue to innovate.
      That’s where our R&D service comes in handy.`,
      `We assist you in choosing the best technology and suitable devices/accessories
      for your project that contributes to a company’s long-term profitability.
      Our R&D service allows you to produce cutting-edge solutions and stay ahead of your competition.`,
    ],
  },
  {
    id: 4,
    number: '04',
    title: 'Continuous Monitoring',
    content: [
      `To remain relevant, you should continue to innovate.
      That’s where our R&D service comes in handy.`,
      `We assist you in choosing the best technology and suitable devices/accessories
      for your project that contributes to a company’s long-term profitability.
      Our R&D service allows you to produce cutting-edge solutions and stay ahead of your competition.`,
    ],
  },
  {
    id: 12,
    number: '12',
    title: 'Security & Compliance Automation',
    content: [
      `To remain relevant, you should continue to innovate.
      That’s where our R&D service comes in handy.`,
      `We assist you in choosing the best technology and suitable devices/accessories
      for your project that contributes to a company’s long-term profitability.
      Our R&D service allows you to produce cutting-edge solutions and stay ahead of your competition.`,
    ],
  },
  {
    id: 5,
    number: '05',
    title: 'Operational Management',
    content: [
      `To remain relevant, you should continue to innovate.
      That’s where our R&D service comes in handy.`,
      `We assist you in choosing the best technology and suitable devices/accessories
      for your project that contributes to a company’s long-term profitability.
      Our R&D service allows you to produce cutting-edge solutions and stay ahead of your competition.`,
    ],
  },
  {
    id: 13,
    number: '13',
    title: 'Testing and Health Monitoring',
    content: [
      `To remain relevant, you should continue to innovate.
      That’s where our R&D service comes in handy.`,
      `We assist you in choosing the best technology and suitable devices/accessories
      for your project that contributes to a company’s long-term profitability.
      Our R&D service allows you to produce cutting-edge solutions and stay ahead of your competition.`,
    ],
  },
  {
    id: 6,
    number: '06',
    title: 'Release Management',
    content: [
      `To remain relevant, you should continue to innovate.
      That’s where our R&D service comes in handy.`,
      `We assist you in choosing the best technology and suitable devices/accessories
      for your project that contributes to a company’s long-term profitability.
      Our R&D service allows you to produce cutting-edge solutions and stay ahead of your competition.`,
    ],
  },
  {
    id: 14,
    number: '14',
    title: 'Third-Party Software Integration',
    content: [
      `To remain relevant, you should continue to innovate.
      That’s where our R&D service comes in handy.`,
      `We assist you in choosing the best technology and suitable devices/accessories
      for your project that contributes to a company’s long-term profitability.
      Our R&D service allows you to produce cutting-edge solutions and stay ahead of your competition.`,
    ],
  },
  {
    id: 7,
    number: '07',
    title: 'Operational Management',
    content: [
      `To remain relevant, you should continue to innovate.
      That’s where our R&D service comes in handy.`,
      `We assist you in choosing the best technology and suitable devices/accessories
      for your project that contributes to a company’s long-term profitability.
      Our R&D service allows you to produce cutting-edge solutions and stay ahead of your competition.`,
    ],
  },
  {
    id: 15,
    number: '15',
    title: 'Deep Debug',
    content: [
      `To remain relevant, you should continue to innovate.
      That’s where our R&D service comes in handy.`,
      `We assist you in choosing the best technology and suitable devices/accessories
      for your project that contributes to a company’s long-term profitability.
      Our R&D service allows you to produce cutting-edge solutions and stay ahead of your competition.`,
    ],
  },
  {
    id: 8,
    number: '08',
    title: 'Security Management (SecOps)',
    content: [
      `To remain relevant, you should continue to innovate.
      That’s where our R&D service comes in handy.`,
      `We assist you in choosing the best technology and suitable devices/accessories
      for your project that contributes to a company’s long-term profitability.
      Our R&D service allows you to produce cutting-edge solutions and stay ahead of your competition.`,
    ],
  },
  {
    id: 16,
    number: '16',
    title: 'Load Testing (finding bottlenecks in the app and infrastructure)',
    content: [
      `To remain relevant, you should continue to innovate.
      That’s where our R&D service comes in handy.`,
      `We assist you in choosing the best technology and suitable devices/accessories
      for your project that contributes to a company’s long-term profitability.
      Our R&D service allows you to produce cutting-edge solutions and stay ahead of your competition.`,
    ],
  },
];

const devopsSolutionsSoftwareProductContentData = getAccordionTextData(data);

export default devopsSolutionsSoftwareProductContentData;
