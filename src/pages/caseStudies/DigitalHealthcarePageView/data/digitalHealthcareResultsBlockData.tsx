import ContentText from '../../../../components/ContentText/ContentText';
import VRARContent from '../../../../components/VRARContent/VRARContent';

const digitalHealthcareResultsBlockData = {
  name: '[ Business context ]',
  title: 'Our client approached Onix with the idea of a white-label self-managed '
    + 'healthcare solution to create caring networks around anyone in need of help.',
  content: (
    <>
      <VRARContent>
        <ContentText marginAbsent className="!mb-[30px] screen-md:!mb-[20px]" tag="p">
          This software should help organizations to enhance home-based care, improve patient
          discharge planning, limit avoidable hospital admissions, and many more.
        </ContentText>
      </VRARContent>
      <VRARContent>
        <ContentText marginAbsent className="!mb-[30px] screen-md:!mb-[20px]" tag="p">
          Our client wanted to build a branded mobile application & admin panel that would allow
          healthcare organizations to make it easy for their customers to reach out for help and
          to provide the right help. Healthcare organizations could purchase the package of
          services without the need to take on the design and development, work with App Store
          & Google Play, support, and update an app.
        </ContentText>
      </VRARContent>
      <VRARContent>
        <ContentText marginAbsent tag="p">
          So, customers get advantages of the technology without any hassles. Targeted education,
          remote monitoring, behavioral science, and connection to clinical guidance — all in one app.
        </ContentText>
      </VRARContent>
    </>
  ),
};

export default digitalHealthcareResultsBlockData;
