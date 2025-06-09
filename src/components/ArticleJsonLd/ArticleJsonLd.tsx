import IArticleJsonLd from './interfaces/IArticleJsonLd';

function ArticleJsonLd({ attributes, articleType }: IArticleJsonLd) {
  const {
    executor, picture, blogTitle, createdAt, updatedAt,
    datePublication, keywords, canonical, ratingValue, ratingCount, publishedAt,
  } = attributes;
  const { name, surname, canonical: authorCanonical } = executor?.data?.attributes || {};
  const { url } = picture?.data?.attributes || {};
  const ratingValueDefault = (Math.random() * 0.4 + 4.5).toFixed(1);
  const ratingCountDefault = Math.floor(Math.random() * (100 - 4 + 1)) + 4;
  const date = new Date(datePublication || publishedAt);
  const isoDate = date.toISOString();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org/',
            '@type': articleType,
            headline: blogTitle,
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': canonical || 'https://onix-systems.com',
            },
            image: url,
            publisher: {
              '@type': 'Organization',
              name: 'Onix',
              logo: {
                '@type': 'ImageObject',
                url: 'https://onix-systems.com/static/images/common/logo.jpg',
              },
            },
            dateCreated: createdAt,
            dateModified: updatedAt,
            datePublished: isoDate,
            keywords,
            author: {
              '@type': 'Person',
              name: `${name || 'Onix'} ${surname || 'Systems'}`,
              url: authorCanonical || 'https://onix-systems.com',
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CreativeWorkSeries',
            name: blogTitle,
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: ratingValue || ratingValueDefault,
              bestRating: 5,
              ratingCount: ratingCount || ratingCountDefault,
            },
          }),
        }}
      />
    </>
  );
}

export default ArticleJsonLd;
