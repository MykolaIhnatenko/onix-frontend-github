import ContentText from '../../../components/ContentText/ContentText';
import VRARContent from '../../../components/VRARContent/VRARContent';

const resultsBlockData = {
  title: 'Results',
  content: (
    <>
      <VRARContent>
        <ContentText marginAbsent className="!mb-[30px] screen-md:!mb-[20px]" tag="p">
          The clinic staff really liked the intuitive tool for their administrative tasks
          and the straightforward and fast scheduling system.
        </ContentText>
      </VRARContent>
      <VRARContent>
        <ContentText marginAbsent tag="p">
          The doctors were happy with having the daily plans and routes always at their fingertips.
          They also appreciated the ability to see their workload for an entire month.
        </ContentText>
      </VRARContent>
    </>
  ),
};

export default resultsBlockData;
