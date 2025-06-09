import Image from '../../../../components/Image/Image';
import ImagePostgreSQL from '../../../../assets/images/BstevrCaseSudy/img_PostgreSQL@2.webp';
import ImagePython from '../../../../assets/images/BstevrCaseSudy/img_Python@2.webp';
import { IAccordionData } from 'components/AccordionTemplate/interfaces/IAccordion';
import ItemText from 'components/ItemText/ItemText';

import styles from '../sass/bstevrData.module.scss';

const textClasses = `
  !font-main !text-[20px]/[28px] screen-md:!text-[16px]/[22px]
`;

const bstevrAccordionData : IAccordionData[] = [
  {
    id: 1,
    title: 'API Development',
    content: (
      <ItemText
        content={[
          `The team created an API allowing simulations of games between any teams and players on the database
          To predict a games' outcome, the system takes into account dozens of different factors and calculates
          game ratings based on the amassed historical data on all NFL teams and players.`,
        ]}
        classes={{ itemText: textClasses }}
      />
    ),
  },
  {
    id: 2,
    title: 'Innovative Algorithm',
    content: (
      <ItemText
        content={[
          `To this end, the team developed a unique algorithm that converts player statistics and
          their physical data into over 20 different ratings the simulator needs for work.
          Oleksii Zabara was primarily responsible for the algorithm and the calculation of players' ratings
          based on their statistics and activities throughout a season. These ratings are used to determine
          the NFL online game simulator results.`,
        ]}
        classes={{ itemText: textClasses }}
      />
    ),
  },
  {
    id: 3,
    title: 'Rigorous Verification Process',
    content: (
      <ItemText
        content={[
          `The team verified the ratings by running the simulation of a game in a certain
          season and comparing its result with the actual game's outcome. If the winner was
          the same in the simulation and the real match, they concluded that everything was correct.`,
        ]}
        classes={{ itemText: textClasses }}
      />
    ),
  },
  {
    id: 4,
    title: 'Turbocharging Simulator Speed',
    content: (
      <ItemText
        content={[
          `Another testing method was to compare the best players according to our calculated ratings
          with the actual list of best players for a particular year. Analytics show that
          the accuracy of the predicted game outcomes is extremely high.`,
        ]}
        classes={{ itemText: textClasses }}
      />
    ),
  },
  {
    id: 5,
    title: 'Precision in Outcome Predictions',
    content: (
      <>
        <ItemText
          content={[
            `In-depth analysis and refactoring of the simulator algorithms helped increase the speed
            of the simulator by more than 100 times.`,
            `The recapper algorithm created by BSTEVR and the Onix team can generate non-repeating
            articles that read as though they were written by a human. Each article both provides
            detailed information about the key moments of the match and conveys a corresponding
            emotional experience.`,
          ]}
          classes={{ itemText: textClasses }}
          marginBottomAbsent
        />
        <div className={styles.imageWrapper}>
          <div className={styles.imgBlock}>
            <Image
              src={ImagePython}
              alt="ImagePython"
              sizes="100vw"
              quality={100}
            />
          </div>
          <div className={styles.imgBlock}>
            <Image
              src={ImagePostgreSQL}
              alt="ImagePostgreSQL"
              sizes="100vw"
              quality={100}
            />
          </div>
        </div>
        <ItemText
          content={[
            `Thanks to the algorithm, the words selected by the system don't sound like a
            pre-arranged template, and all articles are unique.`,
          ]}
          classes={{ itemText: textClasses }}
        />
      </>
    ),
  },
];

export default bstevrAccordionData;
