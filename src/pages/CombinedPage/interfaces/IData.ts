import { ReactElement } from 'react';

export interface IData {
  [key: string]: {
    stylesName: string;
    videoSectionContent: {
      id: number,
      title: string,
      description: string,
      className: string,
    }[],
    cards: {
      id: number,
      icon: string,
      content: string,
      bg: string,
    }[],
    responsibilityCards: {
      id: number,
      img: string,
      text: string,
    }[],
    technologyCards: {
      id: number,
      imgWidth: number,
      imgHeight: number,
      img: string,
    }[],
    videoSrc: string,
    images: {
      mainBackgroundMobile: {
        src: string,
        alt: string,
      },
      mainBackgroundTablet: {
        src: string,
        alt: string,
      },
      mainBackgroundDesktop: {
        src: string,
        alt: string,
      },
      videoIcon: {
        src: string,
        width: number,
        height: number,
        alt: string,
      },
      solutionsBg: {
        src: string,
        alt: string,
      },
      ourSolutionsDesktopBig: {
        src: string,
        alt: string,
      },
      ourSolutionsDesktop: {
        src: string,
        alt: string,
      },
      ourSolutionsTablet: {
        src: string,
        alt: string,
      },
      ourSolutionsMobile: {
        src: string,
        alt: string,
      },
      challengesImg: {
        src: string,
        width: number,
        height: number,
        alt: string,
      },
      resultsImgDesktop: {
        src: string,
        alt: string,
      },
      resultsImgMobile: {
        src: string,
        alt: string,
      },
    },
    content: {
      mainTitle: string | ReactElement,
      mainDescription: string,
      videoSection: {
        descriptionText: string,
        spanContent?: string,
        color: string,
        shadowColor: string,
        bgColor: string,
      },
      challengesSection: {
        description: ReactElement,
      },
      responsibilitySection: {
        title: string,
      },
      solutionSection: {
        title: string,
        salesChannel: string,
      },
      ourSolutionsSection: {
        description: ReactElement,
      },
      offerSection: {
        title: string,
        shadowColor: string,
        circleColor: string,
      },
      testimonialSection?: {
        description: ReactElement,
        author: ReactElement,
      },
      resultSection: {
        description: ReactElement,
      },
      latestBlogsComponent: {
        page: string,
        header: string,
        color?: string,
      },
      contactUsSection: {
        title: string,
        salesChannel: string,
      },
    },
  }
}
