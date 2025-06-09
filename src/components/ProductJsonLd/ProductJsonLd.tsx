import { useRouter } from 'next/router';

import { PATH } from '../../constants/constants';

function ProductJsonLd() {
  const { asPath } = useRouter();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: 'Onix',
          url: `${PATH}${asPath !== '/' ? asPath : ''}`,
          brand: {
            '@type': 'Brand',
            name: 'Onix',
          },
          review: {
            '@type': 'Review',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5',
              bestRating: '5',
            },
            author: {
              '@type': 'Organization',
              name: 'Clutch',
              url: 'https://clutch.co/profile/onix-systems',
            },
          },
        }),
      }}
    />
  );
}

export default ProductJsonLd;
