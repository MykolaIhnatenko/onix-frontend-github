import ContentText from '../../../components/ContentText/ContentText';
import VRARContent from '../../../components/VRARContent/VRARContent';

const resultsBlockData = {
  title: 'The Onix team was tasked with:',
  content: (
    <>
      <VRARContent>
        <ContentText marginAbsent className="!mb-[30px] screen-md:!mb-[20px]" tag="p">
          Developing a user-friendly web-based portal that would enable healthcare providers to
          self-serve operational needs, such as referring cases, checking claim statuses,
          and viewing payment information
        </ContentText>
      </VRARContent>
      <VRARContent>
        <ContentText marginAbsent className="!mb-[30px] screen-md:!mb-[20px]" tag="p">
          Integrating features for the company’s customer support team, such as notifications,
          automated verification and registration of claims and referrals, admin dashboard, etc.
        </ContentText>
      </VRARContent>
      <VRARContent>
        <ContentText marginAbsent tag="p">
          Rolling out a minimum viable system within 10 weeks
        </ContentText>
      </VRARContent>
    </>
  ),
};

export default resultsBlockData;
