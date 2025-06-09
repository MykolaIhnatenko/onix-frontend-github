import ContentText from '../../../components/ContentText/ContentText';
import developmentServicesContentData from './developmentServicesContentData';
import VRARContent from '../../../components/VRARContent/VRARContent';

import styles from '../sass/devServices.module.scss';

const developmentServicesData = {
  title: `After analyzing our client’s business and needs, Onix’s team decided
    to use Kubernetes to deploy his WordPress website.`,
  desc: (
    <VRARContent className={styles.pageText}>
      <ContentText className={styles.firstText} tag="p">
        Kubernetes helps address the challenges our client faced by providing tools
        for managing containerized applications across a distributed infrastructure.
        Kubernetes enabled us to scale applications and infrastructure automatically without
        incurring significant overhead or downtime.
      </ContentText>
      <ContentText className={styles.secondText} tag="p">
        Our specialists also automated deployment, management, and&nbsp;monitoring tasks,
        freeing up valuable resources for delivering content and engaging with readers.
      </ContentText>
    </VRARContent>
  ),
  data: developmentServicesContentData,
};

export default developmentServicesData;
