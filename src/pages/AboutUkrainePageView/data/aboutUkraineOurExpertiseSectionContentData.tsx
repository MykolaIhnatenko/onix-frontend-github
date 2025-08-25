import { IAccordionData } from 'components/AccordionTemplate/interfaces/IAccordion';
import AccordionItemContentWithImg from 'components/AccordionItemContentWithImg/AccordionItemContentWithImg';
import ItemText from 'components/ItemText/ItemText';

import AboutUkraineOurExpertie1 from '@/images/aboutUkraine/ourExpertise/img_our_expertise1.webp';
import AboutUkraineOurExpertie2 from '@/images/aboutUkraine/ourExpertise/img_our_expertise2.webp';
import AboutUkraineOurExpertie3 from '@/images/aboutUkraine/ourExpertise/img_our_expertise3.webp';
import AboutUkraineOurExpertie4 from '@/images/aboutUkraine/ourExpertise/img_our_expertise4.webp';
import AboutUkraineOurExpertie5 from '@/images/aboutUkraine/ourExpertise/img_our_expertise5.webp';
import AboutUkraineOurExpertie6 from '@/images/aboutUkraine/ourExpertise/img_our_expertise6.webp';

const aboutUkraineOurExpertiseSectionContentData: IAccordionData[] = [
  {
    id: 1,
    number: '01',
    title: 'A large world-class talent pool',
    content: (
      <AccordionItemContentWithImg
        image={AboutUkraineOurExpertie1}
        imageAlt="expertise-image"
      >
        <ItemText
          content={[
            `There are over 280K IT professionals, and nearly everyone has at least one specialized
            higher education diploma. Many have a foreign education and/or experience working abroad.`,
            `The number of new tech talent graduating annually is expected to hit 20K soon. About 42%
            of the current software developers are mid-level, and 26% are at the senior level. Most
            have years of experience working with proven processes and using the latest industry
            solutions and project management tools.`,
            `85% continue their tech learning throughout their careers through courses, workshops, events,
            etc. Outsourcing firms thoroughly recruit and pre-vet the programmers so
            clients can expect the highest-quality results.`,
          ]}
          marginBottomAbsent
        />
      </AccordionItemContentWithImg>
    ),
  },
  {
    id: 2,
    number: '02',
    title: 'Varied and thorough tech expertise',
    content: (
      <AccordionItemContentWithImg
        image={AboutUkraineOurExpertie2}
        imageAlt="expertise-image"
      >
        <ItemText
          content={[
            `Ukrainian software developers have expertise in all popular programming languages and frameworks
            and strong problem-solving skills.`,
            `The programmers score high in HackerRank and SkillValue challenges and rank 21st globally due
            to high technology and data science skills levels. They are up to date on innovations and
            attend tech conferences worldwide.`,
          ]}
          marginBottomAbsent
        />
      </AccordionItemContentWithImg>
    ),
  },
  {
    id: 3,
    number: '03',
    title: 'Excellent price/quality ratio',
    content: (
      <AccordionItemContentWithImg
        image={AboutUkraineOurExpertie3}
        imageAlt="expertise-image"
      >
        <ItemText
          content={[
            'Customers get high-quality coding and products at a considerably lower price in Ukraine.',
            `Ukrainian companies may charge between $30 and $65/hour for their software developers’ work,
            depending on technology and expertise level. This is nearly twice
            lower than their American and Western European counterparts.`,
            `Some vendors even waive their platform fee for companies contracting
            Ukrainian developers during wartime, which means extra savings.`,
          ]}
          marginBottomAbsent
        />
      </AccordionItemContentWithImg>
    ),
  },
  {
    id: 4,
    number: '04',
    title: 'Smooth communication and collaboration',
    content: (
      <AccordionItemContentWithImg
        image={AboutUkraineOurExpertie4}
        imageAlt="expertise-image"
      >
        <ItemText
          content={[
            `Ukrainian IT experts’ attitude when working with their clients and employers is
            respectful and friendly. 80% have an intermediate or higher level of English proficiency.`,
            `Thanks to international projects, foreign education, or experience working abroad,
            most are familiar with the Western working culture and share those
            values, such as time management, hard work, and integrity.`,
            `As employees, they are down-to-earth, proactive, with a strong work ethic
            and a can-do attitude, and can work independently and on in-house and distributed teams.`,
          ]}
          marginBottomAbsent
        />
      </AccordionItemContentWithImg>
    ),
  },
  {
    id: 5,
    number: '05',
    title: 'Convenient time zone',
    content: (
      <AccordionItemContentWithImg
        image={AboutUkraineOurExpertie5}
        imageAlt="expertise-image"
      >
        <ItemText
          content={[
            `Ukraine is only 1-2 hours ahead of most European countries and 6-10 hours from the US.
            This enables seamless cooperation and timely communication in the main office in any European country.`,
            `For the US, many Ukrainian outsourcing providers offer optimized collaboration plans and suitable
            work schedules. Their developers and project managers are flexible and experienced with adjusting
            their work processes to ensure an uninterrupted workflow for their clients.`,
          ]}
          marginBottomAbsent
        />
      </AccordionItemContentWithImg>
    ),
  },
  {
    id: 6,
    number: '06',
    title: 'Favorable business conditions',
    content: (
      <AccordionItemContentWithImg
        image={AboutUkraineOurExpertie6}
        imageAlt="expertise-image"
      >
        <ItemText
          content={[
            `The country presents minimal bureaucratic hurdles. Its laws are consistent with the European
            legislature and it offers favorable tax policies.`,
            `Ukraine’s intellectual property laws provide copyright protection for databases and computer
            programs. NDAs that protect your business ideas are standard practice.`,
            `Established Ukrainian IT firms follow best security practices and comply with international
            regulations and industry-specific certifications like HIPAA, PCI, and ISO.`,
            `Most outsourcing companies deal with local vendors that hire software engineers as
            independent contractors and cooperate under service provision agreements.`,
            `By delegating paperwork and other administrative functions to trustworthy vendors,
            customers save significant time and tens of thousands of dollars.`,
          ]}
          marginBottomAbsent
        />
      </AccordionItemContentWithImg>
    ),
  },
];

export default aboutUkraineOurExpertiseSectionContentData;
