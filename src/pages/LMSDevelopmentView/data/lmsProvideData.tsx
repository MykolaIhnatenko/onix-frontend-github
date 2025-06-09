import getAccordionTextData, { IAccordionTextData } from 'utils/getAccordionTextData';

const data: IAccordionTextData[] = [
  {
    id: 1,
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
    id: 5,
    number: '05',
    title: 'Communication',
    content: [
      `We can implement live video, instant messaging, or VoIP calls into
      your LMS to allow your users to converse, bounce ideas off one another,
      and get advice on various activities.`,
    ],
  },
  {
    id: 2,
    number: '02',
    title: 'Course management',
    content: [
      `Provide an opportunity for adding, editing, or removing courses in
      a convenient and easy way. We build a course management feature that enables
      users to upload videos, photos, PDF documents, interactive exercises, and other
      learning materials to support and enhance education delivery and make learning
      more interesting and interactive.`,
    ],
  },
  {
    id: 6,
    number: '06',
    title: 'Payments',
    content: [
      `We ensure a payment option that is easy to use and highly secure.
      To implement the payment feature, we can integrate a secure payment gateway
      using a payment platform like Stripe or PayPal.`,
    ],
  },
  {
    id: 3,
    number: '03',
    title: 'Gamification',
    content: [
      `This is a great way to make learning more pleasant and fun,
      leading to higher uptake and ongoing interactions. Gamification consists
      of elements such as points, levels, a list of top learners, quizzes, polls,
      rewards, badges, etc.`,
    ],
  },
  {
    id: 7,
    number: '07',
    title: 'Testing and assessment management',
    content: [
      `Any LMS should provide an opportunity to assess and manage users' skills
      acquired during training. Our specialists develop easy-to-use tools to create
      various assessments in the form of quizzes, tests, assignments with detailed
      answers, and more.`,
    ],
  },
  {
    id: 4,
    number: '04',
    title: 'Analytics',
    content: [
      `Our specialists provide real-time analytics that rapidly processes a large
      amount of data to track detailed information, including learning reports, graphs
      and diagrams, financial reports, and many more. LMS analytics allows you to make
      data-driven decisions, enhance your strategy, and deliver the best possible learning
      experiences.`,
    ],
  },
  {
    id: 8,
    number: '08',
    title: 'Social media integrations',
    content: [
      `LMS with social media integration increases user engagement and makes
      the learning experience interactive and shareable. We can empower your students
      to share their results with friends on social media such as Facebook, YouTube, Twitter, etc.`,
    ],
  },
];

const lmsProvideData = getAccordionTextData(data);

export default lmsProvideData;
