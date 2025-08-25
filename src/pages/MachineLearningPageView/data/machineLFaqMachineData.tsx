import { useDispatch } from 'react-redux';

import ContentText from '../../../components/ContentText/ContentText';
import LinkComponent from '../../../components/Link/Link';
import { setShowContactForm } from '../../../store/app/contactForm/slice';
import {
  btnStyle, textLink, textListUl, textListUlLi, textStyle,
} from 'components/FAQBlock/tailwindStyle/tailwindStyle';

const styles = 'relative top-[-7px] screen-md:top-0';
const listStyles = 'list-decimal mb-[5px]';

function MachineLFaqMachineData() {
  const dispatch = useDispatch();
  return (
    [
      {
        id: 1,
        title: 'What is the cost of your machine learning development services?',
        content: (
          <div>
            <ContentText tag="p" className={`${textStyle} ${styles}`}>
              The cost of machine learning software can vary widely depending on complexity,customization, features,
              and the development approach. As a machine learning consulting company, we offer free one-hour
              consultation, 1 week of demo development for $400, and 1-3 months of ML solution development
              for
              {' '}
              {'>'}
              $10,000 per month. For long-term development, it&apos;s better to request a quote since
              it requires details for accurate estimation.
            </ContentText>
          </div>
        ),
      },
      {
        id: 2,
        title: 'What custom machine learning solutions do you build?',
        content: (
          <div>
            <ContentText className={`${textStyle} ${styles}`} tag="div">
              <p>
                As a machine learning app development company, we build various machine learning solutions
                tailored to specific industries and use cases. Some of the machine learning solutions we offer include:
              </p>
              <ol className="pt-[15px] pl-[55px]">
                <li className={listStyles}>
                  <p>predictive analytics,</p>

                </li>
                <li className={listStyles}>
                  <p>custom Llama and BERT solutions,</p>
                </li>
                <li className={listStyles}>
                  <p>
                    NLP solutions for tasks such as sentiment analysis, language translation,
                    chatbots, and text summarization,
                  </p>
                </li>
                <li className={listStyles}>
                  <p>
                    computer vision applications for image recognition, object detection, facial
                    recognition, and video analysis to extract insights from visual data,
                  </p>
                </li>
                <li className={listStyles}>
                  <p>
                    anomaly detection systems to identify unusual patterns or outliers in data,
                    helping detect fraud, faults, or anomalies in various processes.
                  </p>
                </li>
                <li className={listStyles}>
                  <p>
                    recommendation systems that analyze user behavior and preferences to
                    provide personalized recommendations for products, content, or services.
                  </p>
                </li>
              </ol>
              <p>
                These are just a few examples of the custom machine learning development solutions we offer.
                Onix is a MLsoftware development company that works closely with clients to understand their
                needs and objectives, delivering solutions that drive value and innovation in their businesses.
              </p>
            </ContentText>
          </div>
        ),
      },
      {
        id: 3,
        title: (
          'What industries can you provide machine learning development services for?'
        ),
        content: (
          <div>
            <ContentText tag="p" className={`${textStyle} ${styles}`}>
              We are dedicated to leveraging ML technology to drive innovation and solve complex challenges
              across various sectors, helping businesses achieve their goals and stay competitive in
              their respective markets.
              We work with diverse industries to deliver ML consulting services and develop machine
              learning solutions tailored to their needs and goals. Some industries we commonly
              provide ML development services include e-commerce & retail, ecology, social media,
              energy, education, banking & finance, healthcare, real estate, construction, manufacturing, and marketing.
            </ContentText>
          </div>
        ),
      },
      {
        id: 4,
        title: 'Can I hire an Onix team to develop my machine learning project?',
        content: (
          <div>
            <ContentText tag="p" className={`${textStyle} ${styles}`}>
              Yes, sure. Our ML development team is highly experienced and knowledgeable in
              providing machine learning consulting services and developing machine learning
              solutions for various projects and use cases.
              We have a proven track record of building AI models that deliver business value
              while meeting the required quality standards. We offer services ranging from
              model prototyping to full deployment and maintenance. We are committed to
              providing the best possible experience for our customers by delivering projects
              on time and within budget. So, feel free to
              {' '}
              <button
                className={btnStyle}
                type="button"
                onClick={() => dispatch(setShowContactForm({ showContactForm: true }))}
              >
                contact our experts
              </button>
              {' '}
              anytime!
            </ContentText>
          </div>
        ),
      },
      {
        id: 5,
        title: 'Can you share your ML & deep learning development projects?',
        content: (
          <div>
            <ContentText className={`${textStyle} ${styles}`} tag="div">
              <p>
                Yes, as an experienced machine learning app development company, we have a
                {' '}
                <LinkComponent
                  absolute={false}
                  target="_blank"
                  href="https://works.onix-systems.com/collection/ml"
                  rel="noopener noreferrer nofollow"
                  className={textLink}
                >
                  portfolio
                </LinkComponent>
                {' '}
                of successful Machine Learning and Deep Learning development projects that
                our team has completed in recent years. Our projects include:
              </p>
              <ul className={textListUl}>
                <li className={textListUlLi}>
                  <p>Drone & Satellite AI for Mapping and GIS</p>
                </li>
                <li className={textListUlLi}>
                  <p>Crowd Behavior Patterns Recognition</p>
                </li>
                <li className={textListUlLi}>
                  <p>Green Energy Power Generating Forecast</p>
                </li>
                <li className={textListUlLi}>
                  <p>Social Network Auto-reply assistant</p>
                </li>
                <li className={textListUlLi}>
                  <p>Language Detector</p>
                </li>
                <li className={textListUlLi}>
                  <p>Replacing Faces in a Video Stream</p>
                </li>
                <li className={textListUlLi}>
                  <p>LSTM News Categorizer</p>
                </li>
                <li className={textListUlLi}>
                  <p>and many more</p>
                </li>
              </ul>
            </ContentText>
          </div>
        ),
      },
      {
        id: 6,
        title: (
          `
            Can we expect any additional costs or hidden fees
            when using your machine learning development services?
          `
        ),
        content: (
          <div>
            <ContentText tag="p" className={`${textStyle} ${styles}`}>
              Our goal is transparency, so we strive to outline all costs clearly upfront. However,
              the nature of machine learning projects can sometimes lead to unexpected requirements
              or complexities, which might result in additional costs. These could include extra
              development time, data acquisition expenses, or infrastructure needs. We make every
              effort to communicate any potential additional costs as soon as they become apparent,
              ensuring there are no surprises along the way.
            </ContentText>
          </div>
        ),
      },
      {
        id: 7,
        title: (
          `
            What guarantees do you provide on the quality and
            performance of your machine learning development services?
          `
        ),
        content: (
          <div>
            <ContentText className={`${textStyle} ${styles}`} tag="div">
              <p>
                Our goal is to collaborate closely with clients to understand their needs, provide
                transparent communication throughout the development process, and deliver solutions
                that meet or exceed their expectations.
              </p>
              <br />
              <p>We provide assurances through:</p>
              <ul className={textListUl}>
                <li className={textListUlLi}>
                  <p>
                    Quality assurance processes. We follow industry best practices and rigorous
                    quality assurance processes to ensure that our solutions meet high standards.
                  </p>
                </li>
                <li className={textListUlLi}>
                  <p>
                    Performance testing. We test our machine learning models and systems under
                    various conditions to assess their performance and reliability.
                  </p>
                </li>
                <li className={textListUlLi}>
                  <p>
                    Continuous improvement. We remain committed to continuously improving our
                    services and refining our models based on feedback and emerging best practices.
                  </p>
                </li>
                <li className={textListUlLi}>
                  <p>
                    Customer support. Our team is dedicated to providing prompt assistance and
                    support to address any issues or concerns that may arise during or after the development process.
                  </p>
                </li>
              </ul>
            </ContentText>
          </div>
        ),
      },
    ]
  );
}
export default MachineLFaqMachineData;
