import IFooterContent from 'interfaces/IFooterContent';
import PagesToSalesChannels from '../../constants/PageToSalesChannels';
import { BreadcrumbsVariant, HeaderColorVariant } from '../../constants/enums';
import { LatestBlogType } from '../../interfaces/IBlog';
import ISeoData from '../../interfaces/ISeoData';
import CombinedPage from '../../pages/CombinedPage/CombinedPage';
import Layout from '../Layout';
import { IBreadcrumbsItem } from '../interfaces/IBreadcrumbs';

interface ICaseStudiesLayout {
  seoData: ISeoData;
  salesChannel: PagesToSalesChannels | string;
  breadcrumbs: IBreadcrumbsItem[],
  pathname: string;
  latestBlogs: LatestBlogType[]
  headerColorVariant?: HeaderColorVariant;
  breadcrumbsVariant?: BreadcrumbsVariant;
  saleUrl?: boolean;
  footerContent?: IFooterContent;
}

function CaseStudiesLayout({
  seoData, breadcrumbs, pathname, latestBlogs, salesChannel,
  headerColorVariant, breadcrumbsVariant, saleUrl, footerContent,
}:ICaseStudiesLayout) {
  return (
    <Layout
      footerContent={footerContent}
      seoData={seoData}
      salesChannel={salesChannel}
      breadcrumbs={breadcrumbs}
      caseStudyLayout
      headerColorVariant={headerColorVariant}
      breadcrumbsVariant={breadcrumbsVariant}
    >
      <CombinedPage
        saleUrl={saleUrl}
        pathname={pathname}
        latestBlogs={latestBlogs}
      />
    </Layout>
  );
}

CaseStudiesLayout.defaultProps = {
  headerColorVariant: undefined,
  breadcrumbsVariant: undefined,
  saleUrl: false,
  footerContent: undefined,
};

export default CaseStudiesLayout;
