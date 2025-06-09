import ContentText from '../../../components/ContentText/ContentText';
import VRARContent from '../../../components/VRARContent/VRARContent';

const resultsBlockData = {
  name: '[ Results ]',
  title: (
    <>
      We delivered a well-built mobile demo app for day&#x2011;to&#x2011;day financial operations that offers
      significant time savings and cost efficiencies compared to the manual processing of financial transactions.
    </>
  ),
  content: (
    <>
      <VRARContent>
        <ContentText marginAbsent className="!mb-[30px] screen-md:!mb-[20px]" tag="p">
          Users can deposit money from their credit cards,
          exchange currencies within the app, and send money to other users.
        </ContentText>
      </VRARContent>

      <VRARContent>
        <ContentText marginAbsent tag="p">
          As a result of Onix’s collaboration, our client now has an MVP for
          demo purposes, so they can show it to their potential investors.
        </ContentText>
      </VRARContent>
    </>
  ),
};

export default resultsBlockData;
