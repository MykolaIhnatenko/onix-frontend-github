import { IAccordionData } from 'components/AccordionTemplate/interfaces/IAccordion';
import AccordionItemContentWithImg from 'components/AccordionItemContentWithImg/AccordionItemContentWithImg';
import ItemText from 'components/ItemText/ItemText';
import ItemList from 'components/ItemList/ItemList';

import PaymentsAndWallets from '@/images/fintech/img_PaymentsAndWallets.webp';
import InvestmentManagment from '@/images/fintech/img_InvestmentManagment.webp';
import TraidingAndExchanges from '@/images/fintech/img_TraidingAndExchanges.webp';
import LendingAndAlternative from '@/images/fintech/img_LendingAndAlternative.webp';
import BankingAndFinance from '@/images/fintech/img_BankingAndFinance.webp';

const cardFintechData: IAccordionData[] = [
  {
    id: 1,
    number: '01',
    title: 'Banking & finance software',
    content: (
      <AccordionItemContentWithImg
        image={BankingAndFinance}
        imageAlt="AppsDev"
      >
        <ItemText
          content={[
            `Our banking and finance solutions enhance operational efficiency, improve
            customer experiences, ensure regulatory compliance, and drive growth.`,
          ]}
        />
        <ItemList
          list={[
            'Web and mobile banking apps',
            'Payment processing solutions',
            'Wealth management software',
            'Custom risk management software',
            'Cryptocurrency integration',
            'AI-powered chatbots',
            'Financial analytics',
          ]}
          marginBottomAbsent
        />
      </AccordionItemContentWithImg>
    ),
  },
  {
    id: 2,
    number: '02',
    title: 'Payments & digital wallets',
    content: (
      <AccordionItemContentWithImg
        image={PaymentsAndWallets}
        imageAlt="MobileApps"
      >
        <ItemText
          content={[
            'Onix`s solutions offer convenience, speed, and enhanced security to users,'
            + ' whether they are making purchases online or transferring funds across the globe.',
          ]}
        />
        <ItemList
          list={[
            'eWallets',
            'P2P payment apps',
            'Contactless payment systems',
            'Cross-border payment solutions',
            'Payment gateway integration',
            'Bill payment and management',
            'Integration with IoT and wearables',
            'Security and fraud prevention',
            'Reward and loyalty programs',
          ]}
          marginBottomAbsent
        />
      </AccordionItemContentWithImg>
    ),
  },
  {
    id: 3,
    number: '03',
    title: 'Investment management',
    content: (
      <AccordionItemContentWithImg
        image={InvestmentManagment}
        imageAlt="SportsApps"
      >
        <ItemText
          content={[
            `We help individuals, institutions, and businesses enhance and streamline the
            processes involved in managing investments. Our solutions allow for effective
            risk assessment, optimizing portfolio management, performance tracking, and more.`,
          ]}
        />
        <ItemList
          list={[
            'Custom portfolio management software',
            'Mobile investment apps',
            'Algorithmic trading platforms',
            'Robo-advisory solutions',
            'Data analytics and AI integration',
            'Risk assessment tools',
            'NLP',
            'Performance tracking and reporting systems',
            'CRM and client management',
            'Integration with financial data providers',
          ]}
          marginBottomAbsent
        />
      </AccordionItemContentWithImg>
    ),
  },
  {
    id: 4,
    number: '04',
    title: 'Trading and exchanges',
    content: (
      <AccordionItemContentWithImg
        image={TraidingAndExchanges}
        imageAlt="CoachingApps"
      >
        <ItemText
          content={[
            `The Onix team leverages cutting-edge technologies to build tools and
            platforms necessary to execute trades efficiently and securely across various
            financial markets. We help you optimize trade execution, enhance market liquidity,
            and ensure compliance with regulatory standards.`,
          ]}
        />
        <ItemList
          list={[
            'Custom trading platform',
            'Mobile trading apps',
            'Cryptocurrency exchange',
            'Risk management systems',
            'Multi-asset platforms',
            'Algorithmic trading solutions',
            'High-frequency trading',
            'Liquidity aggregation',
            'Exchange matching engines',
            'Real-time market data integration',
            'Exchange APIs',
          ]}
          marginBottomAbsent
        />
      </AccordionItemContentWithImg>
    ),
  },
  {
    id: 5,
    number: '05',
    title: 'Lending and alternative finances',
    content: (
      <AccordionItemContentWithImg
        image={LendingAndAlternative}
        imageAlt="SportStreamingApps"
      >
        <ItemText
          content={[
            `Our experts leverage advanced technologies to facilitate lending processes,
            ensure diverse financing options, and foster financial inclusion by catering
            to a broader range of borrowers.`,
          ]}
        />
        <ItemList
          list={[
            'P2P lending solutions',
            'Mobile lending apps',
            'Crowdfunding platforms',
            'Loan sales systems',
            'Credit scoring and risk assessment',
            'Microfinance and microlending platforms',
            'Credit marketplace platforms',
            'Payment integration',
          ]}
          marginBottomAbsent
        />
      </AccordionItemContentWithImg>
    ),
  },
];

export default cardFintechData;
