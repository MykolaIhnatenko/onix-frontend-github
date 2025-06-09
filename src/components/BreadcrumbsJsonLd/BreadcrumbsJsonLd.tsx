import { IBreadcrumbsItem } from 'layout/interfaces/IBreadcrumbs';

function BreadcrumbsJsonLd(breadcrumbs: IBreadcrumbsItem[]) {
  const breadcrumbList = [...breadcrumbs].map((breadcrumb, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@id': `https://onix-systems.com${breadcrumb.path}`,
      name: breadcrumb.title,
    },
  }));

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          '@id': 'https://onix-systems.com/#breadcrumb',
          itemListElement: breadcrumbList,
        }),
      }}
    />
  );
}

export default BreadcrumbsJsonLd;
