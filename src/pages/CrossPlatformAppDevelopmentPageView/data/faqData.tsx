import { useDispatch } from 'react-redux';

import ContentText from '../../../components/ContentText/ContentText';
import { setShowContactForm } from '../../../store/app/contactForm/slice';
import { textLink, textStyle } from 'components/FAQBlock/tailwindStyle/tailwindStyle';

const FaqData = () => {
  const dispatch = useDispatch();
  return [
    {
      id: 1,
      title: 'What are the benefits of cross-platform app development?',
      content: (
        <div>
          <ContentText tag="div" className={textStyle}>
            <p>
              Cross-platform application development services offer several advantages, including:
            </p>
            <ul className="mt-[18px]">
              <li className="relative pl-[20px] before:content-['•'] before:absolute before:left-0 mb-[18px]">
                <p>
                  <span className="font-medium ml-[7px]">Cost-effectiveness.</span>
                  {' '}
                  Developing a single codebase for multiple platforms reduces
                  development and maintenance costs.
                </p>
              </li>
              <li className="relative pl-[20px] before:content-['•'] before:absolute before:left-0 mb-[18px]">
                <p>
                  <span className="font-medium ml-[7px]">Time-saving.</span>
                  {' '}
                  With cross-platform development frameworks, developers can write code
                  once and deploy it across different platforms, saving time and effort.
                </p>
              </li>
              <li className="relative pl-[20px] before:content-['•'] before:absolute before:left-0 mb-[18px]">
                <p>
                  <span className="font-medium ml-[7px]">Wider audience reach.</span>
                  {' '}
                  By targeting multiple platforms, businesses can reach a larger
                  user base and maximize their app&apos;s potential.
                </p>
              </li>
              <li className="relative pl-[20px] before:content-['•'] before:absolute before:left-0">
                <p>
                  <span className="font-medium ml-[7px]">Consistent user experience.</span>
                  {' '}
                  Cross-platform development ensures a consistent user
                  interface and experience across different devices and platforms.
                </p>
              </li>
            </ul>
          </ContentText>
        </div>
      ),
    },
    {
      id: 2,
      title: 'Can you integrate custom features and functionalities into cross-platform apps?',
      content: (
        <div>
          <ContentText tag="p" className={textStyle}>
            Yes, we can integrate custom features and functionalities into cross-platform apps based
            on your specific requirements. We are an experienced cross-platform app development company
            that has expertise in working with various APIs, third-party integrations, and backend
            systems to deliver tailored solutions that meet your business needs.
          </ContentText>
        </div>
      ),
    },
    {
      id: 3,
      title: 'Will my cross-platform app have native-like performance?',
      content: (
        <div>
          <ContentText tag="p" className={textStyle}>
            Yes, cross-platform apps developed using modern frameworks like React Native and Flutter
            can deliver native-like performance. These frameworks leverage native components and optimize
            performance, resulting in smooth and responsive user experiences.
          </ContentText>
        </div>
      ),
    },
    {
      id: 5,
      title: 'Do you provide cross-platform design services?',
      content: (
        <div>
          <ContentText tag="p" className={textStyle}>
            Sure! We offer cross-platform design services to help businesses create visually appealing and
            user-friendly applications that work seamlessly across different platforms and devices. As a
            cross-platform design company, we focus on creating visually appealing interfaces, easy navigation,
            and seamless interactions to enhance user engagement and satisfaction.
          </ContentText>
        </div>
      ),
    },
    {
      id: 6,
      title: 'How do you ensure the quality of cross-platform apps?',
      content: (
        <div>
          <ContentText tag="p" className={textStyle}>
            We follow rigorous quality assurance processes and conduct thorough testing to ensure the functionality,
            performance, and compatibility of cross-platform apps across different devices and platforms. Onix is an
            experienced cross-platform app development company that performs comprehensive testing, including
            functional testing, usability testing, performance testing, and compatibility testing.
          </ContentText>
        </div>
      ),
    },
    {
      id: 7,
      title: 'Can you provide ongoing support and maintenance for cross-platform apps?',
      content: (
        <div>
          <ContentText tag="p" className={textStyle}>
            Yes, our cross-platform mobile app development services include ongoing support and maintenance
            to ensure your app&apos;s smooth operation and address any issues or updates that may arise. We
            provide timely updates, bug fixes, and enhancements to keep your app up-to-date and compatible
            with the latest platform changes.
          </ContentText>
        </div>
      ),
    },
    {
      id: 8,
      title: 'How long does it take to develop a cross-platform app?',
      content: (
        <div>
          <ContentText tag="p" className={textStyle}>
            The development timeline for a cross-platform app depends on various factors, including the complexity of
            the app, the number of features, and the integration requirements. We work closely with our clients to
            define project timelines and milestones, ensuring efficient development and timely delivery.
          </ContentText>
        </div>
      ),
    },
    {
      id: 9,
      title: 'How can I get started with your cross-platform mobile app development services?',
      content: (
        <div>
          <ContentText tag="p" className={textStyle}>
            Getting started is easy! Simply
            {' '}
            <span
              className="inline"
              role="presentation"
              onClick={() => dispatch(setShowContactForm({ showContactForm: true }))}
            >
              <span
                className={textLink}
              >
                contact our team
              </span>
            </span>
            {' '}
            and we will be happy to discuss your project requirements,
            provide comprehensive consultation, and guide you through the cross-platform app development process.
          </ContentText>
        </div>
      ),
    },
  ];
};

export default FaqData;
