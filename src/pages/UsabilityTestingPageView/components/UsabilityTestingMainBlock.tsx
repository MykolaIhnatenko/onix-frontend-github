import { useDispatch } from 'react-redux';

import VRARContent from 'components/VRARContent/VRARContent';
import ImageComponent from '../../../components/Image/Image';
import MainTitle from '../../../components/MainTitle/MainTitle';
import IUsabilityTestingMainBlock from '../interfaces/IUsabilityTestingMainBlock';
import { setShowContactForm } from 'store/app/contactForm/slice';
import { ButtonType } from 'constants/enums';
import ButtonLight from 'components/UI/ButtonLight/ButtonLight';

import styles from '../sass/usabilityTestingMainBlock.module.scss';

function UsabilityTestingMainBlock({
  title, text, icon, background, variant, image, btnText, saleUrl,
}: IUsabilityTestingMainBlock) {
  const dispatch = useDispatch();

  return (
    <div className={`${styles.container} ${variant ? styles[variant] : ''}`}>
      <div className={styles.background}>
        <ImageComponent
          src={background}
          alt="background"
          sizes="100vw"
          priority
        />
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.content}>
          <div className={styles.textContainer}>
            {icon && (
              <div className={styles.logo}>
                {icon}
              </div>
            )}
            <MainTitle tag="h1" className={styles.title}>
              {title}
            </MainTitle>
            {text && (
              <MainTitle tag="p" className={styles.text}>
                {text}
              </MainTitle>
            )}
            {btnText && !saleUrl && (
              <VRARContent>
                <ButtonLight
                  id={ButtonType.CASE}
                  styleContainer={styles.btn}
                  text={btnText}
                  onClick={() => dispatch(setShowContactForm({ showContactForm: true }))}
                />
              </VRARContent>
            )}
          </div>
          {image && (
            <div className={styles.image}>
              <ImageComponent
                src={image}
                alt="main Image"
                sizes="100vw"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default UsabilityTestingMainBlock;
