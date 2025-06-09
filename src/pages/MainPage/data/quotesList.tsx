import { IQuotesObjData } from '../../../components/ReviewBlock/interfaces/IReviewBlock';

const quotesList:IQuotesObjData[] = [
  {
    id: 1,
    text: `“The outcome of the project exceeded our expectations.
      Their attention to detail, deep understanding of our objectives,
      and innovative approach resulted in a top-notch learning management
      system that will serve our needs and those of our HCP learners exceptionally well.”`,
    author: (
      <>
        Owner and Investor, NexusMedX
        <br />
        Sandy Breslow
      </>
    ),
  },
  {
    id: 2,
    text: '“We\'ve had a fantastic experience working with the team at Onix. '
            + 'They\'ve delivered the vision we had for our platform. '
            + 'Communication has been great, they go the extra mile to make sure work '
            + 'is done to a high standard and delivered on time. It\'s been a pleasure '
            + 'to have them on board highly recommend them.”',
    author: (
      <>
        CEO, Stridist
        <br />
        Sukh Sidhu
      </>
    ),
  },
  {
    id: 3,
    text: '“They provided us with amazing UI/UX design — it was exactly what we had envisioned.”',
    author: (
      <>
        Business Analyst, QoreNext
        <br />
        Gary Kwan
      </>
    ),
  },
  {
    id: 4,
    text: '“They always went above and beyond and really viewed themselves as an extension of our company\'s team.”',
    author: (
      <>
        CEO, Bracketology, LLC
        <br />
        Jonah Fialkow
      </>
    ),
  },
  {
    id: 5,
    text: '“We are impressed with their professionalism and transparency in their work.”',
    author: (
      <>
        CEO, MiPaddle
        <br />
        Mark Innes
      </>
    ),
  },
  {
    id: 6,
    text: '“Their outstanding ability to solve extreme technical challenges '
            + 'distinguishes them from their competitors.”',
    author: (
      <>
        CEO, messageLOUD
        <br />
        Garin Toren
      </>
    ),
  },
  {
    id: 7,
    text: '“The Onix team is extremely reliable, hard-working, and intelligent.”',
    author: (
      <>
        CEO, ROI Genius
        <br />
        Andrew Cramer
      </>
    ),
  },
];

export default quotesList;
