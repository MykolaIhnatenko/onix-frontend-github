import ContentText from 'components/ContentText/ContentText';

const inneraiBusinessContextData = {
  upTitle: '[ Project idea and goals ]',
  title: 'The app was envisioned by Jimmy Gambier, the founder and CEO of InnerVR, Inc.',
  firstText: [
    `When Onix’s developers were building the virtual reality-based relaxation application, Mr. Gambier decided
    to try a new commercial direction – mobile meditation platform development – and a more user-oriented approach.`,
    `He came up with an idea to leverage AI to tailor every meditation session to each user’s unique needs
    and preferences.`,
  ],
  secondText: (
    <ContentText tag="div" marginAbsent>
      <p>
        He envisioned a mobile application that would:
      </p>
      <ul>
        <li className="flex pt-[20px] screen-lg:pt-[15px]">
          {' '}
          <span className="mr-[10px]">﹂</span>
          {' '}
          <p>
            Generate unique meditations specifically for each user instead of generic stress-relief sessions
            with pre-recorded guidance
          </p>
        </li>
        <li className="flex pt-[20px] screen-lg:pt-[15px]">
          {' '}
          <span className="mr-[10px]">﹂</span>
          {' '}
          <p>
            Craft each meditation session so that it dives into the user’s specific stressors and pulls
            from their life experiences
          </p>
        </li>
        <li className="flex pt-[20px] screen-lg:pt-[15px]">
          {' '}
          <span className="mr-[10px]">﹂</span>
          {' '}
          <p>
            Learn from interactions with the user to tailor their meditation practice to their individual
            needs and teach effective coping mechanisms
          </p>
        </li>
        <li className="flex pt-[20px] screen-lg:pt-[15px]">
          {' '}
          <span className="mr-[10px]">﹂</span>
          {' '}
          <p>
            Provide personalized daily insights to guide users toward balance and peace of mind
          </p>
        </li>
      </ul>
    </ContentText>
  ),
};

export default inneraiBusinessContextData;
