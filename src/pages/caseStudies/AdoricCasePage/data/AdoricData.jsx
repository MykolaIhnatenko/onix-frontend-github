const challengesContent = [
  {
    id: 1,
    mobileReverseClass: '',
    classes: '',
    mt: '',
    graph: false,
    reverse: 'reverse',
    img: {
      directionClass: 'leftCell',
      displayClass: 'displayBlock',
      imgClass: 'lightbox',
      offset: -4,
      firstImgClass: 'screenImg',
      secondImgClass: 'shadowImg',
      imgMt: '',
      imgMb: '',
      src: '/static/images/Pages/AdoricCasePage/banners/img_lightbox.webp',
      alt: 'Adoric Lighnbox',
      width: 763,
      height: 557,
    },
    content: {
      text: (
        <>
          <h2>
            Lightbox editor
          </h2>
          <p>
            The editor works similarly to Photoshop, where a user can change layers,
            edit fonts and
            colors, add forms, change aligning, format text and work with graphics.
            Adoric editor was
            designed to help a user create a lightbox that can fit any screen resolution
            and browser.
            <br />
            <br />
            The editor has been written from scratch. This has helped us get a more
            flexible tool
            programmed in HTML5 and Vanilla JS. The editor represents a complex and
            large-scale
            application, but thanks to its core architecture, it works fast and gives a
            minimal load to a
            user’s computer.
          </p>
        </>
      ),
      textOffset: 4,
      textDirectionClass: 'rightCell',
      projectContextClass: 'projectContext',
    },
  },
  {
    id: 2,
    mobileReverseClass: 'mobileReverse',
    classes: '',
    mt: '',
    graph: false,
    reverse: '',
    img: {
      directionClass: 'rightCell',
      displayClass: '',
      imgClass: 'analyticsBlockContainer',
      offset: 4,
      firstImgClass: 'analyticsImgWrapper',
      secondImgClass: 'analyticsImage',
      imgMt: '',
      imgMb: '',
      src: '/static/images/Pages/AdoricCasePage/banners/img_analytics-screen-table.webp',
      alt: 'Adoric Analytics',
      width: 767,
      height: 595,
    },
    content: {
      text: (
        <>
          <h2>
            Events
          </h2>
          <p>
            We have developed a solution that helps working with Adoric using events.
            Site owners can
            receive real-time information about marketing activities started on Adoric
            and a marketing
            campaign on their website (e.g., find out when the lightbox was displayed,
            when it was closed,
            when the link was clicked, whether any elements were clicked etc.). They can
            manage all these
            activities by subscribing to Adoric or changing the algorithm of interaction
            depending on
            previous steps.
            <br />
            <br />
            A user can also send information for processing to Adoric. For example, a
            site owner can send
            information about user activities on their website - purchased goods, going
            back to the website,
            adding to cart, etc. Adoric will react to this by displaying a lightbox.
            <br />
            <br />
            Adoric tracks these events and saves them to build analytics in order to set
            up a marketing
            campaign that will “trigger” in reply to certain events.
          </p>
        </>
      ),
      textOffset: -4,
      textDirectionClass: 'leftCell',
      projectContextClass: 'projectContext',
    },
  },
  {
    id: 3,
    mobileReverseClass: '',
    classes: '',
    mt: 'mt-0',
    graph: false,
    reverse: 'reverse',
    img: {
      directionClass: 'leftCell',
      displayClass: 'displayBlock',
      imgClass: 'integration',
      offset: -4,
      firstImgClass: 'screenImg',
      secondImgClass: '',
      imgMt: 'mt-0',
      imgMb: 'mb-0',
      src: '/static/images/Pages/AdoricCasePage/banners/img_mailing.webp',
      alt: 'Adoric Integration with mailing services',
      width: 716,
      height: 935,
    },
    content: {
      text: (
        <>
          <h2>
            Integration with mailing services
          </h2>
          <p>
            Adoric’s system was created as a flexible tool that meets different user
            preferences and allows
            integrating more than 10 mailing services and lead generation systems.
          </p>
        </>
      ),
      textOffset: 4,
      textDirectionClass: 'rightCell',
      projectContextClass: '',
    },
  },
  {
    id: 4,
    mobileReverseClass: 'mobileReverse',
    classes: 'analyticsBlock',
    mt: '',
    graph: true,
    reverse: '',
    img: {
      directionClass: 'rightCell',
      displayClass: '',
      imgClass: 'analyticsSys',
      offset: 4,
      firstImgClass: 'screenImg',
      secondImgClass: 'shadowImg',
      imgMt: '',
      imgMb: '',
      src: '/static/images/Pages/AdoricCasePage/banners/img_analytics.webp',
      alt: 'Adoric analytics system',
      width: 746,
      height: 550,
    },
    content: {
      text: (
        <>
          <h2>
            Analytics
          </h2>
          <p>
            Adoric contains a detailed analytics system that is connected both to
            creating marketing
            campaigns and audience analysis on a website. Adoric makes it easier to
            receive the most
            important data about the audience than Google Analytics.
          </p>
        </>
      ),
      textOffset: -4,
      textDirectionClass: 'leftCell',
      projectContextClass: '',
    },
  },
];

export default challengesContent;
