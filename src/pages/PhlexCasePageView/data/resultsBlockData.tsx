import ContentText from '../../../components/ContentText/ContentText';
import VRARContent from '../../../components/VRARContent/VRARContent';

const resultsBlockData = {
  name: '[ Results ]',
  title: 'As a result of Onix’s collaboration, our client now operates a reliable, well-performing mobile'
    + ' application that brings efficiency and fun to swimming workouts.',
  content: (
    <>
      <VRARContent>
        <ContentText tag="p" marginAbsent className="!mb-[30px] screen-md:!mb-[20px]">
          Phlex is a simple tool that enables swimmers to connect their wearable devices with a
          mobile app and collect motion data for accurately tracking their swimming. Using unique devices
          with motion data analysis, Phlex analyzes the user’s motions during training and, based
          on that, provides precise data about users&apos; swimming technique and performance.
        </ContentText>
      </VRARContent>
      <VRARContent>
        <ContentText tag="p" marginAbsent>
          From now on, our client will change the sport of swimming by delivering an incredible training
          experience with real-time tracking and post-workout analytics and allowing users to enjoy
          every moment of their training.
        </ContentText>
      </VRARContent>
    </>
  ),
};

export default resultsBlockData;
