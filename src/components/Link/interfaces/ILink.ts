export interface IHref {
  pathname: string,
  query: { salesChannel: string }
}

export default interface ILink {
  href: string | IHref;
  prefetch?: boolean;
  className?: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  rel?: string;
  ariaLabel?: string;
  children: React.ReactNode;
  absolute?: boolean;
  id?: string;
  sale?: boolean;
}
