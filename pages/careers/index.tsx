import React, { useEffect, useState } from 'react';

import getSeoData from '../../src/api/getSeoData';
import getCareerList from '../../src/api/getCareerList';
import { getBreadcrumbsData } from '../../src/utils/helperHundlerPages';
import CareersView from '../../src/pages/Careers/CareersView';
import Layout from '../../src/layout/Layout';
import PageToSalesChannels from '../../src/constants/PageToSalesChannels';
import { IBreadcrumbsItem } from '../../src/layout/interfaces/IBreadcrumbs';
import { TitlePages } from '../../src/constants/enums';
import ICareerPage from '../../src/interfaces/ICareerPage';
import ICareer from '../../src/interfaces/ICareer';
import { ICareerDepartment } from '../../src/pages/Careers/interfaces/ICareerDepartment';
import getDepartments from '../../src/api/getDepartments';
import getFooterContent from 'api/getFooterContent';

function CareersPage({
  seoData, careerList, departments, hotJobs, footerContent,
}: ICareerPage) {
  const breadcrumbs:IBreadcrumbsItem[] = getBreadcrumbsData(TitlePages.ONIX, TitlePages.CAREER);
  const [chosenDepartment, setChosenDepartment] = useState<ICareerDepartment>({ value: 'all', label: 'All' });
  const [filteredCareers, setFilteredCareers] = useState<ICareer[]>(careerList);

  const departmentList: ICareerDepartment[] = departments?.data?.map((department) => ({
    value: department?.attributes?.name,
    label: `${department?.attributes?.name} [${department?.attributes?.careers?.data?.length}]`,
  })) || [];

  departmentList.unshift({ value: 'all', label: `SEE All [${careerList.length}]` });

  useEffect(() => {
    setFilteredCareers(
      chosenDepartment.value === 'all'
        ? careerList
        : careerList.filter(({
          attributes: {
            departmentType: {
              data,
            },
          },
        }) => data?.attributes?.name === chosenDepartment.value),
    );
  }, [setFilteredCareers, chosenDepartment, careerList]);

  return (
    <Layout
      footerContent={footerContent}
      seoData={seoData}
      salesChannel={PageToSalesChannels.CAREERS}
      breadcrumbs={breadcrumbs}
    >
      <CareersView
        careerList={filteredCareers}
        departmentList={departmentList}
        chosenDepartment={chosenDepartment}
        setChosenDepartment={setChosenDepartment}
        hotJobs={hotJobs}
      />
    </Layout>
  );
}

export async function getStaticProps() {
  const footerContent = await getFooterContent();
  const seoData = await getSeoData({ page: 'careers' });

  if (!seoData?.seoTitle) {
    return {
      notFound: true,
    };
  }

  const careerList = await getCareerList();
  const departments = await getDepartments();
  const hotJobs = careerList.length > 0 ? careerList.filter((el) => el?.attributes?.hotJob) : [];

  return {
    props: {
      seoData,
      footerContent,
      careerList,
      departments,
      hotJobs,
    },
  };
}

export default CareersPage;
