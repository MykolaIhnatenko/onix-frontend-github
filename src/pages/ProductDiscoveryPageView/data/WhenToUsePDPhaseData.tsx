import getAccordionTextData from 'utils/getAccordionTextData';

const data = [
  {
    title: 'You want to build a product from scratch',
    content: [`Get a better understanding of what lies ahead for your product, identify potential risks, craft
      flawless experiences to satisfy particular user requirements, and facilitate reaching product-market fit.`],
  },
  {
    title: 'You need to scale an existing product',
    content: [`Analyze the current state of your product, determine the scope for scaling, define
      potential risks and issues, and provide ways to solve them.`],
  },
  {
    title: 'You need to audit an existing product',
    content: [`Our specialists can perform a comprehensive audit of existing products before the acquisition,
      merge, or any other substantial technological modifications in your organization.`],
  },
  {
    title: 'You want to assess your current product',
    content: [`Onix experts identify the outdated components of your software, define the full possibilities
      of product upgrading, and plan the development process to get the desired result on time.`],
  },
];

const WhenToUsePDPhaseData = getAccordionTextData(data);

export default WhenToUsePDPhaseData;
