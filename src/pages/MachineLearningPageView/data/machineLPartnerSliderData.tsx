import { IPartnerSliderData } from '../../../components/PartnerSection/interfaces/IPartnerSection';
import Icons from '../../../assets/icon';
import TransparentCard from '../../../components/TransparentCard/TransparentCard';
import { TransparentCardVariant } from 'constants/enums';

import MachineSliderBgMobile1 from '@/images/machineLearning/partnerSlider/img_bg_slider_item_mobile1.webp';
import MachineSliderBgMobile2 from '@/images/machineLearning/partnerSlider/img_bg_slider_item_mobile2.webp';
import MachineSliderBgMobile3 from '@/images/machineLearning/partnerSlider/img_bg_slider_item_mobile3.webp';
import MachineSliderBgMobile4 from '@/images/machineLearning/partnerSlider/img_bg_slider_item_mobile4.webp';
import MachineSliderBgMobile5 from '@/images/machineLearning/partnerSlider/img_bg_slider_item_mobile5.webp';
import MachineSliderBgMobile6 from '@/images/machineLearning/partnerSlider/img_bg_slider_item_mobile6.webp';
import MachineSliderBg1 from '@/images/machineLearning/partnerSlider/img_bg_slider_item1.webp';
import MachineSliderBg2 from '@/images/machineLearning/partnerSlider/img_bg_slider_item2.webp';
import MachineSliderBg3 from '@/images/machineLearning/partnerSlider/img_bg_slider_item3.webp';
import MachineSliderBg4 from '@/images/machineLearning/partnerSlider/img_bg_slider_item4.webp';
import MachineSliderBg5 from '@/images/machineLearning/partnerSlider/img_bg_slider_item5.webp';
import MachineSliderBg6 from '@/images/machineLearning/partnerSlider/img_bg_slider_item6.webp';
import styles from '../../../components/TransparentCard/sass/transparentCard.module.scss';

const machineLPartnerSliderData: IPartnerSliderData[] = [
  {
    id: 1,
    content: (
      <TransparentCard
        bgMobile={MachineSliderBgMobile1}
        bg={MachineSliderBg1}
        text={(
          <>
            Our ML developers excel in neural networks
            {' '}
            <span className={styles.inlineBlock}>and machine</span>
            {' '}
            learning,
            building solutions that surpass client expectations. We analyze your
            business, strategize,
            {' '}
            <span className={styles.inlineBlock}>and deliver</span>
            {' '}
            a winning ML solution.
          </>
      )}
        icon={<Icons.IconPartnerSliderMachine1 className={styles.icon} />}
        title="Dedicated team of ML experts"
        variant={TransparentCardVariant.MACHINE}
      />
    ),
  },
  {
    id: 2,
    content: (
      <TransparentCard
        bgMobile={MachineSliderBgMobile2}
        bg={MachineSliderBg2}
        text="We are passionate about delivering dynamic ML solutions through our
         best structural standards that complement your company's needs, vision,
         and budget."
        icon={<Icons.IconPartnerSliderMachine2 className={styles.icon} />}
        title="Fast and cost-effective development"
        variant={TransparentCardVariant.MACHINE}
      />
    ),
  },
  {
    id: 3,
    content: (
      <TransparentCard
        bgMobile={MachineSliderBgMobile3}
        bg={MachineSliderBg3}
        text="We don't start development until our experts understand your needs and
         devise a plan to turn them into a viable product. Our analysis ensures
         an effective and cost-effective solution."
        icon={<Icons.IconPartnerSliderMachine3 className={styles.icon} />}
        title="Business-first approach"
        variant={TransparentCardVariant.MACHINE}
      />
    ),
  },
  {
    id: 4,
    content: (
      <TransparentCard
        bgMobile={MachineSliderBgMobile4}
        bg={MachineSliderBg4}
        text={(
          <>
            Our experts guide you through the development process. We establish clear
            communication channels for constant project updates, feedback,
            {' '}
            <span className={styles.inlineBlock}>and adjustments</span>
            {' '}
            as needed.
          </>
      )}
        icon={<Icons.IconPartnerSliderMachine4 className={styles.icon} />}
        title="Clear communication"
        variant={TransparentCardVariant.MACHINE}
      />
    ),
  },
  {
    id: 5,
    content: (
      <TransparentCard
        bgMobile={MachineSliderBgMobile5}
        bg={MachineSliderBg5}
        text="We provide a dedicated project manager to inform you of progress, deadlines,
         and team responsibilities for timely delivery and constant communication."
        icon={<Icons.IconPartnerSliderMachine5 className={styles.icon} />}
        title="Efficient project management"
        variant={TransparentCardVariant.MACHINE}
      />
    ),
  },
  {
    id: 6,
    content: (
      <TransparentCard
        bgMobile={MachineSliderBgMobile6}
        bg={MachineSliderBg6}
        text={(
          <>
            We use Agile methodology for flexible, speedy,
            {' '}
            <span className={styles.inlineBlock}>and transparent</span>
            {' '}
            development. This ensures
            {' '}
            <span className={styles.inlineBlock}>a structured,</span>
            {' '}
            iterative process that delivers quality products on time.
          </>
        )}
        icon={<Icons.IconPartnerSliderMachine6 className={styles.icon} />}
        title="Consistent delivery"
        variant={TransparentCardVariant.MACHINE}
      />
    ),
  },
];

export default machineLPartnerSliderData;
