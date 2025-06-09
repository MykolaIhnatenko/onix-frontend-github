import ContentText from '../../../components/ContentText/ContentText';
import VRARContent from '../../../components/VRARContent/VRARContent';

const resultsBlockSecondData = {
  name: '[ Results and prospects ]',
  title: 'Here are the key results we achieved while working on the project:',
  content: (
    <>
      <VRARContent>
        <ContentText marginAbsent className="!mb-[30px] screen-md:!mb-[20px]" tag="p">
          Onix’s web designers created a user-centric app experience
          {' '}
          <span className="inline_block">and interfaces</span>
          {' '}
          that balanced aesthetics and functionality
          {' '}
          <span className="inline_block">on desktop</span>
          {' '}
          and mobile screens alike
        </ContentText>
      </VRARContent>
      <VRARContent>
        <ContentText marginAbsent className="!mb-[30px] screen-md:!mb-[20px]" tag="p">
          Onix’s brand designer developed a brand style guide and unique logo for Kozystay
        </ContentText>
      </VRARContent>
      <VRARContent>
        <ContentText marginAbsent tag="p">
          Onix’s web developers built a scalable online booking platform that is easy to
          maintain and manage and integrated it
          with the client’s preferred channel manager software
        </ContentText>
      </VRARContent>
    </>
  ),
};

export default resultsBlockSecondData;
