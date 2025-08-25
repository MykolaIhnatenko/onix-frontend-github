import { ITrustUsDataBlock } from '../interfaces/ITrustUsBlock';
import ContentText from '../../../components/ContentText/ContentText';
import { trustUsBlockSubtitle } from 'constants/tailwindStyle';

const machineLTrustUsBlockData: ITrustUsDataBlock = {
  title: 'Our Machine Learning expertise ',
  subtitle: (
    <ContentText tag="p" className={`${trustUsBlockSubtitle} !mt-0 !max-w-[none] min-lg:!max-w-[735px]`}>
      Onix is a machine learning development company committed to providing tailored solutions for your business.
      Our services help put your company in the driver&apos;s seat, allowing you to achieve maximum success.
    </ContentText>
  ),
  lastCardTitle: (
    <>
      Curious about how machine learning can transform your business? Book your
      {' '}
      <span className="font-bold">
        free
        <span className="inline-block">one-hour</span>
        {' '}
        consultation
      </span>
      {' '}
      or request an ML solution
      {' '}
      <span className="font-bold">demo!</span>
    </>
  ),
  btnTitle: 'Let’s talk',
  dropBlockTitleVariant: 'mashineLearning',
};

export default machineLTrustUsBlockData;
