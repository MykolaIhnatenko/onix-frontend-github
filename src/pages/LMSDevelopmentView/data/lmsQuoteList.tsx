import { IQuotesObjData } from '../../../components/ReviewBlock/interfaces/IReviewBlock';

const lmsQuoteList:IQuotesObjData[] = [
  {
    id: 1,
    text: '“The query builder work is going particularly well, and the images we have '
    + 'seen from the progress so far have got myself and others very excited to see this '
    + 'in production. The work he has been doing on this front-end React skills is clearly starting to pay off.”',
    author: (
      <>
        The Clubhouse Founder
        <br />
        Eric Roberts
      </>
    ),
  },
  {
    id: 2,
    text: `“After two months, the site is already up with 600 paying subscribers. The Onix team's
      workflow is great. Moreover, they put in extra effort just to resolve issues that arise.”`,
    author: (
      <>
        CEO, MiPaddle
        <br />
        Mark Innes
      </>
    ),
  },
  {
    id: 3,
    text: `“The Onix team has a very flexible workflow that ensured clear communication.
      They provide great value to the client's business as they continue to add more content
      and mini-games into the app.”`,
    author: (
      <>
        CEO, Shmonster
        <br />
        Michal Finegold
      </>
    ),
  },
];

export default lmsQuoteList;
