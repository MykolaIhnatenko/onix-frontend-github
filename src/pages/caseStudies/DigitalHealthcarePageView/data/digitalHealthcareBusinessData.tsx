import ContentText from 'components/ContentText/ContentText';

const digitalHealthcareBusinessData = {
  upTitle: '[ Design ]',
  title: 'Our redesign services made a difference',
  firstText: (
    <ContentText tag="div" marginAbsent className="min-lg:max-w-[630px] min-xxxl:max-w-[710px]">
      <p>
        So, at the very beginning, we got from the client:
      </p>
      <ul className="p-[30px_0_40px] screen-md:py-[30px]">
        <li className="flex">
          <span className="w-[4px] h-[4px] bg-[#666] rounded-full shrink-0 mt-[10px] mr-[10px]" />
          <p>
            Drafts of the wireframes;
          </p>
        </li>
        <li className="flex">
          <span className="w-[4px] h-[4px] bg-[#666] rounded-full shrink-0 mt-[10px] mr-[10px]" />
          <p>
            A design made by another agency;
          </p>
        </li>
        <li className="flex">
          <span className="w-[4px] h-[4px] bg-[#666] rounded-full shrink-0 mt-[10px] mr-[10px]" />
          <p>
            A list of features
          </p>
        </li>
      </ul>
      <p>
        When our specialists started to review the design, we found out that the user flow and UX were
        not thought over. The app seemed to be not very user-friendly, and the navigation was ambiguous.
      </p>
    </ContentText>
  ),
  secondText: [
    'Also, there was no specification that developers could start to work with.',
    `The main challenge was to invent a comfortable and user-friendly UX that would make users
    intuitively navigate through quite a lot of information and app functionality.`,
  ],
};

export default digitalHealthcareBusinessData;
