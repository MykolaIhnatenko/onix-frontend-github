import Realization1 from '@/images/StridistPage/img_realization1@2x.png';
import Realization2 from '@/images/StridistPage/img_realization2@2x.png';
import Realization3 from '@/images/StridistPage/img_realization3@2x.png';
import Realization4 from '@/images/StridistPage/img_realization4@2x.png';
import Realization5 from '@/images/StridistPage/img_realization5@2x.png';

const realizationContent = [
  {
    id: 1,
    imgSrc: Realization1,
    imgWidth: 690,
    imgHeight: 695,
    title: <h3 className="realizationTitle">Proper product operation and scalability</h3>,
    content: (
      <p className="realizationText">
        The old architecture could not cope with the increased number of features.
        <br />
        <br />
        We built a new architecture using Amazon ECS clusters that allows us to guarantee high-quality
        product operation, enhance its capacity, and significantly broaden functionality.
      </p>
    ),
  },
  {
    id: 2,
    imgSrc: Realization2,
    imgWidth: 690,
    imgHeight: 714,
    title: <h3 className="realizationTitle">Intuitive workout builder</h3>,
    content: (
      <p className="realizationText">
        Building workout programs is now easier than ever. We developed an easy-to-use workout builder
        that allows fitness coaches to build all kinds of workouts quickly: gym or home workouts, exercise
        demo videos, or full follow-along workout videos.
        <br />
        <br />
        This workout builder lets fitness professionals save programs as templates and automate the program
        creation process while making their life easier.
      </p>
    ),
  },
  {
    id: 3,
    imgSrc: Realization3,
    imgWidth: 690,
    imgHeight: 570,
    title: <h3 className="realizationTitle">Convenient client filtering</h3>,
    content: (
      <p className="realizationText">
        We added the ability to sort and filter clients by name, due date, and tag.
        <br />
        <br />
        This feature significantly simplifies navigation and enhances the coaches&apos; experience.
      </p>
    ),
  },
  {
    id: 4,
    imgSrc: Realization4,
    imgWidth: 690,
    imgHeight: 810,
    title: (
      <h3 className="realizationTitle">
        Effective&nbsp;
        <br />
        client progress tracking
      </h3>
    ),
    content: (
      <p className="realizationText">
        To make it easy for coaches to monitor their clients&apos; progress, we improved the client profile page by
        adding extra valuable features: a step counter, nutrition targets, goals,
        and progress photos.
        <br />
        <br />
        Now nutritionists and fitness coaches can track their clients&apos; results, assess their training
        performance, and help them to achieve desired goals.
      </p>
    ),
  },
  {
    id: 5,
    imgSrc: Realization5,
    imgWidth: 694,
    imgHeight: 735,
    title: <h3 className="realizationTitle">Secure payment method:</h3>,
    content: (
      <p className="realizationText">
        We integrated the Stripe system that allows users to securely accept payments and send payouts online.
        <br />
        <br />
        This feature provides an opportunity to automate the finance process and track payments within the platform.
      </p>
    ),
  },
];

export default realizationContent;
