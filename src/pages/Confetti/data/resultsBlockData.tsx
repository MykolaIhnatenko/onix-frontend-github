import ContentText from '../../../components/ContentText/ContentText';
import VRARContent from '../../../components/VRARContent/VRARContent';

const resultsBlockData = {
  name: '[ Results ]',
  title: 'As a result of our work together with the data providers, we managed to create'
       + ' a truly intuitive crypto trading platform.',
  content: (
    <>
      <VRARContent>
        <ContentText marginAbsent className="!mb-[30px] screen-md:!mb-[20px]" tag="p">
          Our top-notch UI and UX make it easy for users to navigate the platform and find what
          they are looking for. This makes the platform more user-friendly and can help reduce user frustration.
        </ContentText>
      </VRARContent>
      <VRARContent>
        <ContentText marginAbsent className="!mb-[30px] screen-md:!mb-[20px]" tag="p">
          An intuitive user experience now also helps users to complete tasks more quickly
          and efficiently. This is crucial for trading platforms where speed and accuracy are essential.
        </ContentText>
      </VRARContent>
      <VRARContent>
        <ContentText marginAbsent tag="p">
          A well-designed UI and UX can also reduce the likelihood of user errors. This is
          important for fintech trading platforms where even a small mistake can have
          significant financial consequences.
        </ContentText>
      </VRARContent>
    </>
  ),
};

export default resultsBlockData;
