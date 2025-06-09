import ContentText from '../../../components/ContentText/ContentText';
import VRARContent from '../../../components/VRARContent/VRARContent';

const resultsBlockData = {
  title: 'Onix’s team had to develop:',
  content: (
    <>
      <VRARContent>
        <ContentText tag="p" marginAbsent className="!mb-[30px] screen-md:!mb-[20px]">
          An intuitive user interface enabling medical students and interns to navigate the app and perform in-app tasks
        </ContentText>
      </VRARContent>

      <VRARContent>
        <ContentText tag="p" marginAbsent className="!mb-[30px] screen-md:!mb-[20px]">
          Virtual environments, implemented through 360° videos with minimal interactivity,
          where users participate in various realistic scenarios and where their choices
          will determine further scenarios and allow the system to evaluate their knowledge and skills
        </ContentText>
      </VRARContent>

      <VRARContent>
        <ContentText tag="p" marginAbsent>
          Evaluation system enabling the app owner to assess the users’
          knowledge and skills demonstrated through interaction with the app.
        </ContentText>
      </VRARContent>
    </>
  ),
};

export const resultsBlockDataSecond = {
  name: '[ Results ]',
  title: 'The MVP was delivered in the shortest possible time – two weeks – and worked stably on the '
    + 'intended device. This custom EdTech solution solves the following problems:',
  content: (
    <>
      <VRARContent>
        <ContentText tag="p" marginAbsent className="!mb-[30px] screen-md:!mb-[20px]">
          Enhances the education of medical students by simulating presence in a hospital,
          communication with colleagues, and consequences of their decisions.
        </ContentText>
      </VRARContent>

      <VRARContent>
        <ContentText tag="p" marginAbsent className="!mb-[30px] screen-md:!mb-[20px]">
          Eliminates the need for physical premises with space, equipment, and people.
        </ContentText>
      </VRARContent>

      <VRARContent>
        <ContentText tag="p" marginAbsent>
          Uses the latest technologies in virtual reality app development.
        </ContentText>
      </VRARContent>
    </>
  ),
};

export default resultsBlockData;
