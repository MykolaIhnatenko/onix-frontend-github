const imgPath = '/static/images/Pages/MiPaddle';
const industry = `${imgPath}/HeaderInfo/sports@2x.png`;
const duration = `${imgPath}/HeaderInfo/duration@2x.png`;
const location = `${imgPath}/HeaderInfo/location@2x.png`;
const teamsize = `${imgPath}/HeaderInfo/teamsize@2x.png`;
const conducted = `${imgPath}/Solutions/conducted@2x.png`;
const siteApp = `${imgPath}/Solutions/siteApp@2x.png`;
const usability = `${imgPath}/Solutions/usability@2x.png`;
const wireframes = `${imgPath}/Solutions/wireframes@2x.png`;
const php = `${imgPath}/CoreTech/php@2x.png`;
const figma = `${imgPath}/CoreTech/figma@2x.png`;
const vuejs = `${imgPath}/CoreTech/vuejs@2x.png`;
const mysql = `${imgPath}/CoreTech/mysql@2x.png`;

export const headerInfoContent = [
  {
    id: 1,
    title: 'Industry',
    content: 'Sports',
    img: {
      src: industry,
      width: '40',
      height: '40',
    },
    delay: 400,
  },
  {
    id: 2,
    title: 'Location',
    content: 'USA',
    img: {
      src: location,
      width: '29',
      height: '40',
    },
    delay: 600,
  },
  {
    id: 3,
    title: 'Team size',
    content: '8 people',
    img: {
      src: teamsize,
      width: '40',
      height: '40',
    },
    delay: 400,
  },
  {
    id: 4,
    title: 'Project duration',
    content: '2 years',
    img: {
      src: duration,
      width: '40',
      height: '40',
    },
    delay: 600,
  },
];

export const solutionList = {
  'Conducted in-depth project discovery and investigated the market, competitors, and target users': conducted,
  'Created wireframes, design, and all technical documentation': wireframes,
  'Developed a website and a mobile app for iOS and Android platforms': siteApp,
  'Designed easy navigation and streamlined app usability': usability,
};

export const coreTechList = {
  'PHP Laravel framework on backend side': {
    src: php,
    width: '40',
    height: '40',
    delay: 0,
  },
  'Vue.js on frontend side': {
    src: vuejs,
    width: '40',
    height: '40',
    delay: 200,
  },
  'MySQL database': {
    src: mysql,
    width: '40',
    height: '40',
    delay: 400,
  },
  'Figma for design': {
    src: figma,
    width: '28',
    height: '40',
    delay: 600,
  },
};

export const neededList = [
  {
    id: 1,
    text: 'Conduct an in-depth requirements elicitation to meet project objectives;',
  },
  {
    id: 2,
    text: 'Make a profound market and competitors analysis;',
  },
  {
    id: 3,
    text: 'Perform a discovery stage;',
  },
  {
    id: 4,
    text: 'Create a website for the app;',
  },
  {
    id: 5,
    text: 'Develop a robust application both for iOS and Android platforms;',
  },
  {
    id: 6,
    text: 'Design an intuitive UX and creative UI to create a feeling of sports dynamics.',
  },
];

export const solutionsList2 = [
  {
    id: 1,
    text: 'Since the client came to us with solely a project idea and a brief specification, we started the '
  + 'project development with the Discovery phase. Project discovery is vital to ensure that all '
  + 'stakeholders have a shared understanding of the project’s goals, objectives, and constraints.',
  },
  {
    id: 2,
    text: 'The first step in discovery is research. Our specialists conducted interviews, performed surveys, '
  + 'and created focus groups to gather data about the target audience and market. This data can be used '
  + 'to develop a deeper understanding of the problem and identify potential solutions.',
  },
  {
    id: 3,
    text: 'Our next step was analysis. This is where the data from research is analyzed to identify trends '
  + 'and patterns. We used the acquired information to develop hypotheses about the future product and '
  + 'its market fit.',
  },
  {
    id: 4,
    text: 'Finally, we took all of the information from the research and analysis and created a detailed project '
  + 'plan. This plan included a timeline, milestones, and responsibilities for each team member. The goal of this '
  + 'phase is to create a clear and achievable plan that will lead to a successful project. The discovery phase '
  + 'for the MiPaddle project lasted for two weeks. We had three calls with the client and PM to collect and '
  + 'correct data on the project.',
  },
  {
    id: 5,
    text: 'After conducting the discovery phase, we proceeded to prototyping, wireframing, and designing. We '
  + 'developed a flowchart for the future product. After that, our designers did wireframes and prepared a '
  + 'mood board with design options. Once it was approved, we did the UI design itself.',
  },
  {
    id: 6,
    text: 'One of the primary goals of the design was to make users feel the dynamic of sport through the '
  + 'interface. This was reached by beveled edges of buttons that imitate moving. Also, it was required to '
  + 'keep the design simple and friendly. We managed to achieve this by color scheme and forms of elements. '
  + 'So, in general, our solutions for this project were:',
  },
];
