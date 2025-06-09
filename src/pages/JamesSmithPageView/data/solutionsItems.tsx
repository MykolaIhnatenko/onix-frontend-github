import BlueSpan from '../components/BlueSpan';
import solution0 from '@/images/JamesSmith/solutionsSection/img_solution0.webp';
import solution1 from '@/images/JamesSmith/solutionsSection/img_solution1.webp';
import solution2 from '@/images/JamesSmith/solutionsSection/img_solution2.webp';

const solutionsItems = [
  {
    id: 0,
    picture: solution0,
    width: 442,
    height: 713,
    title: (
      <>
        Adding killer features
        <br />
        {' '}
        such as
        <BlueSpan> Momentum score.</BlueSpan>
      </>
    ),
    description: (
      <>
        It helps to synchronize the data of fitness devices with the app and show this data on the momentum score
        section to write it manually. We implemented the API through the web to connect the device to the application.
      </>
    ),
  },
  {
    id: 1,
    picture: solution1,
    width: 336,
    height: 714,
    title: (
      <>
        Developing a
        <BlueSpan> Meal Generator.</BlueSpan>
      </>
    ),
    description: (
      <>
        Users can generate a meal plan for themselves based on the user&apos;s goals and data. Users must specify
        their data and goals when onboarding to choose the proper nutrition.
        <br />
        <br />
        The user can go to the nutrition page and use the automatic meal plan generator based on the user&apos;s
        data, goals, and preferences. Our team created the API when it was necessary to collect users&apos;
        data and preferences and give them a list of suitable meal plans.
      </>
    ),
  },
  {
    id: 2,
    picture: solution2,
    width: 502,
    height: 756,
    title: (
      <>
        Updating
        <BlueSpan> personalized programs.</BlueSpan>
      </>
    ),
    description: (
      <>
        We have implemented a feature where the user can request
        a training program from a real trainer in the application.
        <br />
        <br />
        After the user has requested a training program from the coach, they must wait for a free coach to
        prepare this program based on the user&apos;s goals. During the program creation, the coach and the
        user can chat to clarify the details.
      </>
    ),
  },
];

export default solutionsItems;
