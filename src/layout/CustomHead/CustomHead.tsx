import Head from 'next/head';

import FaqJsonLd from '../../components/FaqJsonLd/FaqJsonLd';
import OrgJsonLd from '../../components/OrgJsonLd/OrgJsonLd';
import ProductJsonLd from 'components/ProductJsonLd/ProductJsonLd';
import { PATH_TO_BACKEND_IMAGES } from '../../constants/constants';
import ICustomHead from './interfaces/CustomHead';

function CustomHead({ seoData }: ICustomHead) {
  const {
    seoTitle,
    title,
    keywords,
    description,
    canonical,
    picture,
    faq,
  } = seoData;

  const lookupImage = picture ? `${PATH_TO_BACKEND_IMAGES}${picture}` : '/static/images/common/logo.jpg';

  return (
    <Head>
      <title>{seoTitle || title}</title>
      <meta
        charSet="UTF-8"
      />
      <meta
        name="viewport"
        key="viewport"
        content="width=device-width, initial-scale=1"
      />
      <meta
        name="google-site-verification"
        key="google-site-verification-first"
        content="pTk5_4nNlVqBymJC1qbH2iKQ3NhEVnlQ12WIWaV1QkE"
      />
      <meta
        name="google-site-verification"
        key="google-site-verification-second"
        content="MTm_3A9dhsiRA1IGEvP98vtyc2QMor7uh6mieS6v9QA"
      />
      <meta
        name="ahrefs-site-verification"
        key="ahrefs-site-verification"
        content="4211a4611d5846d927b0aba057dfdf285f37e23a73bd0ac79c966fc47f751161"
      />
      <meta
        name="csrf-param"
        key="csrf-param"
        content="_csrf"
      />
      <meta
        name="csrf-token"
        key="csrf-token"
        content="omTsgA7t6R4qz5I-XdnXkQWoFT-gZPw8HQFUjMQ06MDzBavhI5u5Shi53EkKg-_fN9lgfPUTi0UrexnfonC-rg=="
      />
      <meta
        name="keywords"
        key="keywords"
        content={keywords}
      />
      <meta
        name="description"
        key="description"
        content={description}
      />
      <meta
        name="og:title"
        key="og:title"
        property="og:title"
        content={seoTitle || title}
      />
      <meta
        name="og:type"
        key="og:type"
        property="og:type"
        content="website"
      />
      <meta
        name="og:image"
        key="image"
        property="og:image"
        content={lookupImage}
      />
      <meta
        name="og:description"
        key="og:description"
        property="og:description"
        content={description}
      />
      <meta
        name="og:url"
        key="og:url"
        property="og:url"
        content={canonical}
      />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@onix_technews" />
      <meta name="twitter:title" content={seoTitle || title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={lookupImage} />

      <link href={canonical} rel="canonical" key="canonical" />

      <link rel="shortcut icon" href="/static/icons/fav_onix.ico" type="image/x-icon" />
      <link rel="apple-touch-icon" href="/static/icons/onix_152.png" />
      <link rel="apple-touch-icon" sizes="57x57" href="/static/icons/onix_57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="/static/icons/onix_60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/static/icons/onix_72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/static/icons/onix_76.png" />
      <link rel="apple-touch-icon" sizes="114x114" href="/static/icons/onix_114.png" />
      <link rel="apple-touch-icon" sizes="120x120" href="/static/icons/onix_120.png" />
      <link rel="apple-touch-icon" sizes="144x144" href="/static/icons/onix_144.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="/static/icons/onix_152.png" />
      {OrgJsonLd()}
      {ProductJsonLd()}
      {faq && faq?.length && FaqJsonLd(faq)}
    </Head>
  );
}

export default CustomHead;
