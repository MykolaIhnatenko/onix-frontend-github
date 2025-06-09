import ITechnology from '../interfaces/ITechnology';

const technologiesList: ITechnology[] = [
  {
    name: 'Backend',
    content: {
      backend: ['Node.JS', 'PostgreSQL', 'GCP', 'Monorepo', 'OAuth 2.0', 'GitHub-actions', 'TSC Express', 'Firebase',
        'Stripe', 'Google Cloud Storage', 'Sentry', 'Cloudflare', 'Segment APIs', 'Twilio', 'GraphQL'],
    },
  },
  {
    name: 'Frontend & Design',
    content: {
      frontend: ['React', 'React Relay', 'TypeScript', 'Material-UI', 'Capacitor', 'Firebase Authentication',
        'Chart.js'],
      design: ['Figma', 'Illustrator', 'Photoshop'],
    },
  },
];

export default technologiesList;
