import { useDispatch } from 'react-redux';

import { setShowContactForm } from '../../../store/app/contactForm/slice';
import ContentText from '../../../components/ContentText/ContentText';
import { btnStyle, textStyle } from 'components/FAQBlock/tailwindStyle/tailwindStyle';

function AndroidAppFaqData() {
  const dispatch = useDispatch();
  const onKeyDown = (e: React.KeyboardEvent<HTMLSpanElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      dispatch(setShowContactForm({ showContactForm: true }));
    }
  };

  return (
    [
      {
        id: 10,
        title: 'What options do I have for hiring your offshore Android development team?',
        content: (
          <div>
            <ContentText tag="p" className={textStyle}>
              At Onix, we understand that our clients have a wide range of needs regarding Android
              development. That&apos;s why we offer various options for hiring our team of experienced
              developers. Whether you&apos;re looking for short-term assistance with a specific project
              or need ongoing support for your app, we&apos;re here to help. We also offer flexible pricing
              options to suit your budget. And because we have more than 22 years of experience in that
              field, you can be confident that you&apos;re getting high-quality work from a team that
              understands your market. So,
              {' '}
              <span
                role="button"
                tabIndex={0}
                className={btnStyle}
                onClick={() => dispatch(setShowContactForm({ showContactForm: true }))}
                onKeyDown={(e) => onKeyDown(e)}
              >
                contact Onix today
              </span>
              {' '}
              if you&apos;re looking for an offshore
              Android development team that can provide quality work at a competitive price.
              We&apos;ll be happy to discuss your specific needs and recommend the best option for your business.
            </ContentText>
          </div>
        ),
      },
      {
        id: 20,
        title: 'How much does it cost to build an Android app?',
        content: (
          <div>
            <ContentText tag="p" className={textStyle}>
              Android app development costs may vary on various factors. To accurately answer this
              question, we need to know your product idea, its complexity, the number of required
              features, the developers&apos; expertise, and team size. You can share your app idea with
              us, and our experts will
              {' '}
              <span
                role="button"
                tabIndex={0}
                className={btnStyle}
                onClick={() => dispatch(setShowContactForm({ showContactForm: true }))}
                onKeyDown={(e) => onKeyDown(e)}
              >
                calculate your development costs
              </span>
              .
            </ContentText>
          </div>
        ),
      },
      {
        id: 30,
        title: 'What happens after you finish my Android mobile app?',
        content: (
          <div>
            <ContentText tag="p" className={textStyle}>
              After you&apos;ve finished your Android mobile app development with Onix, it&apos;s time to move
              on to the testing phase, which is essential to ensure your app functions correctly.
              During testing, our team will put your app through a series of real-world scenarios
              to ensure it can handle anything users might throw at it. Once we see that your app
              is ready for launch, we will help you to submit it to Google Play Store. From there,
              it will be available for download by anyone with an Android device. Of course, this
              is just the beginning; even after your app is available for download, our team will
              still be here to help you with any questions or issues that may arise.
            </ContentText>
          </div>
        ),
      },
      {
        id: 40,
        title: 'Will we sign an NDA to keep my Android app idea confidential?',
        content: (
          <div>
            <ContentText tag="p" className={textStyle}>
              Sure. Before offshore android application developers start the development process,
              we always sign an NDA to guarantee the highest level of confidentiality. What is
              more, you own intellectual property we developed for you.
            </ContentText>
          </div>
        ),
      },
      {
        id: 50,
        title: 'How can I hire Android app developers from Onix?',
        content: (
          <div>
            <ContentText tag="p" className={textStyle}>
              To start working with us is pretty easy. All you need is to
              {' '}
              <span
                role="button"
                tabIndex={0}
                className={btnStyle}
                onClick={() => dispatch(setShowContactForm({ showContactForm: true }))}
                onKeyDown={(e) => onKeyDown(e)}
              >
                fill out our contact form
              </span>
              , tell us about your app idea (basic information), and we&apos;ll be in touch shortly to schedule a call.
            </ContentText>
          </div>
        ),
      },
      {
        id: 60,
        title: 'What should I keep in mind while looking for Android app developers?',
        content: (
          <div>
            <ContentText tag="p" className={textStyle}>
              To make the right choice and hire an experienced Android mobile application development
              company, it&apos;s better to pay attention to important factors such as portfolio, relevant
              expertise, experience, location, previous clients&apos; feedback, etc. Moreover, to choose
              the right company, you can talk openly with its specialists and ensure they understand
              your problem and know how to solve it with modern and reliable technologies.
            </ContentText>
          </div>
        ),
      },
    ]
  );
}

export default AndroidAppFaqData;
