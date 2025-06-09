const businessContextBlockDataSecond = {
  title: 'App user flows',
  content: [
    {
      id: 1,
      columnTitle: 'Using the application, administrators\u00A0can',
      list: [
        'Add other users (admins and doctors) and edit user profiles',
        'Add patients, addresses and additional detail, and doctor-patient relations',
        'Add information about hospitals and staff',
        'Schedule house calls',
        'Add the doctors’ and patients’ info to routes',
        `View reports of 10 types: Missed Patients, Completed Visits, Audio Notes, Provider Visit Summary,
        Referral Census, Referrals, Routes, New Patients, Documents, and Weekly Route Overview`,
      ],
    },
    {
      id: 2,
      columnTitle: 'A doctor installs the PWA on\u00A0a\u00A0smartphone/tablet to',
      list: [
        'View their daily route as a list of patients/addresses to visit or as the patients’ locations on the map',
        'Change the order of patients in the route',
        'View scheduled patients for weeks and months in advance',
        'Confirm/cancel house calls and add patients to\u00A0the\u00A0queue',
        `Make notes regarding a house call in any of the available five formats,
        including text, audio, and voice-to-text`,
        'View each patient’s medical records and past house\u00A0calls',
      ],
    },
  ],
  leftContent: `Typically, a doctor logs in, views the route for the day, and contacts the patients to confirm
    their house calls. Then, the doctor starts the route, drives to each patient, and, once completed, marks
    the house call in the application.`,
  rightContent: `Using directions from the app, the doctor visits all patients on their list. At the end of
    the route, all the information automatically becomes available for administrators to review.`,
};

export default businessContextBlockDataSecond;
