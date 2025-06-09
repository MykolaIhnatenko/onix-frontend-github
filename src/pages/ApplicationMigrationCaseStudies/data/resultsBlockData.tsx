import ContentText from '../../../components/ContentText/ContentText';
import VRARContent from '../../../components/VRARContent/VRARContent';

const resultsBlockData = {
  title: 'Business context',
  content: (
    <>
      <VRARContent>
        <ContentText marginAbsent className="!mb-[30px] screen-md:!mb-[20px]" tag="p">
          Heroku appeals to small startups whose primary goal is to launch and start working fast.
          However, as companies grow and their needs become more complex, migration from Heroku to
          AWS becomes increasingly relevant.
        </ContentText>
      </VRARContent>
      <VRARContent>
        <ContentText marginAbsent className="!mb-[30px] screen-md:!mb-[20px]" tag="p">
          Although Heroku is customer-centric, it has limited control over server configuration and
          can be more challenging to configure for complex applications. Programming Languages Heroku
          supports and environments are also limited. If it doesn&apos;t support the runtime management or
          different components deployment that the company wants to use, there&apos;s little choice but to
          migrate the application to AWS. AWS&apos;s flexible configuration and various services make migration
          more attractive for customers to create sophisticated, robust, and cost-effective infrastructure.
        </ContentText>
      </VRARContent>
      <VRARContent>
        <ContentText marginAbsent tag="p">
          Our client asked Onix to help with the migration of his Ruby on Rails (RoR) application from Heroku
          to Amazon Web Service (AWS). The Heroku to AWS migration was motivated by the developing app&apos;s
          requirements for increasing capacity and flexibility with a minimal cost. It was a production
          app without testing servers, so there was no room for mistakes.
        </ContentText>
      </VRARContent>
    </>
  ),
};

export default resultsBlockData;
