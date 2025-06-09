import { StaticImageData } from 'next/image';

import ISeoData from '../../interfaces/ISeoData';
import IRatingData from '../../interfaces/IRatingData';
import PagesToSalesChannels from '../../constants/PageToSalesChannels';
import { IBreadcrumbsItem } from './IBreadcrumbs';
import { BreadcrumbsVariant, HeaderColorVariant } from '../../constants/enums';
import IFooterContent from 'interfaces/IFooterContent';

export default interface ILayout {
  children: React.ReactNode;
  seoData: ISeoData;
  ratingData?: IRatingData;
  showFooter?: boolean;
  salesChannel?: PagesToSalesChannels | string;
  fixHeader?: boolean,
  breadcrumbs?: IBreadcrumbsItem[],
  showNavigateButton?: boolean,
  layoutBackground?: StaticImageData,
  className?: string,
  isBlogsPage?: boolean,
  breadcrumbsVariant?: BreadcrumbsVariant,
  caseStudyLayout?: boolean,
  headerColorVariant?: HeaderColorVariant,
  footerContent?: IFooterContent,
  smoothScroll?: boolean,
  isBlockedIp?: boolean,
}
