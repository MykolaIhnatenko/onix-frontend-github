import ContentText from 'components/ContentText/ContentText';

const digitalHealthcareSecondBusinessData = {
  upTitle: '[ Development ]',
  title: 'Our cooperation started with setting up an effective and transparent process.',
  subTitle: 'At Onix, we use the Agile methodology to add flexibility, speed, and quality to our development process.',
  firstText: 'This development approach enables us to make ongoing improvements avoiding any issues and delays.',
  secondText: (
    <ContentText tag="div" marginAbsent>
      <p>
        The main task was to develop a healthcare app for self-management (iOS and Android) and
        a web app. We decided to choose React Native since it:
      </p>
      <ul className="p-[30px_0_40px] screen-md:py-[30px]">
        <li className="flex">
          <span className="w-[4px] h-[4px] bg-[#666] rounded-full shrink-0 mt-[10px] mr-[10px]" />
          <p>
            allows us to develop simultaneously for Android and iOS by sharing code between two platforms.
          </p>
        </li>
        <li className="flex">
          <span className="w-[4px] h-[4px] bg-[#666] rounded-full shrink-0 mt-[10px] mr-[10px]" />
          <p>
            ensures high performance. The user interface is created with the help of native modules and
            widgets. This is why the app looks and feels native.
          </p>
        </li>
        <li className="flex">
          <span className="w-[4px] h-[4px] bg-[#666] rounded-full shrink-0 mt-[10px] mr-[10px]" />
          <p>
            reduces time and cost. We need one team to develop several apps and reuse the code base. So,
            the development time decreases twice, and so does the cost.
          </p>
        </li>
        <li className="flex">
          <span className="w-[4px] h-[4px] bg-[#666] rounded-full shrink-0 mt-[10px] mr-[10px]" />
          <p>
            allows browser-compatible components to build web apps using the existing codebase of mobile
            apps while accelerating the web app development process significantly.
          </p>
        </li>
      </ul>
      <p>
        For backend development, we chose NodeJS, which is fast, has a large number of libraries, and is
        well suited for applications such as GG, which contains a large number of requests, but there
        are no very complex calculations.
        <span className="block pb-[30px] screen-md:pb-[20px]" />
        As a result, we had a fast, high-quality, and effective development with a compact team that
        professionally implemented the client&apos;s ideas into a viable product!
      </p>
    </ContentText>
  ),
};

export default digitalHealthcareSecondBusinessData;
