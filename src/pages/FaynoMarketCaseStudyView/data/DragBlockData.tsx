import ContentText from 'components/ContentText/ContentText';
import SliderItem from '../components/SliderItem';

const listItem = "flex mt-[5px] before:content-['﹂'] before:mr-[10px]";

const dataSliderItems = [
  {
    id: 1,
    content: (
      <SliderItem
        id="01"
        title="Project requirements clarification"
        desc={[
          `Due to a tight deadline, it wasn’t feasible to realize all of the client’s ideas and
          wishes in the first version of the mobile application.`,
          `Together, we reviewed, discussed, and approved the proposed app features and software
          requirements for a minimum viable product (MVP).`,
        ]}
      />
    ),
  },
  {
    id: 2,
    content: (
      <SliderItem
        id="02"
        title="Dev team and technology stack selection"
        desc={[
          'The team that worked on the project at different times included:',
          (
            <>
              <ContentText marginAbsent tag="p" className={`${listItem} !mt-0`}>
                2 mobile app developers
              </ContentText>
              <ContentText marginAbsent tag="p" className={listItem}>
                2 back-end developers
              </ContentText>
              <ContentText marginAbsent tag="p" className={listItem}>
                2 UX/UI designers
              </ContentText>
              <ContentText marginAbsent tag="p" className={listItem}>
                Quality assurance (QA) engineer
              </ContentText>
              <ContentText marginAbsent tag="p" className={listItem}>
                Project manager
              </ContentText>
            </>
          ),
          `Tech stack including Swift, Kotlin, and CakePHP for a common back-end application with Rest API
          facilitated functionality customization. PHP-based back-end development facilitates database
          integration and content management; CakePHP ensures convenient request management settings.`,
        ]}
      />
    ),
  },
  {
    id: 3,
    content: (
      <SliderItem
        id="03"
        title="Programming and integrations"
        desc={[
          `Along with user-facing applications, our team built a database to store receipts, products,
          and customer activity information. The analysis of this data enables marketers to personalize special
          offers, among other things.`,

          `Integration with the client’s internally developed customer relationship management (CRM) and enterprise
          resource planning (ERP) systems was challenging, but we worked out an architecture that perfectly met
          their needs.`,

          `Our team also created separate endpoints for QA engineers to initiate tests of automatic
          production processes, such as sending push notifications.`,
        ]}
      />
    ),
  },
  {
    id: 4,
    content: (
      <SliderItem
        id="04"
        title="Initial app design adaptation"
        desc={[
          `The client provided the initial user experience (UX) design. However, our team had to make
          changes as they added functionalities.`,
          `Another contractor was responsible for the app’s initial visual design, but Onix’s designers
          created the receipts and receipt details screens and screens with flexible surveys.`,
          'They used Figma to create the graphic design and clickable prototypes.',
        ]}
      />
    ),
  },
  {
    id: 5,
    content: (
      <SliderItem
        id="05"
        title="Testing and release"
        desc={[
          `Thanks to clear product requirements and Agile project management, the team delivered the planned MVP
          features on time, with few change requests and bug fixes. The team also performed usability testing and
          the necessary metadata, data quality, reference data, procedure, regression, integration, and performance
          testing for the database.`,
          'Fayno Market’s mobile apps were published on Apple’s App Store and Google Play store in late 2021.',
          `Onix’s specialists continued maintaining the apps and fixing bugs. Eventually, they also integrated
          the Fayno Market app with the Creatio CRM and ITTel telephony.`,
        ]}
      />
    ),
  },
  {
    id: 6,
    content: (
      <SliderItem
        id="06"
        title="App redesign and new functionalities"
        desc={[
          `In 2023, the client ordered an app upgrade: they updated their brand identity and loyalty program and
          were developing new trademarks and brands. Onix received a new brand style guide for Fayno Market
          developed by another design studio.`,
          `Our designer completely reformatted the mobile app, updated the logic, and added screens for new features,
          such as incentivized surveys, spending analytics, and bonus management. He also overhauled the user profile
          and promotions and offers, creating user-friendlier cards.`,
          'Onix also reprogrammed the apps’ back-end in Hyperf, a trending PHP CLI framework.',
        ]}
      />
    ),
  },
  {
    id: 7,
    content: (
      <SliderItem
        id="07"
        title="Website upgrade"
        desc={[
          `In 2024, Onix took over the work on the Fayno Market website as well. Onix’s designer completely
          redesigned it following the new brand style guide.`,
        ]}
      />
    ),
  },
  {
    id: 8,
    content: (
      <SliderItem
        id="08"
        title="Auto-checkout UX design"
        desc={[
          `Also in 2024, Onix designed the screens for Fayno Market’s auto-checkouts to make the shopping process even
          more straightforward, convenient, personalized, and sustainable.`,
          'The user flow includes the use of loyalty cards in the mobile app, bonuses, and gift cards.',
        ]}
      />
    ),
  },
];

const DragBlockData = {
  title: 'The phases of the grocery app project',
  cards: dataSliderItems,
};

export default DragBlockData;
