import { IAccordionData as IAccordionData2 } from 'components/AccordionTemplate/interfaces/IAccordion';
import ItemText from 'components/ItemText/ItemText';

export const firstData: IAccordionData2[] = [
  {
    id: 11,
    number: '01',
    title: 'Integration testing',
    content: (
      <ItemText
        content={[
          `Our specialists verify the interfaces between system components. This ensures that all modules
          are working together and functioning properly. We identify any issues arising from discrepancies
          between different components or systems, allowing developers to resolve them quickly before deployment.`,
        ]}
      />
    ),
  },
  {
    id: 12,
    number: '02',
    title: 'System testing',
    content: (
      <ItemText
        content={[
          `We ensure that the system meets all the requirements and specifications. We simulate real-world scenarios
          to identify defects and bugs before the system deployment. Our experts also uncover issues related to
          the system's reliability, usability, and scalability.`,
        ]}
      />
    ),
  },
  {
    id: 13,
    number: '03',
    title: 'UI/UX testing',
    content: (
      <ItemText
        content={[
          `The Onix team assesses the user interface (UI) and user experience (UX) to detect any issues, errors, or
          discrepancies in the program's interface or user interaction. Our specialists verify that an application
          or website possesses an intuitive and user-friendly interface that aligns with user expectations.`,
        ]}
      />
    ),
  },
  {
    id: 14,
    number: '04',
    title: 'Acceptance testing',
    content: (
      <ItemText
        content={[
          `Our testing team verifies that the system meets the user's specified requirements, ensures that it functions
          correctly, and provides a satisfactory experience for users.`,
        ]}
      />
    ),
  },
];

export const secondData: IAccordionData2[] = [
  {
    id: 21,
    number: '01',
    title: 'Performance testing',
    content: (
      <ItemText
        content={[
          `Our experts determine the speed, scalability, stability, and reliability of your product by proving
          its ability to handle large volumes of data and ensure a smooth user experience.`,
        ]}
      />
    ),
  },
  {
    id: 22,
    number: '02',
    title: 'Usability testing',
    content: (
      <ItemText
        content={[
          `We evaluate the ease at which users can interact with a product, measure user satisfaction with the app,
          and analyze if it's user-friendly. We also determine if users understand how to use your product
          and identify areas where improvements may occur.`,
        ]}
      />
    ),
  },
  {
    id: 23,
    number: '03',
    title: 'Accessibility testing',
    content: (
      <ItemText
        content={[
          `The Onix team ensures that web-based apps are accessible to all users regardless of their disabilities.
          We identify potential improvement areas, such as ensuring that text is readable by screen readers
          and images have 'alt' tags, which can benefit people with visual impairments.`,
        ]}
      />
    ),
  },
  {
    id: 24,
    number: '04',
    title: 'Installation testing',
    content: (
      <ItemText
        content={[
          `We ensure that the system can successfully install, upgrade, or migrate from one version to another without
          any issues. This testing type helps identify any installation-specific problems, such as compatibility
          issues between hardware and software, incorrect binary file versions, or incompatible drivers.`,
        ]}
      />
    ),
  },
  {
    id: 25,
    number: '05',
    title: 'Configuration testing',
    content: (
      <ItemText
        content={[
          `Our testing team ensures that the system can be configured correctly and that the configured components
          interact as expected with one  another. We identify any component-level issues, such as incorrect data
          types, misconfigured parameters or settings that can lead to unexpected behavior in the system.`,
        ]}
      />
    ),
  },
  {
    id: 26,
    number: '06',
    title: 'Security testing (OWASP TOP 10)',
    content: (
      <ItemText
        content={[
          `We ensure that the system is secure from potential threats, vulnerabilities or attacks. We identify any
          security-related issues, such as unauthorized user access, malicious code injection, or data leakage.
          Our experts validate that the data stored in the system is safe and protected from manipulation or theft.`,
        ]}
      />
    ),
  },
  {
    id: 27,
    number: '07',
    title: 'Localization testing',
    content: (
      <ItemText
        content={[
          `Our experts ensure that the system can be used across multiple languages and regions. We identify any
          language-related issues such as incorrect translations or culturally inappropriate messages. We validate
          that the system functions properly in different locales and no errors occur due to regional differences.`,
        ]}
      />
    ),
  },
];

export const thirdData: IAccordionData2[] = [
  {
    id: 31,
    number: '01',
    title: 'Regression testing',
    content: (
      <ItemText
        content={[
          `We identify any changes in the product that would negatively impact existing functionality.
          This type of testing is conducted after development has been completed and new features or
          fixes have been applied, to ensure that the application or system is still stable and
          performing as expected.`,
        ]}
      />
    ),
  },
  {
    id: 32,
    number: '02',
    title: 'Sanity testing',
    content: (
      <ItemText
        content={[
          `Our specialists help to ensure that any recent changes have not broken or adversely affected
          the most essential features of the system. It is usually done for a subset of test cases and
          focuses on verifying the system's core functionality.`,
        ]}
      />
    ),
  },
  {
    id: 33,
    number: '03',
    title: 'Smoke testing',
    content: (
      <ItemText
        content={[
          `We evaluate the software stability and determine if the most important functions of the critical features
          work correctly. Smoke testing identifies any significant issues before more thorough tests, allowing
          developers to fix them and move on to more complex tests quickly.`,
        ]}
      />
    ),
  },
  {
    id: 34,
    number: '04',
    title: 'Confirmation testing',
    content: (
      <ItemText
        content={[
          `We uncover any hidden defects or bugs and help to ensure that the patches and fixes introduced into the
          system have been applied correctly. We also identify performance regressions or any other functional
          issues that may arise due to changes made in the code.`,
        ]}
      />
    ),
  },
];
