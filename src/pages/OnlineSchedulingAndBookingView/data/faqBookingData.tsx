import Link from 'next/link';
import { useDispatch } from 'react-redux';

import ContentText from 'components/ContentText/ContentText';
import { setShowContactForm } from 'store/app/contactForm/slice';
import {
  textLink, textStyle,
} from 'components/FAQBlock/tailwindStyle/tailwindStyle';

const listStyle = 'list-disc mb-[10px]';

function FaqBookingData() {
  const dispatch = useDispatch();

  return [
    {
      id: 1,
      title: 'How to pick the best online booking software development company?',
      content: (
        <div>
          <ContentText tag="p" className={textStyle}>
            To make the right choice and hire an experienced booking software development company,
            it&lsquo;s better to pay attention to important factors such as portfolio, relevant expertise,
            experience, location, previous clients&lsquo; feedback, etc. Moreover, to choose the right company,
            you can talk openly with its specialists and ensure they understand your problem and know how
            to solve it with modern and reliable technologies
          </ContentText>
        </div>
      ),
    },
    {
      id: 2,
      title: 'What is the timeframe for developing an online booking system?',
      content: (
        <div>
          <ContentText tag="p" className={textStyle}>
            To accurately answer this question, we need to know your product idea, its complexity,
            the number of required features, developers&apos; expertise, and team size. Using our calculator,
            you can specify the number of experts and technologies you need and
            {' '}
            <Link href="https://onix-systems.com/dedicated-team-calculator">
              <span className={textLink}>get an approximate development time for your project!</span>
            </Link>
          </ContentText>
        </div>
      ),
    },
    {
      id: 3,
      title: 'What are the benefits of a custom online booking system?',
      content: (
        <div>
          <ContentText tag="div" className={textStyle}>
            <p className="!m-[0px_0px_30px] screen-lg:!mb-[15px] screen-md:!mb-[20px]">
              Online scheduling and booking system development can bring significant advantages to your
              business and customers. Here are the key benefits of building a custom booking system:
            </p>
            <ul>
              <li className={listStyle}>
                <p>
                  <span className="mr-[10px]">﹂</span>
                  your business is available round the clock
                </p>
              </li>
              <li className={listStyle}>
                <p>
                  <span className="mr-[10px]">﹂</span>
                  facilitated daily management
                </p>
              </li>
              <li className={listStyle}>
                <p>
                  <span className="mr-[10px]">﹂</span>
                  increased customer satisfaction
                </p>
              </li>
              <li className={listStyle}>
                <p>
                  <span className="mr-[10px]">﹂</span>
                  keeping slots full/Reducing no-shows
                </p>
              </li>
              <li className={listStyle}>
                <p>
                  <span className="mr-[10px]">﹂</span>
                  multi-channel appointments
                </p>
              </li>
              <li className={listStyle}>
                <p>
                  <span className="mr-[10px]">﹂</span>
                  the convenient booking experience for customers
                </p>
              </li>
              <li className={listStyle}>
                <p>
                  <span className="mr-[10px]">﹂</span>
                  valuable insight into your business
                </p>
              </li>
              <li className={listStyle}>
                <p>
                  <span className="mr-[10px]">﹂</span>
                  centralized information system
                </p>
              </li>
              <li className={listStyle}>
                <p>
                  <span className="mr-[10px]">﹂</span>
                  and many more.
                </p>
              </li>
            </ul>
          </ContentText>
        </div>
      ),
    },
    {
      id: 4,
      title: 'Which types of booking systems can you develop?',
      content: (
        <div>
          <ContentText tag="p" className={textStyle}>
            We have extensive experience building various types of booking systems: from medical scheduling software,
            hotel booking software, and travel booking systems to ticket booking, restaurant reservation software,
            financial systems and budgeting tools, and many more. We can build custom booking systems tailored to
            your specific industry and business needs. Feel free to&nbsp;
            <span
              role="button"
              tabIndex={0}
              className={textLink}
              onClick={() => dispatch(setShowContactForm({ showContactForm: true }))}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  dispatch(setShowContactForm({ showContactForm: true }));
                }
              }}
            >
              contact us and share your project idea!
            </span>
          </ContentText>
        </div>
      ),
    },
    {
      id: 5,
      title: 'How much does it cost to build a custom online booking system?',
      content: (
        <div>
          <ContentText tag="p" className={textStyle}>
            Booking system development costs may vary on various factors. To accurately answer this question,
            we need to know your product idea, its complexity, the number of required features, developers&lsquo;
            expertise, and team size. Using our calculator, you can specify the number of experts and technologies
            you need and
            {' '}
            <Link href="https://onix-systems.com/dedicated-team-calculator">
              <span className={textLink}>get an approximate development cost for your project!</span>
            </Link>
          </ContentText>
        </div>
      ),
    },
  ];
}

export default FaqBookingData;
