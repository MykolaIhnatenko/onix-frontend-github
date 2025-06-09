import ContentText from '../../../components/ContentText/ContentText';
import VRARContent from '../../../components/VRARContent/VRARContent';

const usabilityResultsBlockData = {
  title: 'The Onix team was responsible for:',
  content: (
    <>
      <VRARContent>
        <ContentText marginAbsent className="!mb-[30px] screen-md:!mb-[20px]" tag="p">
          Analyzing user behavior to understand how many users chose to create campaigns from scratch and
          how many users opted to use templates.
        </ContentText>
      </VRARContent>
      <VRARContent>
        <ContentText marginAbsent className="!mb-[30px] screen-md:!mb-[20px]" tag="p">
          Developing branding scanner technology that could recommend highly relevant templates for each user&apos;s
          website based on the&nbsp;collected data.
        </ContentText>
      </VRARContent>
      <VRARContent>
        <ContentText marginAbsent tag="p">
          Measuring the impact of our solution by tracking key metrics, particularly
          the&nbsp;increase in template usage.
        </ContentText>
      </VRARContent>
    </>
  ),
};

export default usabilityResultsBlockData;
