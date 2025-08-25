import React from 'react';

import getSeoData from '../../../src/api/getSeoData';
import getSingleCareer from '../../../src/api/getSingleCareer';
import { getBreadcrumbsData } from '../../../src/utils/helperHandlerPages';
import { TitlePages } from '../../../src/constants/enums';
import SingleCareerView from '../../../src/pages/SingleCareer/SingleCareerView';
import Layout from '../../../src/layout/Layout';
import PageToSalesChannels from '../../../src/constants/PageToSalesChannels';
import ISingleCareerPage from '../../../src/interfaces/ISingleCareerPage';
import { IBreadcrumbsItem } from '../../../src/layout/interfaces/IBreadcrumbs';
import { seoDataType } from '../../../src/constants/constants';
import getCareersLinks from '../../../src/api/getCareersLinks';
import getFooterContent from 'api/getFooterContent';

function SingleCareerPage({ seoData, footerContent, career }: ISingleCareerPage) {
  const singleCareerBreadCrumb = {
    id: 0,
    title: career?.attributes?.name,
    path: `/careers/${career?.attributes?.url}`,
  };
  const breadcrumbs:IBreadcrumbsItem[] = getBreadcrumbsData(TitlePages.ONIX, TitlePages.CAREER);

  return (
    <Layout
      footerContent={footerContent}
      seoData={seoData}
      salesChannel={PageToSalesChannels.CAREERS}
      breadcrumbs={[...breadcrumbs, singleCareerBreadCrumb]}
    >
      <SingleCareerView career={career} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const links = await getCareersLinks();
  const paths = links?.map((url) => ({ params: { career: url.toString() } }));

  return {
    paths,
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params: { career } }:{ params:{ career:string } }) {
  const careers = await getSingleCareer(career);
  if (!careers.length) return { notFound: true };
  const footerContent = await getFooterContent();
  const seoData = await getSeoData({ page: career, type: seoDataType.SINGLE_CAREER });

  if (!seoData?.seoTitle) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      seoData,
      footerContent,
      career: careers[0] || {},
    },
  };
}
export default SingleCareerPage;
