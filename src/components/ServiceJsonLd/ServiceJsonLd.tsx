import ISeoData from 'interfaces/ISeoData';

function ServiceJsonLd(seoData: ISeoData) {
  const {
    canonical,
    title,
    description,
    picture,
    createdAt,
    updatedAt,
  } = seoData;
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND as string;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Service',
          '@id': `${canonical || 'https://onix-systems.com'}/#schema`,
          name: title,
          description,
          offers: {
            '@type': 'Offer',
            availability: 'https://schema.org/InStock',
          },
          image: {
            '@type': 'ImageObject',
            '@id': `${backendUrl}${picture || 'https://onix-systems.com/static/images/common/logo.jpg'}`,
            url: `${backendUrl}${picture || 'https://onix-systems.com/static/images/common/logo.jpg'}`,
            width: 1200,
            height: 630,
            caption: 'ONIX preview',
            inLanguage: 'en-US',
          },
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `${canonical || 'https://onix-systems.com'}/#webpage`,
            url: canonical,
            name: title,
            datePublished: createdAt,
            dateModified: updatedAt,
            inLanguage: 'en-US',
            isPartOf: {
              '@type': 'WebSite',
              '@id': 'https://onix-systems.com/#website',
              url: 'https://onix-systems.com/',
              name: 'Offshore Software Development Company | Outsourcing Team - ONIX',
              inLanguage: 'en-US',
              publisher: {
                '@type': 'Organization',
                '@id': 'https://onix-systems.com/#organization',
                name: 'Offshore Software Development Company | Outsourcing Team - ONIX',
                url: 'https://onix-systems.com/',
                logo: {
                  '@type': 'ImageObject',
                  '@id': 'https://onix-systems.com/#logo',
                  url: 'https://onix-systems.com/static/images/common/logo.jpg',
                  contentUrl: 'https://onix-systems.com/static/images/common/logo.jpg',
                  caption: 'Offshore Software Development Company | Outsourcing Team - ONIX',
                  inLanguage: 'en-US',
                },
              },
            },
            primaryImageOfPage: {
              '@type': 'ImageObject',
              '@id': `${backendUrl}${picture || 'https://onix-systems.com/static/images/common/logo.jpg'}`,
              url: `${backendUrl}${picture || 'https://onix-systems.com/static/images/common/logo.jpg'}`,
              width: 1200,
              height: 630,
              caption: 'ONIX preview',
              inLanguage: 'en-US',
            },
          },
        }),
      }}
    />
  );
}

export default ServiceJsonLd;
