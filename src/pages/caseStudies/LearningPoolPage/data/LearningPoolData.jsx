const basePath = '/static/images/Pages/LearningPoolPage';
const vadimPhoto = `${basePath}/img_vadim_photo.webp`;
const vadimPhoto2x = `${basePath}/2x/img_vadim@2x.webp`;
const yevheniiPhoto = `${basePath}/img_yevgenii_photo.webp`;
const yevheniiPhoto2x = `${basePath}/2x/img_yevgenii@2x.webp`;
const alexanderPhoto = `${basePath}/img_alexander_photo.webp`;
const alexanderPhoto2x = `${basePath}/2x/img_alexander@2x.webp`;
const dmitryiPhoto = `${basePath}/img_dmitryi_photo.webp`;
const dmitryiPhoto2x = `${basePath}/2x/img_dmitryi@2x.webp`;
const vladPhoto = `${basePath}/img_vlad_photo.webp`;
const vladPhoto2x = `${basePath}/2x/img_vlad@2x.webp`;

export const cardsData = [
  {
    imgSrc: `${basePath}/img_card_illustration_6.webp`,
    imgSrc2x: `${basePath}/2x/img_6_card_illustration@2x.webp`,
    text: 'The Product Owner works with the business and customers to create basic high-level tasks.',
    width: 199,
    height: 270,
  },
  {
    imgSrc: `${basePath}/img_card_illustration_5.webp`,
    imgSrc2x: `${basePath}/2x/img_5_card_illustration@2x.webp`,
    text: 'A Tech Lead and senior developers jointly analyze '
            + 'these tasks and describe what needs to be completed within the task.',
    width: 199,
    height: 244,
  },
  {
    imgSrc: `${basePath}/img_card_illustration_4.webp`,
    imgSrc2x: `${basePath}/2x/img_4_card_illustration@2x.webp`,
    text: 'The task card gets on the development board.',
    width: 199,
    height: 243,
  },
  {
    imgSrc: `${basePath}/img_card_illustration_3.webp`,
    imgSrc2x: `${basePath}/2x/img_3_card_illustration@2x.webp`,
    text: 'Upon execution, the code needs to be approved by at least two other developers.',
    width: 199,
    height: 243,
  },
  {
    imgSrc: `${basePath}/img_card_illustration_2.webp`,
    imgSrc2x: `${basePath}/2x/img_2_card_illustration@2x.webp`,
    text: 'Then, the task must be tested twice and goes to the stage branch where it is tested again.',
    width: 170,
    height: 240,
  },
  {
    imgSrc: `${basePath}/img_card_illustration_1.webp`,
    imgSrc2x: `${basePath}/2x/img_1_card_illustration@2x.webp`,
    text: 'Only then, will the task finally move to Production.',
    width: 170,
    height: 240,
  },
];

export const processData = [
  {
    imgSrc: `${basePath}/ic_Rectangle_Blue-4.svg`,
    text: 'The team’s focus on absolute quality;',
  },
  {
    imgSrc: `${basePath}/ic_Rectangle_Blue-3.svg`,
    text: 'A considered, realistic approach to deadlines;',
  },
  {
    imgSrc: `${basePath}/ic_Rectangle_Blue-2.svg`,
    text: 'Constant pair programming to share knowledge;',
  },
  {
    imgSrc: `${basePath}/ic_Rectangle_Blue-1.svg`,
    text: 'Comprehensive documentation of everything so that new team members can adapt quickly;',
  },
  {
    imgSrc: `${basePath}/ic_Rectangle_Blue.svg`,
    text: 'Limitation of programming time to 5 hours per '
            + 'day — the rest of the time is allocated to meetings, reviews, planning, etc',
  },
];

export const developers = [
  {
    imgSrc: vadimPhoto,
    srcSet: `${vadimPhoto} 1x, ${vadimPhoto2x} 2x`,
    name: 'Vadim',
    text: 'Onix’s Senior Developer on Project #1',
  },
  {
    imgSrc: yevheniiPhoto,
    srcSet: `${yevheniiPhoto} 1x, ${yevheniiPhoto2x} 2x`,
    name: 'Yevhenii',
    text: 'Developer on Project #1',
  },
  {
    imgSrc: alexanderPhoto,
    srcSet: `${alexanderPhoto} 1x, ${alexanderPhoto2x} 2x`,
    name: 'Alexander',
    text: 'Onix’s Senior Developer on Project #2',
  },
  {
    imgSrc: dmitryiPhoto,
    srcSet: `${dmitryiPhoto} 1x, ${dmitryiPhoto2x} 2x`,
    name: 'Dmitryi',
    text: 'Developer on Project #2',
  },
  {
    imgSrc: vladPhoto,
    srcSet: `${vladPhoto} 1x, ${vladPhoto2x} 2x`,
    name: 'Vlad',
    text: 'Developer shifting between the two projects',
  },
];

export const projects = [
  {
    id: 1,
    title: 'Project #1',
    text: (
      <>
        <p>
          Large data warehouse. It collects a lot of diverse information and data,
          analyzes it, and arranges in a certain format into a database. This data can
          be visualized in hundreds of different graphs or a dozen formats and tables,
          empowering individuals to make business decisions and draw lessons.
        </p>
        <p>
          This data warehouse also aggregates data from other services and projects,
          which makes it a universal tool for work with large volumes of data or
          statistics.
        </p>
      </>
    ),
    src: `${basePath}/ic_project1.svg`,
  },
  {
    id: 2,
    title: 'Project #2',
    text: (
      <>
        <p>
          Video streaming and video hosting service with elements of machine learning.
          Learning Pool positions it as Netflix for learning. The video, audio, and text
          courses are presented conveniently, interactively, and most importantly, smartly.
        </p>
        <p>
          The more people use the project, the better the system understands what to offer
          each user and how to do it compellingly.
        </p>
      </>
    ),
    src: `${basePath}/ic_project2.svg`,
  },
];

export const icons = [
  {
    src: '/static/images/Pages/LearningPoolPage/ic_icon_tech0.svg',
    width: 52,
    height: 46,
  },
  {
    src: '/static/images/Pages/LearningPoolPage/ic_icon_tech1.svg',
    width: 42,
    height: 46,
  },
  {
    src: '/static/images/Pages/LearningPoolPage/ic_icon_tech2.svg',
    width: 46,
    height: 33,
  },
  {
    src: '/static/images/Pages/LearningPoolPage/ic_icon_tech3.svg',
    width: 46,
    height: 46,
  },
  {
    src: '/static/images/Pages/LearningPoolPage/ic_icon_tech4.svg',
    width: 46,
    height: 25,
  },
  {
    src: '/static/images/Pages/LearningPoolPage/ic_icon_tech5.svg',
    width: 42,
    height: 46,
  },
  {
    src: '/static/images/Pages/LearningPoolPage/ic_icon_tech6.svg',
    width: 45,
    height: 46,
  },
  {
    src: '/static/images/Pages/LearningPoolPage/ic_icon_tech7.svg',
    width: 43,
    height: 46,
  },
  {
    src: '/static/images/Pages/LearningPoolPage/ic_icon_tech8.svg',
    width: 46,
    height: 46,
  },
  {
    src: '/static/images/Pages/LearningPoolPage/ic_icon_tech9.svg',
    width: 46,
    height: 29,
  },
  {
    src: '/static/images/Pages/LearningPoolPage/ic_icon_tech10.svg',
    width: 50,
    height: 38,
  },
  {
    src: '/static/images/Pages/LearningPoolPage/ic_icon_tech11.svg',
    width: 33,
    height: 46,
  },
  {
    src: '/static/images/Pages/LearningPoolPage/ic_icon_tech12.svg',
    width: 46,
    height: 46,
  },
  {
    src: '/static/images/Pages/LearningPoolPage/ic_icon_tech13.svg',
    width: 46,
    height: 46,
  },
  {
    src: '/static/images/Pages/LearningPoolPage/ic_icon_tech14.svg',
    width: 25,
    height: 5,
  },
];

export const analysisCards = [
  {
    id: 1,
    title: 'Long-term cooperation',
    text: (
      <>
        <p>
          We have been working together for a year, and the amount of work remains
          stable: an e-learning product development is a never-ending process. At the
          moment, Onix’s specialists are involved in two projects and are about to
          start working on the 3rd project for Learning Pool.
        </p>
        <p>
          Onix’s teams are involved in software development, support, testing,
          analysis, study, and anything else that the client requires.
        </p>
      </>
    ),
  },
  {
    id: 2,
    title: 'Uniting teams',
    text: (
      <p>
        The collaboration continues to go smoothly, members of the internal and
        offshore teams understand each other perfectly, everyone is encouraged to
        participate, all proposals are discussed openly, and the decisions are made
        collectively. Onix’s programmers are given sufficient time so they can fully
        concentrate on writing high-quality code.
      </p>
    ),
  },
];

export const infoCards = [
  {
    id: 1,
    title: '800',
    text: 'customers worldwide',
  },
  {
    id: 2,
    title: '3.5M',
    text: 'active learners',
  },
  {
    id: 3,
    title: '98%',
    text: 'recommendation rate',
  },
];
