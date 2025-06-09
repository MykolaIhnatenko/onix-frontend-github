const borderedColumnsData = {
  title: 'The Fayno Market application has interfaces designed for two categories of users',
  content: [
    {
      id: 1,
      offset: -40,
      columnTitle: 'Grocery store customers',
      desc: (
        <>
          The
          {' '}
          <span>customers’ mobile app interface</span>
          {' '}
          enables users to join the Fayno Market community and choose their
          home grocery to fully access the benefits Fayno Market offers. A user can:
        </>
      ),
      list: [
        'View promotions (discounts on specific products) in the home or other Fayno Market groceries',
        `View personalized offers – discounts formed for an individual patron based on their purchase history,
        personal information, and responses to various surveys`,
        'Track their progress through 5-level loyalty programs',
        'Use their loyalty card while shopping',
        'View their purchase history and analyze their spending',
        'Acquire, track, and donate bonuses towards charitable causes',
        'Purchase and send gift cards',
      ],
    },
    {
      id: 2,
      offset: 40,
      columnTitle: 'Fayno Market employees',
      desc: (
        <>
          The
          {' '}
          <span>employees’ app interface</span>
          {' '}
          facilitates the management of the employees’ workflow and provides the same
          benefits associated with the loyalty program as the customers enjoy. An employee can:
        </>
      ),
      list: [
        'View their loyalty program details, bonuses, charitable projects, and news',
        'Have the loyalty card barcode scanned at the checkout point',
        'View special offers for employees',
        'View their work schedule',
        'Send and receive push notifications, e.g., to call a selected employee or employees to a specific workstation',
        'Manage their profile information',
        'Send gift cards to people on their contact lists (planned functionality)',
      ],
    },
  ],
};

export default borderedColumnsData;
