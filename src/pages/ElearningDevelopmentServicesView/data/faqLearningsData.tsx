import Link from 'next/link';
import { useDispatch } from 'react-redux';

import ContentText from '../../../components/ContentText/ContentText';
import { setShowContactForm } from 'store/app/contactForm/slice';
import { textLink, textStyle } from 'components/FAQBlock/tailwindStyle/tailwindStyle';

function FaqLearningData() {
  const dispatch = useDispatch();
  return [
    {
      id: 1,
      title: 'How do I hire an eLearning software development company?',
      content: (
        <div>
          <ContentText tag="p" className={textStyle}>
            To make the right choice and hire an experienced eLearning software development company,
            it&apos;s better to pay attention to important factors such as portfolio, relevant expertise,
            experience, location, previous clients&apos; feedback, etc. Moreover, to choose the right company,
            you can talk openly with its specialists and ensure they understand your problem and know
            how to solve it with modern and reliable technologies.
          </ContentText>
        </div>
      ),
    },
    {
      id: 2,
      title: 'How much do eLearning software development services cost?',
      content: (
        <div>
          <ContentText tag="p" className={textStyle}>
            eLearning software development costs may vary on various factors.
            To accurately answer this question, we need to know your product idea,
            its complexity, the number of required features, developers’ expertise,
            and team size. Using our calculator, you can specify the number of
            experts and technologies you need and
            {' '}
            <Link href="https://onix-systems.com/dedicated-team-calculator">
              <span
                className={textLink}
              >
                get an approximate development cost for your project!
              </span>
            </Link>
          </ContentText>
        </div>
      ),
    },
    {
      id: 3,
      title: 'Is it worth it to outsource custom eLearning development?',
      content: (
        <div>
          <ContentText tag="p" className={textStyle}>
            The main benefit of outsourcing the development of custom eLearning software is
            the global talent pool, deep technical expertise, rational use of resources,
            team scalability depending on your needs, streamlined development process, and
            faster time-to-market. The outsourcing development team takes care of all the
            project management hassle and ensures an effective and transparent development
            process while you can focus on your business growth.
          </ContentText>
        </div>
      ),
    },
    {
      id: 4,
      title: 'Could your team develop a custom eLearning app and web app for my project?',
      content: (
        <div>
          <ContentText tag="p" className={textStyle}>
            Sure! We offer a wide range of eLearning software development services,
            including development from scratch, upgrading or renovating your eLearning
            website or mobile app with the required functionality. Feel free to
            {' '}
            <button
              className={textLink}
              type="button"
              onClick={() => dispatch(setShowContactForm({ showContactForm: true }))}
            >
              contact us
            </button>
            {' '}
            and share your project idea!
          </ContentText>
        </div>
      ),
    },
    {
      id: 5,
      title: 'What are the timeframes for e-learning software development services?',
      content: (
        <div>
          <ContentText tag="p" className={textStyle}>
            To accurately answer this question, we need to know your product idea,
            its complexity, the number of required features, developers’ expertise,
            and team size. For example, creating a minimum viable product (MVP)
            for digital learning will probably take up to 6-8 months. Using our calculator,
            you can specify the number of experts and technologies you need and
            {' '}
            <Link href="https://onix-systems.com/dedicated-team-calculator">
              <span
                className={textLink}
              >
                get an approximate development time for your project!
              </span>
            </Link>
          </ContentText>
        </div>
      ),
    },
  ];
}

export default FaqLearningData;
