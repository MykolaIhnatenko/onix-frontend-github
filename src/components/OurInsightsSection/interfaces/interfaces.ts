import { StaticImageData } from 'next/image';
import { ReactNode } from 'react';

import { IPageBlogs } from '../../../interfaces/IPages';

export interface IOurInsightBlog {
  id: number;
  link: string;
  title?: string;
  picture: StaticImageData | string;
}

export interface IOurInsightsBlogs {
  blogs?: IOurInsightBlog[];
  classes?: {
    blogTitle?: string;
  };
}

export interface IOurInsights extends IPageBlogs {
  title?: ReactNode | string;
  text?: string;
  classes?: {
    section?: string;
    title?: string;
    text?: string;
  } & IOurInsightsBlogs['classes'];
}
