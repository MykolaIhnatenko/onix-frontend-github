import { useEffect } from 'react';

import IAuthorData from './interfaces/IAuthorData';

function AuthorJsonLd({
  name, surname, photo, linkedin, email, job, url,
}: IAuthorData) {
  const image = photo || '';

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: `${name} ${surname}`,
      url: `https://onix-systems.com/author/${url}`,
      image: `https://cdn.onix-systems.com${image}`,
      sameAs: [email, linkedin],
      jobTitle: job,
      worksFor: {
        '@type': 'Organization',
        name: 'Onix',
      },
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [name, surname, photo, linkedin, email, job, url]);

  return null;
}

export default AuthorJsonLd;
