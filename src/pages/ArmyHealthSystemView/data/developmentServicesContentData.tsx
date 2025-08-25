import { IDevelopmentServicesItemData } from 'components/DevelopmentServicesTemplate/interfaces/IDevelopmentServicesTemplate';

const developmentServicesContentData: IDevelopmentServicesItemData[] = [
  {
    id: 1,
    number: '01',
    title: 'Instant Identification via ID or QR Code',
    content: [
      `Medics can enter a soldier’s unique service ID or scan a QR code (often attached to the vest or
       first-aid kit), immediately pulling up a digital medical card and eliminating the
        need to sift through paper documents.`,
    ],
  },
  {
    id: 2,
    number: '02',
    title: 'Comprehensive Personal and Military Info',
    content: [
      `Key data fields—ID number, date of birth, rank, and unit details—appear at a glance, 
      ensuring medical staff have essential background information when delivering care.`,
    ],
  },
  {
    id: 3,
    number: '03',
    title: 'Injury Mapping and Documentation',
    content: [
      `Wounds can be precisely marked on a human-body diagram and labeled by type
       (e.g., gunshot, concussion, amputation). Attachable photos allow for visual
        documentation, aiding subsequent medical teams.`,
    ],
  },
  {
    id: 4,
    number: '04',
    title: 'Vital Signs and Symptom Logging',
    content: [
      <>
        Time-stamped entries for pulse, blood pressure, respiratory rate, and oxygen
        saturation enable ongoing monitoring. Levels&nbsp;of consciousness and pain scores
        help staff prioritize&nbsp;interventions.
      </>,
    ],
  },
  {
    id: 5,
    number: '05',
    title: 'Detailed Record of Medical Assistance',
    content: [
      `Medics can specify exactly where and how tourniquets, bandages, or airway devices were applied.
       This detailed log promotes consistent treatment, especially during evacuations
        and handoffs between care providers.`,
    ],
  },
  {
    id: 6,
    number: '06',
    title: 'Time-Saving Digital Workflow',
    content: [
      `All data is stored and updated in real time, drastically reducing paperwork, transcription errors,
       and confusion during hectic situations. Evacuation teams and field hospitals receive up-to-date
        information before the injured arrive, accelerating care and potentially saving lives.`,
    ],
  },
];

export default developmentServicesContentData;
