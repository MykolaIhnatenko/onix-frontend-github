import { useRouter } from 'next/router';

import {
  HR_EMAIL, SALES_EMAIL, SUBJECT_STRING, BODY_STRING,
} from '../../../../constants/constants';
import SocialNetworkLink from '../common/SocialNetworkLink';
import { getSocialLinks } from '../../data/getFooterData';
import SubHeader from '../common/SubHeader';
import { IContactUsBlock } from '../../interfaces/IContactUsBlock';

import styles from '../../sass/contuctUsBlock.module.scss';

function ContactUsBlock({ salesChannel }: IContactUsBlock) {
  const { asPath } = useRouter();
  const basePath = process.env.NEXT_PUBLIC_BASE_URL as string;
  const SALES_CHANNEL_WITHOUT_SPACE = salesChannel ? salesChannel.replace(/\s/g, '%20') : '';
  const link = 'mailto:'
      + `${SALES_EMAIL}${SUBJECT_STRING}${SALES_CHANNEL_WITHOUT_SPACE}${BODY_STRING}${basePath}${asPath}`;

  return (
    <div className={styles.contactUs}>
      <div className={styles.contacts}>
        <div className={styles.contact}>
          <SubHeader title="Contact us" variant="mb-15" />
          <a
            href={link}
            className={styles.emailLink}
            rel="noreferrer nofollow"
          >
            {SALES_EMAIL}
          </a>
        </div>
        <div className={styles.contact}>
          <SubHeader title="We are hiring" variant="mb-15" />
          <a href={`mailto:${HR_EMAIL}`} className={styles.emailLink} rel="noreferrer nofollow">
            {HR_EMAIL}
          </a>
        </div>
      </div>
      <div className={styles.social}>
        {getSocialLinks().map(({
          href, component, id, label,
        }) => (
          <SocialNetworkLink
            key={id}
            href={href}
            component={component}
            label={label}
          />
        ))}
      </div>
    </div>
  );
}

export default ContactUsBlock;
