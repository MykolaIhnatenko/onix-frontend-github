export const sections = [
  {
    number: '01',
    title: <>Technical audit&nbsp;report</>,
    items: [
      'Summary of codebase health and structure',
      'Identification of major bugs, technical debt, and performance bottlenecks',
      'Security vulnerabilities and compliance issues (if any)',
    ],
  },
  {
    number: '02',
    title: <>AI-powered code analysis&nbsp;results</>,
    items: ['Automated detection of critical issues using advanced AI tools'],
  },
  {
    number: '03',
    title: <>Architecture & infrastructure review</>,
    items: [
      'Evaluation of backend architecture, database design, and deployment setup',
      'Recommendations for modernization and scalability',
    ],
  },
  {
    number: '04',
    title: <>Requirements gap&nbsp;analysis</>,
    items: ['Key missing features, broken workflows, or UX blockers'],
  },
  {
    number: '05',
    title: <>Recovery timeline & milestones</>,
    items: ['Prioritized phases for quick wins and long-term improvements'],
  },
  {
    number: '06',
    title: <>Live review session (optional)</>,
    items: ['Walk-through of findings with our senior architect', 'Q&A session to align on next steps and scope'],
  },
];

export const steps = [
  {
    number: 1,
    title: <>Schedule a&nbsp;call</>,
    description:
  <>
    It starts with a conversation – schedule your
    {' '}
    <span className="font-bold">free&nbsp;audit.</span>
  </>,
  },
  {
    number: 2,
    title:
  <>
    Sign
    {' '}
    <br className="hidden screen-lg:block screen-md:hidden" />
    {' '}
    an NDA
  </>,
    description:
  <>
    We’ll sign an NDA. Then our experts will
    {' '}
    <span className="font-bold">review your project’s code and status at no cost.</span>
    {' '}
    Think of it as a health check for your software.
  </>,
    delay: 1.5,
  },
  {
    number: 3,
    title: 'Get audit report',
    description: `Within a week or two, we’ll come back to you with an audit report: what’s wrong,
                    why it’s happening, and how we can fix it. This includes a high-level
                    recovery plan and recommendations.`,
  },
];
