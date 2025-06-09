import { useRouter } from 'next/router';

import { PATH } from '../../constants/constants';

function OrgJsonLd() {
  const { asPath } = useRouter();
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          url: `${PATH}${asPath !== '/' ? asPath : ''}`,
          logo: 'https://onix-systems.com/static/images/common/logo.jpg',
          name: 'Onix',
          alternateName: 'Onix Systems',
          sameAs: [
            'https://www.facebook.com/OnixSystemsCompany',
            'https://www.instagram.com/onix_systems',
            'https://www.linkedin.com/company/onix-systems',
          ],
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '5',
            bestRating: '5',
            reviewCount: '10',
          },
        }),
      }}
    />
  );
}

export default OrgJsonLd;
