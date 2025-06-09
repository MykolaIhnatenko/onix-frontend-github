import styles from '../sass/InnerVRWorksSection.module.scss';
import meditationsStyles from '../sass/InnerVRMeditationsItem.module.scss';

export const about = [
  {
    id: 1,
    title: 'VR/AR',
    text: 'Industry',
  },
  {
    id: 2,
    title: 'USA',
    text: 'Location',
  },
  {
    id: 3,
    title: '4 specialists',
    text: 'Team size',
  },
  {
    id: 4,
    title: '6 months',
    text: 'Project duration',
  },
];

export const problems = [
  (
    <p className={`${styles.item} text`}>
      offering new places for mindfulness sessions
    </p>
  ),
  (
    <p className={`${styles.item} text`}>
      focusing their attention on the present moment
    </p>
  ),
  (
    <p className={`${styles.item} text`}>
      allowing users to attend to visual and auditory anchors of their choice
    </p>
  ),
  (
    <p className={`${styles.item} text`}>
      reducing the scope of the content in their mind-wandering
    </p>
  ),
];

export const works = [
  (
    <p className={`${styles.item} text`}>
      Once in the virtual environment, they meet Mortimer – a cute alien who will be their guide to the InnerVR world.
    </p>
  ),
  (
    <p className={`${styles.item} text`}>
      Mortimer tells the user how they can travel to different worlds and complete various meditations, encourages
      to register,
      {' '}
      <br />
      and instructs to select a world to travel to.
    </p>
  ),
];

export const meditationsList = [
  {
    id: '01.',
    title: 'Interactive meditations',
    text: 'These experiences redefine the meaning of meditation. Players use their controller and feel '
        + 'haptics when they light lanterns in a peaceful lake village during the Loving Kindness meditation '
        + 'or create their own Sound Bath in a Japanese garden.',
  },
  {
    id: '02.',
    title: 'Audio & visual meditations',
    text: 'These meditations in immersive worlds include only audio and visuals without any interactions. '
        + 'For example, guided meditations and soothing music, and visuals of a cozy snow mountain village '
        + 'are designed to help users reflect within and get ready for sleep.',
  },
  {
    id: '03.',
    title: 'Move meditations',
    text: 'Players stretch and move their bodies to generate physical Mindful Energy on a peaceful tropical beach '
        + 'and other InnerVR worlds. Move meditations use the Stretch library created by Onix.',
  },
];

export const meditations = [
  {
    id: 1,
    text: (
      <p className={`${meditationsStyles.itemText} text`}>
        When the player starts the world they want to go to, Mortimer will run them through a daily
        feelings check-in, asking how they’re feeling and why.
        <br />
        <br />
        This information will be recorded and used for future logins for encouragement and support. For example,
        if the user felt sad yesterday, Mortimer will say: “Hope you’re feeling better today!&quot;.
      </p>
    ),
    imgMobile: '/static/images/Pages/InnerVR/meditationsSection/img_meditation1_mobile@2x.webp',
    imgTablet: '/static/images/Pages/InnerVR/meditationsSection/img_meditation1_tablet@2x.webp',
    img: '/static/images/Pages/InnerVR/meditationsSection/img_meditation1@2x.webp',
  },
  {
    id: 2,
    text: (
      <p className={`${meditationsStyles.itemText} text`}>
        As players unlock new worlds and activities through the generation of Mindful Energy,
        <br />
        <br />
        InnerVR’s immersive experiences cultivate a sense of tranquility, enhancing their mindfulness
        practice and fostering a lasting habit of meditation.
      </p>
    ),
    imgMobile: '/static/images/Pages/InnerVR/meditationsSection/img_meditation2_mobile@2x.webp',
    imgTablet: '/static/images/Pages/InnerVR/meditationsSection/img_meditation2_tablet@2x.webp',
    img: '/static/images/Pages/InnerVR/meditationsSection/img_meditation2@2x.webp',
  },
];

export const worldsContent = [
  {
    id: 1,
    title: 'Spaceship',
    text: (
      <p className="text">
        A spaceship world is the game’s starting location and Main Menu. For new users, Mortimer would
        introduce himself and walk them through the game’s flow and the types of meditations. Later, users can
        track their meditation progress here.
      </p>
    ),
    img: '/static/images/Pages/InnerVR/worldsSection/img_world1.webp',
  },
  {
    id: 2,
    title: 'Tropical Beach',
    text: (
      <p className="text">
        The tropical beach experience is perfect during the day. Tropical birds and butterflies and wave
        sounds create a calm but cheerful atmosphere. The beach also features a fishing area, a type of meditation
        where users are supposed to catch as little fish as possible regardless of time.
      </p>
    ),
    img: '/static/images/Pages/InnerVR/worldsSection/img_world2.webp',
  },
  {
    id: 3,
    title: 'Lake Village',
    text: (
      <p className="text">
        The user visits a quiet mountain lake village at night, with a fishing area and cicadas singing in
        the background.
      </p>
    ),
    img: '/static/images/Pages/InnerVR/worldsSection/img_world3.webp',
  },
  {
    id: 4,
    title: 'Snow Mountain Village',
    text: (
      <p className="text">
        The atmosphere of the village with Aurora Borealis FX, a small fire, and relaxing sounds calms you down
        and may help you fall asleep.
      </p>
    ),
    img: '/static/images/Pages/InnerVR/worldsSection/img_world4.webp',
  },
  {
    id: 5,
    title: 'Valley Village',
    text: (
      <p className="text">
        Initially created as the starting location before the game design evolved to include Mortimer and the
        spaceship, now it is a separate location for meditation.
      </p>
    ),
    img: '/static/images/Pages/InnerVR/worldsSection/img_world5.webp',
  },
  {
    id: 6,
    title: 'Japanese Locations',
    text: (
      <p className="text">
        Four locations, including a garden and a traditional house interior, are great for sitting down
        with a Sound Bath meditation.
      </p>
    ),
    img: '/static/images/Pages/InnerVR/worldsSection/img_world6.webp',
  },
];

export const stack = [
  {
    id: '01.',
    title: 'Amplify',
    text: 'Amplify, an asset for creating shaders in Unity. We used Amplify to create custom shaders, such as the '
        + 'wind moving the sea, sand, and palm trees. Most of the materials in the project were created using Amplify.',
  },
  {
    id: '02.',
    title: 'Bakery',
    text: 'Bakery, an asset for baking lightmaps in Unity. We utilized it to bake lighting throughout the project. And'
        + ' since Bakery offers greater control and quality of work, it helped us better optimize the project.',
  },
];

export const builtAccordionContent = [
  {
    id: 1,
    question: 'First steps',
    answer: 'The main location was divided into three: starting position in the field, then a lakeshore, '
        + 'and finally a snow-capped mountain. The client was more than satisfied with the new look and optimization.',
  },
  {
    id: 2,
    question: 'Virtual guide',
    answer: 'The character of Mortimer was introduced to facilitate user onboarding. The friendly alien also adds '
        + 'some cuteness so that users don’t feel like this is a super serious experience.',
  },
  {
    id: 3,
    question: 'Challenges',
    answer: 'Optimization was the primary challenge. The client wanted some scenes to comprise plenty of objects. '
        + 'However, since InnerVR is essentially a VR application based on mobile hardware, rendering large numbers '
        + 'of objects is problematic.',
  },
  {
    id: 4,
    question: 'Solutions',
    answer: 'We used a tool that our 3D TechArtist created in his spare time. It lets developers create sprites '
        + 'from models right in the Unity scene, with the scene’s lighting, making it hard to tell if there is '
        + 'an object in front of the viewer or just a sprite with that object’s image. Utilizing it to the fullest '
        + 'for InnerVR, the team was able to save a lot of time, improve the quality of sprites, and dramatically '
        + 'increase productivity with little effort.',
  },
  {
    id: 5,
    question: 'The wind effect',
    answer: 'One of the most interesting tasks during this Oculus meditation app development was the wind effect '
        + 'for the beach scene. The team created it using an Amplify-generated shader.',
  },
];

export const solutions = [
  {
    id: '01.',
    title: 'Collaboration continues',
    text: 'Onix\'s collaboration with InnerVR on the Oculus meditation app development continues to thrive as both '
        + 'teams work closely together to enhance the user experience, implement new features, and ensure a seamless '
        + 'and captivating journey of relaxation and mindfulness.',
  },
  {
    id: '02.',
    title: 'Focused on content',
    text: 'The dedicated team is now intensely focused on refining the return player experience and diligently '
        + 'adding more captivating content to elevate the app\'s engagement and delight users.',
  },
  {
    id: '03.',
    title: 'New interface',
    text: 'The client’s new Creative Director develops a new interface and Onix’s developers are working on new '
        + 'meditations and effects for the existing InnnerVR worlds.',
  },
];
