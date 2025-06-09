import { IQuotesObjData } from '../../../components/ReviewBlock/interfaces/IReviewBlock';

const quotesList:IQuotesObjData[] = [
  {
    id: 1,
    text: '“Working with Onix has made it incredibly easy for us to develop the software products we envisioned '
        + 'since day 1. From the beginning, they mobilized a highly skilled team that handled and managed tasks with '
        + 'extreme proficiency and professionalism, despite the unsteady footing of startup development, Onix makde '
        + 'this such an enjoyable project to work close to.”',
    author: (
      <>
        Founder & CPO of Phlex
        <br />
        Ryan Rosenbaum
      </>
    ),
  },
  {
    id: 2,
    text: '“It is a pleasure working with Onix. We have been growing as a team, and everyone was committed to '
            + 'success right from the beginning. Onix went the extra mile to deliver in time, and their approach to '
            + 'building on a single codebase has proven to be excellent.”',
    author: (
      <>
        Product Owner 360° Shower
        <br />
        Barbara Dietz
      </>
    ),
  },
  {
    id: 3,
    text: '“They always went above and beyond and really viewed themselves as an extension of our company\'s team.”',
    author: (
      <>
        CEO, Bracketology
        <br />
        Jonah Fialkow
      </>
    ),
  },
  {
    id: 4,
    text: '“We are impressed with their professionalism and transparency in their work.”',
    author: (
      <>
        CEO, MiPaddle
        <br />
        Mark Innes
      </>
    ),
  },
];

export default quotesList;
