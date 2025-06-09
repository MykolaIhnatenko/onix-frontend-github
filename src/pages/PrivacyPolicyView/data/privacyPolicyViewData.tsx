import Link from 'next/link';

import styles from '../sass/privacyPolicyView.module.scss';

const privacyPolicyViewData = (saleUrl: boolean | undefined) => [
  {
    title: '1. Scope of this Privacy Policy',
    content: (
      <p>
        Onix
        {!saleUrl && (
          <>
            -Systems, LLC
          </>
        )}
        {' '}
        Onix is a Ukrainian organization, with legal entities, business processes, management structures,
        and technical systems that cross borders. This Privacy Policy applies to and covers the collection,
        use and disclosure of information collected through all Onix
        {!saleUrl && (
          <>
            -Systems
          </>
        )}
        {' '}
        websites
        {!saleUrl && (
          <>
            , including
            {' '}
            <Link href="https://onix-systems.com" className={styles.link}>
              https://onix-systems.com
            </Link>
            ,
          </>
        )}
        {' '}
        domains, applications, and products. It describes the choices available to you regarding our use of
        your personal information. It also details our privacy practices concerning the personal information
        of 3rd parties we collect on behalf of our clients. The use of information collected through our services
        shall be limited to the purpose of providing the services for which our clients have engaged us.
      </p>
    ),
  },
  {
    title: '2. Collection of personal information',
    content: (
      <>
        <div className={styles.contentPadding}>
          <p>
            When you visit our website or use our services, we may collect the following personal
            information from you:
          </p>
        </div>
        <div className={styles.contentPadding}>
          <ul>
            <li>
              ﹂ Working with new software design patterns and expertly applying them when coding
            </li>
            <li>
              ﹂ Using classical algorithms and data structures
            </li>
            <li>
              ﹂ Analyzing conditions and selecting the best ways for data storing and processing
            </li>
            <li>
              ﹂ Working with SQLite and Realm databases
            </li>
          </ul>
        </div>
        <div className={styles.contentPadding}>
          <p>
            We display personal testimonials of satisfied customers on our site in addition to other case studies
            and success stories. With your consent we may post your testimonial along with your name. If you wish
            to update or delete your testimonial, you can contact us
            {!saleUrl && (
              <>
                {' '}
                using the information listed below
              </>
            )}
            .
          </p>
        </div>
        {!saleUrl && (
          <div className={styles.contentPadding}>
            <span className={styles.linkTitle}>Email:</span>
            {' '}
            <a href="mailto:sales@onix-systems.com" className={styles.link}>sales@onix-systems.com</a>
          </div>
        )}
        <p>
          In addition to the information you provide, Onix
          {!saleUrl && (
            <>
              -Systems
            </>
          )}
          {' '}
          may also collect information during your
          visit to Onix
          {!saleUrl && (
            <>
              -Systems
            </>
          )}
          {' '}
          website or web-based application through our automatic data collection
          tools, which include cookies, analytics and embedded web links. These tools collect certain
          traffic information that your browser sends to a website, such as your browser type and language,
          access times, and the address of the website from which you arrived. They may also collect
          information about your Internet Protocol (IP) address, unique device identifier, clickstream
          behavior (i.e., the pages you view, the links you click, and other actions you take in connection
          with Onix
          {!saleUrl && (
            <>
              -Systems
            </>
          )}
          {' '}
          website) and product information. Onix
          {!saleUrl && (
            <>
              -Systems
            </>
          )}
          {' '}
          may also use some of these
          automatic data collection tools in connection with certain emails and communications sent from
          Onix
          {!saleUrl && (
            <>
              -Systems
            </>
          )}
          {' '}
          and therefore may collect information using these tools when you open the email or
          click on a link contained in the email.
        </p>
      </>
    ),
  },
  {
    title: '3. How we use your information',
    content: (
      <>
        <div className={styles.contentPadding}>
          <p>
            The information Onix
            {!saleUrl && (
              <>
                -Systems
              </>
            )}
            {' '}
            collects to understand your needs and interests helps Onix
            {!saleUrl && (
              <>
                -Systems
              </>
            )}
            {' '}
            deliver a consistent and personalized service. For example, Onix
            {!saleUrl && (
              <>
                -Systems
              </>
            )}
            {' '}
            may use your
            {!saleUrl ? (
              <br />
            ) : ' '}
            information to:
          </p>
        </div>
        <ul>
          <li>
            ﹂ Assist you in completing a transaction
          </li>
          <li>
            ﹂ Prevent and detect security threats, fraud or other malicious activity
          </li>
          <li>
            ﹂ Provide and improve service and support
          </li>
          <li>
            ﹂ Update you on new services and benefits
          </li>
          <li>
            ﹂ Provide personalized promotional offers
          </li>
          <li>
            ﹂ Select content to be communicated to you
          </li>
          <li>
            ﹂ Measure performance of marketing initiatives, ads, and websites
          </li>
          <li>
            ﹂ Contact you regarding Onix
            {!saleUrl && (
              <>
                -Systems
              </>
            )}
            &apos;
            {' '}
            products or services
          </li>
        </ul>
      </>
    ),
  },
  {
    title: '4. How we share your information',
    content: (
      <>
        <div className={styles.contentPadding}>
          <p>
            Onix
            {!saleUrl && (
              <>
                -Systems
              </>
            )}
            {' '}
            will not sell, rent or lease your personal information to others except as described
            in this Policy. Onix
            {!saleUrl && (
              <>
                -Systems
              </>
            )}
            {' '}
            shares personal information in the following ways:
          </p>
        </div>
        <ul>
          <li>
            ﹂ As required by law, such as to comply with a subpoena, or a similar legal process
          </li>
          <li>
            ﹂ When we believe in good faith that disclosure is necessary to protect our rights, protect your
            safety or the safety of others, investigate fraud, or respond to a government request
          </li>
          <li>
            ﹂ If Onix
            {!saleUrl && (
              <>
                -Systems
              </>
            )}
            {' '}
            is involved in a merger, acquisition, or sale of all or a portion of its assets,
            you will be notified via email and/or a prominent notice on our website of any change in ownership
            or uses of your personal information, as well as any choices you may have regarding your personal
            information
          </li>
          <li>
            ﹂ To any other 3rd party with your prior consent to do so
          </li>
        </ul>
      </>
    ),
  },
  {
    title: '5. Access to and accuracy of your information',
    content: (
      <p>
        Onix
        {!saleUrl && (
          <>
            -Systems
          </>
        )}
        {' '}
        strives to keep your personal information accurately recorded. We have implemented
        technology, management processes and policies to help maintain data accuracy. If your personal
        information changes, you may ask to have it corrected, updated, amended, or removed by contacting
        your dedicated support representative
        {!saleUrl && (
          <>
            , emailing us at
            {' '}
            <a href="mailto:sales@onix-systems.com" className={styles.link}>sales@onix-systems.com</a>
          </>
        )}
        {'. '}
        Out of respect for your privacy, you may also choose to stop receiving marketing or promotional
        emails by following the unsubscribe instructions included in these emails, accessing the email
        preferences in your account settings page
        {!saleUrl && (
          <>
            or emailing us at
            {' '}
            <a href="mailto:sales@onix-systems.com" className={styles.link}>sales@onix-systems.com</a>
          </>
        )}
        {'. '}
        If you no longer desire our service, please contact us
        {!saleUrl && (
          <>
            at
            {' '}
            <a href="mailto:sales@onix-systems.com" className={styles.link}>sales@onix-systems.com</a>
          </>
        )}
        {'. '}
        We will respond to your request within 30 days. We will retain your information for as long as
        your account is active, as needed to provide you services and as necessary to comply with our
        legal obligations, resolve disputes, and enforce our agreements.
      </p>
    ),
  },
  {
    title: '6. Keeping your personal information secure',
    content: (
      <>
        <div className={styles.contentPadding}>
          <p>
            Onix
            {!saleUrl && (
              <>
                -Systems
              </>
            )}
            {' '}
            takes seriously the trust you place in us. To prevent unauthorized access or
            disclosure, to maintain data accuracy, and to ensure the appropriate use of the information,
            Onix
            {!saleUrl && (
              <>
                -Systems
              </>
            )}
            {' '}
            utilizes reasonable and appropriate physical, technical, and administrative procedures
            to safeguard the information we collect and process.
          </p>
        </div>
        <p>
          When collecting or transferring sensitive information, such as credit card information on behalf
          of our clients, we use a variety of additional security technologies and procedures to help protect
          personal information from unauthorized access, use, or disclosure. The personal information provided
          to us is stored on computer systems located in controlled facilities that have limited access. When
          we transmit highly confidential information over the Internet, we protect it through the use of
          encryption, such as the Secure Socket Layer (SSL) protocol. If you have any questions about security
          on our website, you can contact us
          {!saleUrl && (
            <>
              at
              {' '}
              <a href="mailto:sales@onix-systems.com" className={styles.link}>sales@onix-systems.com</a>
            </>
          )}
          .
        </p>
      </>
    ),
  },
];

export default privacyPolicyViewData;
