import ContentText from '../../../components/ContentText/ContentText';
import ImageComponent from '../../../components/Image/Image';
import MainTitle from '../../../components/MainTitle/MainTitle';
import PageContainer from '../../../components/PageContainer/PageContainer';
import NationalHolidaysBg from '@/images/nationalHolidays/img_main_bg@2x.webp';
import NationalHolidaysImg from '@/images/nationalHolidays/img_nationalHolidays.webp';
import { INationalHolidaysMainBlock } from '../interfaces/INationalHolidaysMainBlockData';
import { INationalHolidays } from '../../../interfaces/INationalHolidays';
import { BACKEND_URL } from '../../../constants/constants';

import styles from '../sass/nationalHolidaysMainBlock.module.scss';

function NationalHolidaysMainBlock({
  onClick,
  selector,
  holidays,
}: INationalHolidaysMainBlock) {
  const currentYear = new Date().getFullYear();
  let holidaysCurrentYearData: INationalHolidays | undefined;
  let holidaysNextYearData: INationalHolidays | undefined;

  holidays.forEach((holiday) => {
    if (holiday?.attributes?.year === currentYear) {
      holidaysCurrentYearData = holiday;
    } else if (holiday?.attributes?.year === (currentYear + 1)) {
      holidaysNextYearData = holiday;
    }
  });

  const makeLastWordsUnbreakable = (text: string) => {
    if (!text) return '';

    const words = text.split(' ');

    if (words.length < 2) return text;

    const lastTwoWords = words.splice(-2).join('\u00A0');

    return [...words, lastTwoWords].join(' ');
  };

  const titleSection = selector
    ? holidaysCurrentYearData?.attributes?.title ?? ''
    : holidaysNextYearData?.attributes?.title ?? '';

  const description = selector
    ? holidaysCurrentYearData?.attributes?.description ?? ''
    : holidaysNextYearData?.attributes?.description ?? '';

  return (
    <PageContainer className={`${styles.blockContainer} ${!holidaysNextYearData ? styles.oneYear : ''} `}>
      <div className={styles.background}>
        <ImageComponent
          src={NationalHolidaysBg}
          priority
          alt="background"
        />
      </div>
      <div className={styles.wrapper}>
        <div className={styles.contentWrapper}>
          <div className={styles.textContainer}>
            <MainTitle className={styles.blockTitle} tag="h1">
              {makeLastWordsUnbreakable(titleSection)}
            </MainTitle>
            <ContentText tag="p" className={styles.blockText}>
              {description}
            </ContentText>
          </div>
          <div className={styles.contentContainer}>
            <div className={styles.sign}>
              {holidaysNextYearData?.attributes?.year && holidaysCurrentYearData?.attributes?.year && (
                <div className={styles.btnContainer}>
                  <button
                    className={`${styles.btn} ${styles.left} ${selector ? styles.active : ''}`}
                    type="button"
                    onClick={() => onClick(true)}
                  >
                    Holidays
                    {' '}
                    {holidaysCurrentYearData?.attributes?.year}
                  </button>
                  <button
                    className={`${styles.btn} ${styles.right} ${!selector ? styles.active : ''}`}
                    type="button"
                    onClick={() => onClick(false)}
                  >
                    Holidays
                    {' '}
                    {holidaysNextYearData?.attributes?.year}
                  </button>
                </div>
              )}
              <div
                className={styles.content}
                style={selector ? { display: 'block' } : { display: 'none' }}
              >
                {holidaysCurrentYearData?.attributes?.holidays?.map(({
                  icon,
                  date,
                  nameHoliday,
                }, index) => (
                  <div key={['icon_', index].join()} className={styles.contentItem}>
                    <div className={styles.iconDate}>
                      <ImageComponent
                        src={`${BACKEND_URL}${icon?.data?.attributes?.url}`}
                        width={40}
                        height={40}
                        alt="icon"
                      />
                      <MainTitle tag="p" className={styles.date}>{date}</MainTitle>
                    </div>
                    <div className={styles.dateContainer}>
                      <ContentText tag="p" className={styles.title}>{nameHoliday}</ContentText>
                    </div>
                  </div>
                ))}
              </div>
              <div
                className={styles.content}
                style={!selector ? { display: 'block' } : { display: 'none' }}
              >
                {holidaysNextYearData?.attributes?.holidays?.map(({
                  icon,
                  date,
                  nameHoliday,
                }, index) => (
                  <div key={['icon_', index].join()} className={styles.contentItem}>
                    <div className={styles.iconDate}>
                      <ImageComponent
                        src={`${BACKEND_URL}${icon?.data?.attributes?.url}`}
                        width={40}
                        height={40}
                        alt="icon"
                      />
                      <MainTitle tag="p" className={styles.date}>{date}</MainTitle>
                    </div>
                    <div className={styles.dateContainer}>
                      <ContentText tag="p" className={styles.title}>{nameHoliday}</ContentText>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <MainTitle tag="p" className={styles.contentUnderText}>
          We hope this calendar will help you plan the development work with our team more effectively.
        </MainTitle>
        <div className={styles.imageBlock}>
          <ImageComponent
            src={NationalHolidaysImg}
            priority
            fill
            alt="Image"
            sizes="100vw"
          />
        </div>
      </div>
      <MainTitle tag="p" className={styles.underText}>
        We hope this calendar will help you plan the development work with our team more effectively.
      </MainTitle>
    </PageContainer>
  );
}

export default NationalHolidaysMainBlock;
