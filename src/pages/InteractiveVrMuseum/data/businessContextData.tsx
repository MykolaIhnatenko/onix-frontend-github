import ContentText from '../../../components/ContentText/ContentText';

const businessContextData = {
  name: '[ Business context ]',
  title: `Anija Manor is an important historical site and one of the most
    beautiful country houses in Estonia.`,
  firstText: [
    `Along with exquisite parks, venues for events like weddings and concerts, and other
    attractions, it features a permanent exhibition dedicated to the golden age of manors.`,
    `The management has been investing in technology to make the exhibition more exciting,
    especially for children. VR glasses already enable visitors to dive into the lost era,
    for example, following a historical figure on a virtual tour or attending a Baroque ball
    recreated through realistic 3D simulations.`,
  ],
  secondText: (
    <ContentText marginAbsent tag="p">
      In 2023, the management decided to enhance their virtual museum development with gamification.
      Their considerations were as follows:
      <span className="flex my-[30px] screen-lg:block screen-md:my-[20px] ">
        <span className="mr-1 screen-lg:mr-0">1.</span>
        An on-premises VR game would appeal to younger visitors who may be uninterested otherwise.
        A virtual quest combining education about the area’s history with fun and discovery will
        make their museum experience more exciting and memorable. Happy customers write good
        reviews and spread the word.
      </span>
      <span className="flex screen-lg:block">
        <span className="mr-1 screen-lg:mr-0">2.</span>
        People who access the VR game online may become curious about Anija Manor’s rich history and decide
        to visit the estate to experience more first-hand.
      </span>
    </ContentText>
  ),
  bottomText: `Thus, Onix's VR experts were tasked with implementing
    gamification for increasing museum engagement.`,
};

export const businessContextDataSecond = {
  name: '[ Our solutions ]',
  title: 'The museum VR game’s structure & features',
  subtitle: `The game’s several levels are designed to provide a virtual tour of
    Anija Manor while educating the player through interactive experiences.`,
  firstText: (
    <ContentText className="min-lg:max-w-[630px] min-xxxl:max-w-[710px]" marginAbsent tag="p">
      The app’s user flow reflects the virtual quest’s linear
      logic and the order of the museum’s featured rooms:
      <span className="block">
        1.Intro
      </span>
      <span className="block">
        2.Rounds 1-5 set in five different rooms
      </span>
      <span className="block">
        3.Epilogue
      </span>
    </ContentText>
  ),
  secondText: `During each round, the player is positioned in a new area inside the museum where
    they answer questions or complete tasks related to the estate’s history. After
    each round, they are awarded scores and, in the end, rewarded with solving the
    titillating secret of the lady of the manor.`,
};

export default businessContextData;
