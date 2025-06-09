import ContentText from '../../../components/ContentText/ContentText';
import VRARContent from '../../../components/VRARContent/VRARContent';
import MainTitle from 'components/MainTitle/MainTitle';

const resultsBlockSecondData = {
  name: '[ Project results ]',
  title: 'The client initiated the project aiming to streamline operations and reduce the '
  + 'administrative burden on the company’s staff; they have reached both goals.',
  text: (
    <VRARContent>
      <MainTitle
        className="
          !text-[24px] !leading-[34px] pb-[80px] screen-md:pb-[60px]
          screen-md:!text-[20px] screen-md:!leading-[28px]
        "
        tag="p"
      >
        The HCP portal development solution has brought the following results:
      </MainTitle>
    </VRARContent>
  ),
  content: (
    <>
      <VRARContent>
        <ContentText marginAbsent className="!mb-[30px] screen-md:!mb-[20px]" tag="p">
          Claims and referrals are now processed three times faster.
        </ContentText>
      </VRARContent>
      <VRARContent>
        <ContentText marginAbsent className="!mb-[30px] screen-md:!mb-[20px]" tag="p">
          The portal’s seamless integration with Salesforce CRM significantly reduced routine administrative tasks.
        </ContentText>
      </VRARContent>
      <VRARContent>
        <ContentText marginAbsent className="!mb-[30px] screen-md:!mb-[20px]" tag="p">
          The physician look-up module streamlined the referral process and enhanced patient satisfaction by
          expediting approvals.
        </ContentText>
      </VRARContent>
      <VRARContent>
        <ContentText marginAbsent className="!mb-[30px] screen-md:!mb-[20px]" tag="p">
          A 95% reduction in inbound phone calls and emails has freed up resources for the provider support team.
        </ContentText>
      </VRARContent>
      <VRARContent>
        <ContentText marginAbsent tag="p">
          Communication via live chat improved responsiveness and provider satisfaction.
        </ContentText>
      </VRARContent>
    </>
  ),
  subText: 'These operational efficiency and customer satisfaction gains lead to improved'
  + ' partnerships and increased business.',
};

export default resultsBlockSecondData;
