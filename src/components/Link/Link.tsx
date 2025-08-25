import Link from 'next/link';

import ILink from './interfaces/ILink';

function LinkComponent({
  href,
  prefetch = false,
  className = '',
  target = '_self',
  rel = '',
  ariaLabel = '',
  children,
  absolute = true,
  id,
  sale = false,
}: ILink) {
  const basePath = sale
    ? process.env.NEXT_PUBLIC_BASE_SALE_URL ?? ''
    : process.env.NEXT_PUBLIC_BASE_URL ?? '';

  const getHref = () => {
    let path = href;
    if (absolute && typeof href !== 'string') {
      const pathname = Object.values(href)[0] as string;
      const query = Object.values(href)[1] as { salesChannel: string };
      const { salesChannel } = query;
      const replacedSalesChannel = salesChannel.replace(/\s+/g, '+');
      path = `${basePath}${pathname}?salesChannel=${replacedSalesChannel}`;
    }
    if (absolute && typeof href === 'string') {
      path = `${basePath}${href}`;
    }

    return path;
  };

  return (
    <Link
      id={id}
      href={getHref()}
      prefetch={prefetch}
      className={className}
      target={target}
      rel={rel}
      aria-label={ariaLabel}
      draggable="false"
    >
      {children}
    </Link>
  );
}

export default LinkComponent;
