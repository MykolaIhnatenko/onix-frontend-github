import { useState } from 'react';
import Head from 'next/head';

import Layout from '../src/layout/Layout';
import IPages from '../src/interfaces/IPages';
import getSeoData from '../src/api/getSeoData';
import getFooterContent from 'api/getFooterContent';
import PagesToSalesChannels from '../src/constants/PageToSalesChannels';
import DedicatedTeamCalculatorPageView from '../src/pages/DedicatedTeamCalculatorPageView/DedicatedTeamCalculatorPageView';
import {
  ITechnologies,
} from '../src/pages/DedicatedTeamCalculatorPageView/interfaces/ICalculatorData';
import { initialTechnologies, initialSpecialists } from '../src/pages/DedicatedTeamCalculatorPageView/data/CalculatorData';
import { IBreadcrumbsItem } from '../src/layout/interfaces/IBreadcrumbs';
import ServiceJsonLd from 'components/ServiceJsonLd/ServiceJsonLd';

function DedicatedTeamCalculatorPage({ seoData, footerContent }:IPages) {
  const [specialists, setSpecialists] = useState(initialSpecialists);
  const [technologies, setTechnologies] = useState<ITechnologies>(initialTechnologies);
  const [currentDuration, setDuration] = useState<string>('');
  const [currentDomain, setDomains] = useState<string>('');

  const breadcrumbs:IBreadcrumbsItem[] = [
    {
      id: 1,
      title: 'Onix',
      path: '/',
    },
    {
      id: 2,
      title: 'Services',
      path: '/services',
    },
    {
      id: 3,
      title: 'Calculator',
      path: '/dedicated-team-calculator',
    },
  ];

  const changeSpecialistValue = (isIncrement: boolean, item: keyof typeof specialists) => {
    if ((!isIncrement && specialists[item] > 0) || (isIncrement && specialists[item] < 99)) {
      setSpecialists({
        ...specialists,
        [item]: (isIncrement ? specialists[item] + 1 : specialists[item] - 1),
      });
    }
  };

  const changeTechnologyValue = (
    isIncrement: boolean,
    item: string,
    direction: keyof typeof technologies,
  ) => {
    if (isIncrement || (!isIncrement && technologies[direction][item] > 0)) {
      setTechnologies({
        ...technologies,
        [direction]: {
          ...technologies[direction],
          [item]: (isIncrement ? technologies[direction][item] + 1 : technologies[direction][item] - 1),
        },
      });
    }
  };

  const resetSpecialistValue = (item: keyof typeof specialists) => {
    setSpecialists({
      ...specialists,
      [item]: 0,
    });
  };

  const resetTechnologyValue = (
    item: string,
    direction: keyof typeof technologies,
  ) => {
    setTechnologies({
      ...technologies,
      [direction]: {
        ...technologies[direction],
        [item]: 0,
      },
    });
  };

  const resetAllValues = () => {
    setSpecialists(initialSpecialists);
    setTechnologies(initialTechnologies);
    setDuration('');
    setDomains('');
  };

  return (
    <Layout
      footerContent={footerContent}
      seoData={seoData}
      salesChannel={PagesToSalesChannels.DEDICATED_TEAM_CALCULATOR}
      breadcrumbs={breadcrumbs}
    >
      <Head>
        {ServiceJsonLd(seoData)}
      </Head>
      <DedicatedTeamCalculatorPageView
        specialists={specialists}
        resetSpecialistValue={resetSpecialistValue}
        changeSpecialistValue={changeSpecialistValue}
        changeTechnologyValue={changeTechnologyValue}
        resetTechnologyValue={resetTechnologyValue}
        duration={currentDuration}
        setDuration={setDuration}
        currentDomain={currentDomain}
        setDomains={setDomains}
        technologies={technologies}
        resetAllValues={resetAllValues}
      />
    </Layout>
  );
}

export async function getStaticProps() {
  const footerContent = await getFooterContent();
  const seoData = await getSeoData({ page: 'dedicated-team-calculator' });

  if (!seoData?.seoTitle) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      seoData,
      footerContent,
    },
  };
}

export default DedicatedTeamCalculatorPage;
