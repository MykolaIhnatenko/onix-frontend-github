import { IDevelopmentServicesTemplate } from 'components/DevelopmentServicesTemplate/interfaces/IDevelopmentServicesTemplate';

export type IDevelopmentServicesWhite = Omit<IDevelopmentServicesTemplate, 'background' | 'isMobile' | 'blackTheme'>;
