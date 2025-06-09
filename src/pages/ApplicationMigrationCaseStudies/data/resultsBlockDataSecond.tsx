import ContentText from '../../../components/ContentText/ContentText';
import VRARContent from '../../../components/VRARContent/VRARContent';

const resultsBlockDataSecond = {
  title: 'Results',
  content: (
    <>
      <VRARContent>
        <ContentText marginAbsent className="!mb-[30px] screen-md:!mb-[20px]" tag="p">
          The Onix team helped our client to move their application from Heroku to AWS smoothly and successfully.
          This resulted in improved server performance and better management of the infrastructure in a short time.
        </ContentText>
      </VRARContent>

      <VRARContent>
        <ContentText marginAbsent tag="p">
          The robust and promising Docker technology was the key reason we switched from Heroku to AWS quickly and
          with minimal effort. In the new Docker and AWS-supported environment, we achieved greater flexibility and
          productivity compared to the environment that worked on Heroku. Servers no longer require manual scaling:
          they are automatically adjusted to the rise and fall of the loading of the memory or CPU. We also decreased
          hosting bills. The new level of management, such as SSH login is now easier to detect and resolve issues
          with the application.
        </ContentText>
      </VRARContent>
    </>
  ),
};

export default resultsBlockDataSecond;
