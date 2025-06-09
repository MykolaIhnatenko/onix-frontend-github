export interface AppContent {
  [key: string]: string[];
}

export const appContent: AppContent = {
  'The 4D Insight Simulator (4D training simulation app) is primarily intended for:': [
    'Large companies that need to have staff training simulator app and provide security-related services '
     + 'before challenging events',
    'Event-organizing companies;',
    'Small companies that need to train their personnel before particular events;',
    'Any organizations that need to prepare their staff for upcoming events.',
  ],
  'The types of training scenarios include, but are not limited to:': [
    'Business continuity',
    'Resilience training',
    'Major and critical incidents',
    'Cyber threats',
    'Sporting events',
    'Music events',
    'Maritime safety',
    'Leadership training',
    'Employee onboarding',
  ],
};

export const resultsContent = [
  {
    id: 1,
    text: 'KPMG, one of the world\'s Top-10 consulting companies, uses the 4DiSimulator for its staff training '
    + 'simulation activities. The biggest training so far has been held for 7 teams and involved over '
    + '100 trainees. Currently, the supported languages include English, French, and Indonesian.',
  },
  {
    id: 2,
    text: 'The highly effective communication style adopted early in the simulator development still promotes '
            + 'the cooperation between 4D Insight and Onix’s teams. Whether we modify the UI or add new '
            + 'features to the product, we hold the same short video calls with screen sharing and discussions.',
  },
  {
    id: 3,
    text: 'The communication has always been honest, friendly, smooth, and thus productive. For example, when Rob '
            + 'suggests desirable features, he is always open to our experts’ advice on any more time- and '
            + 'cost-efficient options.',
  },
  {
    id: 4,
    text: 'The 4DiSimulator was built to meet the challenging demands of scenario-based simulation exercises. '
            + 'Both 4D Insight and Onix’s teams remain committed to meeting the users’ evolving requirements '
            + 'while creating invariably excellent user experiences. We persistently innovate and integrate new '
            + 'technology to keep the product at the leading edge in the marketplace.',
  },
];

export const featuresCards = [
  {
    id: 1,
    title: 'Instructor’s scenario editor',
    content: (
      <>
        <p className="fs16 grayText">
          The Instructor’s scenario editor facilitates the rapid and efficient development of bespoke training
          scenarios to meet organizations’ and trainees’ unique needs. These may range from simple decision-making
          tasks to complex scenarios extended over several days.
        </p>
        <br />
        <p className="fs16 grayText">
          The editor offers scenario templates to which Instructors can easily add images (e.g., floor plan of
          the premises), video, audio, and social media content. This allows for creating diverse realistic
          scenarios for events as disparate as a rush hour at a McDonald’s restaurant and a political rally.
        </p>
      </>
    ),
  },
  {
    id: 2,
    title: 'Create unique scenarios',
    content: (
      <p className="fs16 grayText">
        4D Insight even uses exclusive aerial photography and video footage to make each unique scenario come to life.
      </p>
    ),
  },
  {
    id: 3,
    title: 'Plan your training session',
    content: (
      <p className="fs16 grayText">
        The Instructor can plan a training session minute by minute by setting the times at which the app will
        display each scenario item to the trainees, as well as the time allowed for them to respond. This helps
        create lifelike ‘real-time’ scenarios to which trainees must react under stress.
      </p>
    ),
  },
  {
    id: 4,
    title: 'Security',
    content: (
      <p className="fs16 grayText">
        The Instructor also controls who participates in the training session as trainees and instructors,
        to what teams they belong, and what they can see and do. The Instructor issues the invitations that
        allow them to log in to the platform.
      </p>
    ),
  },
  {
    id: 5,
    title: 'Manage your training session',
    content: (
      <p className="fs16 grayText">
        The Instructor can easily manage their templates and planned and past training sessions for multiple
        companies. Separate servers storing each company’s data ensure its security and confidentiality.
      </p>
    ),
  },
];

export const processContent = [
  {
    id: 1,
    title: 'The discovery phase.',
    content: (
      <>
        <p className="fs16 darkGrayText">
          Firstly, one of Onix’s project managers and a business analyst spent about two weeks actively
          communicating with Rob Povey to work out the project specification. Every day, they discussed the user
          stories and Rob’s requirements during short video conferences while creating, sharing, and updating sketches
          of the future web pages and screens.
        </p>
        <br />
        <p className="fs16 darkGrayText">
          After the app’s structure and project requirements were crystallised into a clickable mockup, Rob gave
          the green light for the proper web app development.
        </p>
      </>
    ),
  },
  {
    id: 2,
    title: 'UX/UI design.',
    content: (
      <>
        <p className="fs16 darkGrayText">
          Onix’s team realized the product’s design from low-fidelity Balsamiq wireframes developed at the discovery
          stage through a high-fidelity prototype created by Onix’s UX/UI expert in Figma to the company’s branding.
        </p>
        <br />
        <p className="fs16 darkGrayText">
          The visual style of the 4D training simulation app is clean and minimalistic,
          using basically three colors. The simple interfaces and straightforward navigation
          help the instructors to concentrate on their job and the trainees to access and perceive
          various textual and visual information faster. The design is optimized for mobile devices
          for the trainees’ convenience.
        </p>
        <br />
        <p className="fs16 darkGrayText">
          The Administrator can customize the Instructors’ and their trainees’ interfaces to provide an authentic
          corporate feel through logos and color schemes.
        </p>
      </>
    ),
  },
  {
    id: 3,
    title: 'The tech stack.',
    content: (
      <>
        <p className="fs16 darkGrayText">
          The front-end part of the training simulation web app was built using
          <span className="fs16 purpleText fw500"> Angular 14.</span>
        </p>
        <br />
        <p className="fs16 darkGrayText">
          The back-end is written on
          <span className="fs16 purpleText fw500"> PHP </span>
          with
          <span className="fs16 purpleText fw500"> REST API, Node.js </span>
          server with
          <span className="fs16 purpleText fw500"> Socket.IO </span>
          for interaction with the front-end, and
          <span className="fs16 purpleText fw500"> RabbitMQ </span>
          used for successions of the events.
        </p>
        <br />
        <p className="fs16 darkGrayText">
          This mix facilitates a smooth training process with instant notifications and ensures the simulator’s
          high performance, which has been thoroughly tested and certified.
        </p>
      </>
    ),
  },
];

export const flowCards = [
  {
    id: 1,
    title: 'Admin',
    content: 'The owner of the 4DiSimulator',
  },
  {
    id: 2,
    title: 'Instructor',
    content: 'Any number of users may use the app to conduct training',
  },
  {
    id: 3,
    title: 'Participants',
    content: 'An Instructor defines the number of trainees using the app during a training session.',
  },
];

export const flowContent = [
  {
    id: 1,
    text: 'When the app is used in a team environment, syndicates are allocated and team leaders are '
    + 'nominated for each session in the scenario training. This can be based on small groups as part '
    + 'of a training course for up to 20 participants or larger groups that may form part of a ‘conference '
    + 'style’ approach of 100 or more, if required. At an individual level, the 4D training simulator can '
    + 'be used for testing command decisions as part of an accreditation process.',
  },
  {
    id: 2,
    text: 'Training with the 4DiSimulator resembles a traditional process familiar to most people. Basically, '
        + 'the app simulates situations where a trainee, trainees, or groups must proactively prevent or '
        + 'respond to emergencies, e.g., a stampede at a football match.',
  },
  {
    id: 3,
    text: 'The trainees receive information on various scenarios in real time in the format of videos, messages, '
        + 'or even Twitter and Facebook posts. Their reactions take the form of written responses to questions set by '
        + 'the Instructor, multiple choice quizzes, or messages in team chats and the training’s general forum. '
        + 'Where the time to complete a task is limited, the trainees will see a countdown.',
  },
  {
    id: 4,
    text: 'The personnel training simulator app’s smart responsive design ensures its '
    + 'convenient use by trainees on mobile devices.',
  },
];

export const flowLastContent = [
  {
    id: 1,
    text: 'The Instructor may launch a training session in their app and simply track the trainees’ responses '
        + 'and actions, or they can actively participate in it, e.g., by adding tasks and questions on the go.',
  },
  {
    id: 2,
    text: 'All actions of the trainees in the app are logged. After the training is over, all the participants '
        + 'receive PDF documents with the results and logs of all notes, chat conversations, etc., second by second. '
        + 'The instructor can analyze the performance of teams and individual participants in detail. Saving the logs '
        + 'into the Instructor’s account enables them to track the participants’ progress over time, if needed.',
  },
];
