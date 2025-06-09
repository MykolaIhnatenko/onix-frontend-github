import getAccordionTextData, { IAccordionTextData } from 'utils/getAccordionTextData';

const data: IAccordionTextData[] = [
  {
    id: 101,
    number: '01',
    title: 'Tailored dashboard',
    content: [
      `We build a comprehensive dashboard for teachers and students.
      Teachers can quickly and effectively manage students' information,
      view their tests, leave comments about completed tasks, and give marks.`,
      `While students have all the needed information such as purchased courses,
      current courses, their progress, linked teachers, and schedule of upcoming
      lessons or exams.`,
    ],
  },
  {
    id: 105,
    number: '05',
    title: 'Communication',
    content: [
      `We can implement live video, instant messaging, or VoIP calls into
      your eLearning solution to allow your users to converse, bounce ideas
      off one another, and get advice on various activities.`,
    ],
  },
  {
    id: 102,
    number: '02',
    title: 'Content management',
    content: [
      `Provide an opportunity for creating, adding, editing,
      or removing content in a convenient and easy way.
      We build a content management feature that enables users
      to upload videos, photos, PDF documents, interactive exercises,
      and other learning materials to support and enhance education
      delivery and make learning more exciting and interactive.`,
    ],
  },
  {
    id: 106,
    number: '06',
    title: 'Payments',
    content: [
      `We ensure a payment option that is easy to use and highly secure.
      To implement the payment feature, we can integrate a secure payment
      gateway using a payment platform like Stripe or PayPal.`,
    ],
  },
  {
    id: 103,
    number: '03',
    title: 'Gamification',
    content: [
      `This is a great way to make the learning process more pleasant and fun,
      leading to higher uptake and ongoing interactions.
      Gamification in e-learning solutions consists of elements such as points,
      levels, a list of top learners, quizzes, polls, rewards, badges, etc.`,
    ],
  },
  {
    id: 107,
    number: '07',
    title: 'Social media integrations',
    content: [
      `eLearning product with social media integration increases user engagement
      and makes the learning experience interactive and shareable.
      We can empower your students to share their results with friends
      on social media such as Facebook, YouTube, Twitter, etc.`,
    ],
  },
  {
    id: 104,
    number: '04',
    title: 'Analytics',
    content: [
      `Our e-learning specialists provide real-time analytics that rapidly processes
      a large amount of data to track detailed information, including learning reports,
      graphs and diagrams, financial reports, and many more. Rich analytics allows you
      to make data-driven decisions, enhance your strategy, and deliver the best possible
      learning experiences.`,
    ],
  },
  {
    id: 108,
    number: '08',
    title: 'API: Third-party services',
    content: [
      `It's an excellent opportunity to deliver many products in one place
      and let users try them without switching apps. Thanks to flexible
      architecture, our experts can integrate your educational software
      with third-party apps and tools such as CRM, Salesforce, video libraries,
      and payment services like Stripe or Paypal.`,
    ],
  },
];

const eLearningFuturesData = getAccordionTextData(data);

export default eLearningFuturesData;
