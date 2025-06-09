import { IDevelopmentServicesTemplate } from 'components/DevelopmentServicesTemplate/interfaces/IDevelopmentServicesTemplate';

export type IDevelopmentServicesBlack = Omit<IDevelopmentServicesTemplate,
'background' | 'isMobile' | 'blackTheme' | 'accordionOnMobile' | 'backgroundWithAccordion'
>;
