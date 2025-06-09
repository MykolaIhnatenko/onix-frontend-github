import { useDispatch } from 'react-redux';

import ContentText from '../../../components/ContentText/ContentText';
import { setShowContactForm } from '../../../store/app/contactForm/slice';
import { btnStyle, textStyle } from 'components/FAQBlock/tailwindStyle/tailwindStyle';

const styles = 'relative top-[-7px] screen-md:top-0';

function WebflowFaqData() {
  const dispatch = useDispatch();
  return (
    [
      {
        id: 1,
        title: 'What Webflow website development services do you offer?',
        content: (
          <div>
            <ContentText tag="p" className={`${textStyle} ${styles}`}>
              Our Webflow design services encompass a wide range of offerings, including the development of websites,
              the creation of custom landing page design, responsive design, interactive animations, and more. As
              a Webflow website development company, we tailor our services to meet your specific
              needs and requirements.
            </ContentText>
          </div>
        ),
      },
      {
        id: 2,
        title: 'Can you redesign an existing website using Webflow?',
        content: (
          <div>
            <ContentText tag="p" className={`${textStyle} ${styles}`}>
              Yes, as an experienced Webflow design agency, we can redesign and revamp your existing website using
              the Webflow platform. Our professional designers can work closely with you to understand your goals
              and deliver a fresh, modern, user-friendly redesign that aligns with your brand.
            </ContentText>
          </div>
        ),
      },
      {
        id: 3,
        title: 'Why should I choose Webflow for my website design needs?',
        content: (
          <div>
            <ContentText tag="p" className={`${textStyle} ${styles}`}>
              Webflow offers a range of benefits, including an accelerated design process, customized and
              visually appealing designs, seamless integration with third-party applications, and easy
              maintenance and updates.
            </ContentText>
          </div>
        ),
      },
      {
        id: 4,
        title: (
          `
            Can I still make changes to my website
            after it's been designed by your team?
          `
        ),
        content: (
          <div>
            <ContentText tag="p" className={`${textStyle} ${styles}`}>
              Yes! With Webflow, you have complete control over your website&apos;s content and design,
              allowing you to make changes and updates as needed.
            </ContentText>
          </div>
        ),
      },
      {
        id: 5,
        title: 'How long does it take to design a website using Webflow?',
        content: (
          <div>
            <ContentText tag="p" className={`${textStyle} ${styles}`}>
              The timeline for Webflow design projects can vary depending on the complexity and scope
              of the project. Onix is a Webflow website development company that works closely with
              our clients to establish realistic timelines and ensure timely delivery of their websites.
            </ContentText>
          </div>
        ),
      },
      {
        id: 6,
        title: 'Can I make updates to my Webflow website after it\'s launched?',
        content: (
          <div>
            <ContentText tag="p" className={`${textStyle} ${styles}`}>
              Yes, one of the advantages of Webflow is its user-friendly interface that allows you
              to make updates and modifications to your website even after it&apos;s launched. You can
              easily edit content, add new pages, and update visuals.
            </ContentText>
          </div>
        ),
      },
      {
        id: 7,
        title: 'How do I get started with your Webflow design services?',
        content: (
          <div>
            <ContentText tag="p" className={`${textStyle} ${styles}`}>
              To get started with our website design and development services, simply
              {' '}
              <button
                className={btnStyle}
                type="button"
                onClick={() => dispatch(setShowContactForm({ showContactForm: true }))}
              >
                contact us
              </button>
              , and we&apos;ll
              discuss your project requirements, goals, and timeline. Our team will guide you through
              the process, provide a comprehensive proposal, and work closely with you to bring your
              Webflow design project to life.
            </ContentText>
          </div>
        ),
      },
    ]);
}

export default WebflowFaqData;
