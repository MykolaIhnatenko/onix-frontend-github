import SliderCardItem from 'components/SliderCardItem/SliderCardItem';
import ItemList from 'components/ItemList/ItemList';
import { IAccordionData } from 'components/AccordionTemplate/interfaces/IAccordion';
import ItemText from 'components/ItemText/ItemText';

const sliderData = [
  {
    id: 1,
    content: (
      <SliderCardItem
        id="01"
        title="Market research and analysis"
        desc={[
          `The team conducted in-depth market research to understand the demand for language-learning
          apps targeting children. For this purpose, they`,
          (
            <ItemList
              list={[
                `Analyzed competitor apps to identify their strengths, weaknesses, unique features,
                and opportunities for differentiation in the market`,
                'Analyzed the competitors’ audiences',
                'Explored current trends in gamified education and language learning',
                'Conducted research for visual direction selection',
              ]}
              marginBottomAbsent
            />
          ),
        ]}
      />
    ),
  },
  {
    id: 2,
    content: (
      <SliderCardItem
        id="02"
        title="User persona development"
        desc={[
          `Firstly, the team obtained insights into the target audience's needs, preferences,
          pain points, and motivations.`,
          `This information helped them to create detailed user personas representing young
          Chinese language learners and their parents.`,
        ]}
      />
    ),
  },
  {
    id: 3,
    content: (
      <SliderCardItem
        id="03"
        title="Product concept development for the learning app"
        desc={[
          `A cross-functional team held brainstorming sessions to generate innovative ideas for the app's
          features and design and prioritize concepts based on feasibility, uniqueness, and potential
          impact on the users, learning outcomes, and the business.`,
          `Then, the designers created a mood board, wireframes, and sketches visualizing the app’s layout,
          user flow, and key interactions. This step helped map out the app's structure and user journey.`,
        ]}
      />
    ),
  },
  {
    id: 4,
    content: (
      <SliderCardItem
        id="04"
        title="Mobile app UX/UI and digital character design"
        desc={[
          `The designers employed an iterative approach to create the layouts, transitions, and visual
          elements of the mobile and web versions of ChinEasy. The results of the earlier research helped
          ensure that the design would be modern, appealing, and aligned with user expectations and needs.`,
          `The team worked closely with educators, language experts, content creators, and software
          developers to ensure a holistic and cohesive approach to design. Regular feedback allowed
          for quick adjustments.`,
        ]}
      />
    ),
  },
  {
    id: 5,
    content: (
      <SliderCardItem
        id="05"
        title="Language-learning service branding development"
        desc={[
          `Simultaneously with the learning mobile app UX/UI design, the team created the logo and brand identity.
          They built ChinEasy’s brand identity around the “Fantastic Four” – funny but functional companion
          characters. Vibrant app colors were selected, and icons were created according to the brand style
          guide compiled by Onix.`,
          `ChinEasy logo development went through three stages: concept mood board, logo and symbol creation,
          and visualization.`,
        ]}
      />
    ),
  },
  {
    id: 6,
    content: (
      <SliderCardItem
        id="06"
        title="Prototyping and user testing"
        desc={[
          `The designers developed interactive prototypes incorporating the app's key features and user
          interactions. These prototypes were used for user testing to gather feedback on usability,
          intuitiveness, and overall user experience quality. Onix’s experts ensured that the design
          adhered to the best usability and accessibility practices to make the mobile and web apps
          inclusive and easy to navigate for all users.`,
          `User feedback was used throughout several design iterations to make adjustments that enhance user
          engagement, clarity, and ease of use.`,
        ]}
      />
    ),
  },
  {
    id: 7,
    content: (
      <SliderCardItem
        id="07"
        title="UI design refinement in cooperation with programmers"
        desc={[
          `Throughout the proper app development phase, the design team kept in touch with the programmers
          and the product owner, incorporating their expertise to ensure the feasibility of design solutions.`,
          `They continuously refined the design based on their feedback, user testing, team discussions,
          and evolving project goals.`,
          `This included creating layouts that accommodated different screen sizes and devices while
          maintaining consistency.`,
        ]}
      />
    ),
  },
];

const accordionData: IAccordionData[] = [
  {
    id: 1,
    number: '01',
    title: 'Market research and analysis',
    content: (
      <ItemList
        listTitle={`The team conducted in-depth market research to understand the demand for language-learning
          apps targeting children. For this purpose, they`}
        list={[
          `Analyzed competitor apps to identify their strengths, weaknesses, unique features,
          and opportunities for differentiation in the market`,
          'Analyzed the competitors’ audiences',
          'Explored current trends in gamified education and language learning',
          'Conducted research for visual direction selection',
        ]}
      />
    ),
  },
  {
    id: 2,
    number: '02',
    title: 'User persona development',
    content: (
      <ItemText
        content={[
          `Firstly, the team obtained insights into the target audience's needs, preferences, pain points,
          and motivations.`,
          `This information helped them to create detailed user personas representing young
          Chinese language learners and their parents.`,
        ]}
      />
    ),
  },
  {
    id: 3,
    number: '03',
    title: 'Product concept development for the learning app',
    content: (
      <ItemText
        content={[
          `A cross-functional team held brainstorming sessions to generate innovative ideas for the app's
          features and design and prioritize concepts based on feasibility, uniqueness, and potential
          impact on the users, learning outcomes, and the business.`,
          `Then, the designers created a mood board, wireframes, and sketches visualizing the app’s layout,
          user flow, and key interactions. This step helped map out the app's structure and user journey.`,
        ]}
      />
    ),
  },
  {
    id: 4,
    number: '04',
    title: 'Mobile app UX/UI and digital character design',
    content: (
      <ItemText
        content={[
          `The designers employed an iterative approach to create the layouts, transitions, and visual
          elements of the mobile and web versions of ChinEasy. The results of the earlier research helped
          ensure that the design would be modern, appealing, and aligned with user expectations and needs.`,
          `The team worked closely with educators, language experts, content creators, and software
          developers to ensure a holistic and cohesive approach to design. Regular feedback allowed
          for quick adjustments.`,
        ]}
      />
    ),
  },
  {
    id: 5,
    number: '05',
    title: 'Language-learning service branding development',
    content: (
      <ItemText
        content={[
          `Simultaneously with the learning mobile app UX/UI design, the team created the logo and brand identity.
          They built ChinEasy’s brand identity around the “Fantastic Four” – funny but functional companion
          characters. Vibrant app colors were selected, and icons were created according to the brand style
          guide compiled by Onix.`,
          `ChinEasy logo development went through three stages: concept mood board, logo and symbol creation,
          and visualization.`,
        ]}
      />
    ),
  },
  {
    id: 6,
    number: '06',
    title: 'Prototyping and user testing',
    content: (
      <ItemText
        content={[
          `The designers developed interactive prototypes incorporating the app's key features and user
          interactions. These prototypes were used for user testing to gather feedback on usability,
          intuitiveness, and overall user experience quality. Onix’s experts ensured that the design
          adhered to the best usability and accessibility practices to make the mobile and web apps
          inclusive and easy to navigate for all users.`,
          `User feedback was used throughout several design iterations to make adjustments that enhance user
          engagement, clarity, and ease of use.`,
        ]}
      />
    ),
  },
  {
    id: 7,
    number: '07',
    title: 'UI design refinement in cooperation with\u00A0programmers',
    content: (
      <ItemText
        content={[
          `Throughout the proper app development phase, the design team kept in touch with the programmers
          and the product owner, incorporating their expertise to ensure the feasibility of design solutions.`,
          `They continuously refined the design based on their feedback, user testing, team discussions,
          and evolving project goals.`,
          `This included creating layouts that accommodated different screen sizes and devices while
          maintaining consistency.`,
        ]}
      />
    ),
  },
];

const projectPhasesData = {
  title: 'Project phases',
  sliderData,
  accordionData,
};

export default projectPhasesData;
