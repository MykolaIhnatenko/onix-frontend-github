import UXExpertiseItem from '../components/UXExpertiseItem';

const expertiseData = [
  {
    id: 1,
    content: (
      <UXExpertiseItem
        id={1}
        title="Confusing navigation"
        content={(
          <div>
            <p>Poorly designed navigation can make it difficult for users to find what they want on a site.</p>
            <br />
            <p>
              We will identify areas of confusion and provide recommendations for more precise,
              more intuitive navigation.
            </p>
          </div>
        )}
      />
    ),
  },
  {
    id: 2,
    content: (
      <UXExpertiseItem
        id={2}
        title="Poor accessibility"
        content={(
          <div>
            <p>Accessibility issues can make it difficult or impossible for some users to access a site.</p>
            <br />
            <p>
              UX audit services find accessibility barriers and provide solutions to ensure the area
              is usable by all visitors.
            </p>
          </div>
        )}
      />
    ),
  },
  {
    id: 3,
    content: (
      <UXExpertiseItem
        id={3}
        title="Lack of mobile responsiveness"
        content={(
          <div>
            <p>
              With more and more people using mobile devices to access the internet, having a mobile-responsive
              site is crucial.
            </p>
            <br />
            <p>
              A UX audit can detect areas where the site may not be optimized for mobile and provide recommendations
              for improvement.
            </p>
          </div>
        )}
      />
    ),
  },
  {
    id: 4,
    content: (
      <UXExpertiseItem
        id={4}
        title="Outdated design"
        content={(
          <div>
            <p>An outdated design can make a site look unprofessional and turn off potential customers.</p>
            <br />
            <p>
              Design audit services can identify elements of the site&apos;s design that may be outdated and
              provide recommendations for a modern, fresh look.
            </p>
          </div>
        )}
      />
    ),
  },
  {
    id: 5,
    content: (
      <UXExpertiseItem
        id={5}
        title="Low engagement rates"
        content={(
          <div>
            <p>
              If users aren&apos;t engaging with a site&apos;s content, it may be time to reevaluate
              the user experience.
            </p>
            <br />
            <p>
              The service defines what may be causing low engagement rates and provide recommendations for
              improvement to keep users engaged and coming back for more.
            </p>
          </div>
        )}
      />
    ),
  },
];

export default expertiseData;
