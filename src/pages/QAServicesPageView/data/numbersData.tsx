const numbersData = [
  {
    id: 1,
    leftTitle: 23,
    leftPrefix: '+',
    leftContent: (
      <span className={`block w-[240px]
        screen-lg:w-[252px]
        screen-sm:max-w-[126px]`}
      >
        Years of experience
      </span>
    ),
    rightTitle: 1100,
    rightPrefix: ' +',
    rightContent: (
      <span className="block w-[276px] screen-sm:max-w-[112px]">
        Successfully delivered projects
      </span>
    ),
  },
  {
    id: 2,
    leftTitle: 55,
    leftPrefix: '+',
    leftContent: (
      <span className="block w-[240px] screen-sm:max-w-[150px]">
        Countries represented
        <br />
        by clients
      </span>
    ),
    rightTitle: 300,
    rightPrefix: '+',
    rightContent: (
      <span className="block w-[265px] screen-sm:max-w-[130px]">
        Pool of real devices
      </span>
    ),
  },
];

export default numbersData;
