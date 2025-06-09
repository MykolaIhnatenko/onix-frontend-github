const costDevelopmentServicesContentData = [
  {
    id: 1,
    number: '01',
    title: 'All applications were dockerized',
    content: [
      `Dockerizing the application enabled us to reduce resource consumption. Docker containers are
      lightweight and require less resources than traditional virtual machines. This means more containers
      can be run on a single server, maximizing the available resources and reducing costs.`,
    ],
  },
  {
    id: 2,
    number: '02',
    title: 'Database on RDS only for the main app',
    content: [
      `RDS is a remote DBMS that enhances fault tolerance. Previously, each application had its own RDS,
      and the client had to pay for each one.`,
      `If different databases are created in one RDS and connected to different applications, one RDS
      will be serving different applications, but the client will pay only for one.`,
    ],
  },
  {
    id: 3,
    number: '03',
    title: `We placed two sites on WordPress, staging
            and production, on one t2.small instance.`,
    content: [
      `It was sufficient for the current traffic. We set up servers types that would accommodate
      the application’s current operation with a small capacity margin, instead of servers with
      a huge capacity that would not actually be fully utilized.`,
    ],
  },
  {
    id: 4,
    number: '04',
    title: 'Chose optimal database instance types for the app',
    content: [
      'The trick is to always have a resource margin while also avoiding the use of excessively large servers.',
    ],
  },
  {
    id: 5,
    number: '05',
    title: 'Setting up backup',
    content: [
      `Backups helped reduce downtime associated with system failures or disasters. A reliable backup system
      enabled us to recover data and systems quickly, minimizing the impact on operations. Establishing
      backups is critical for ensuring data loss prevention, business continuity, regulatory compliance,
      and cybersecurity.`,
    ],
  },
];

export default costDevelopmentServicesContentData;
