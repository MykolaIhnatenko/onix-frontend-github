import ContentText from '../../../components/ContentText/ContentText';
import VRARContent from '../../../components/VRARContent/VRARContent';

const resultsBlockData = {
  title: 'The Onix team was responsible for:',
  content: (
    <>
      <VRARContent>
        <ContentText marginAbsent className="!mb-[30px] screen-md:!mb-[20px]" tag="p">
          Gathering requirements to define objectives and project scope
        </ContentText>
      </VRARContent>
      <VRARContent>
        <ContentText marginAbsent className="!mb-[30px] screen-md:!mb-[20px]" tag="p">
          Ensuring an effective and transparent development process
        </ContentText>
      </VRARContent>
      <VRARContent>
        <ContentText marginAbsent className="!mb-[30px] screen-md:!mb-[20px]" tag="p">
          Deploying WordPress on Kubernetes using Gitlab to ensure our
          client&apos;s website is always available, scalable, and secure
        </ContentText>
      </VRARContent>
      <VRARContent>
        <ContentText marginAbsent tag="p">
          Implementing reliable advanced technologies to ensure the website’s high performance and proper functioning
        </ContentText>
      </VRARContent>
    </>
  ),
};

export default resultsBlockData;
