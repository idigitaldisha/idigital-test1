import Head from "next/head";
import { useRouter } from "next/router";


// Default value for some meta data
const defaultMeta = {
  title: 'i iDigitalDisha | Digital Marketing Service Agency in IndiaDigital Disha',
  siteName: 'iDigital Disha',
  description:
    'iDigitalDisha is a leading digital marketing agency in India, offering a wide range of services such as SEO, PPC, social media marketing, ORM and more to help businesses improve their online presence. Our team of experts delivers tailored solutions to meet your business goals. Contact us today to learn more.',
  // change base url of your web (without '/' at the end)
  url: 'https://idigitaldisha.com/',
  type: 'website',
  robots: 'follow, index',
  // change with url of your image (recommended dimension = 1.91:1)
  // used in twitter, facebook, etc. card when link copied in tweet/status 
  image: 'https://idigitaldisha.com/assets/newlogo2.png',
  author: 'Lorem Ipsum'
};

/**
 * Next Head component populated with necessary SEO tags and title
 * props field used:
 * - title
 * - siteName
 * - description
 * - url
 * - type
 * - robots
 * - image
 * - date
 * - author
 * - templateTitle
 * all field are optional (default value defined on defaultMeta)
 * @example
 * <SeoHead title="Page's Title" />
 */
const SeoHead = (props) => {
  const router = useRouter();
  const meta = {
    ...defaultMeta,
    ...props
  };

  // Use siteName if there is templateTitle
  // but show full title if there is none
  meta.title = props.templateTitle
    ? `${props.templateTitle} | ${meta.siteName}`
    : meta.title;
  {/* schema  */ }
  <script type="application/ld+json" class="aioseop-schema">



  </script>


  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@type": "WebSite",
    "@id": "https://idigitaldisha.com/#website",
    "url": "https://idigitaldisha.com/",
    "name": "iDigital Disha, India",
    "publisher": { "@id": "https://idigitaldisha.com/#organization" },
    "potentialAction": { "@type": "SearchAction", "target": "https://idigitaldisha.com/?s={search_term_string}", "query-input": "required name=search_term_string" },
    "@id": "https://idigitaldisha.com/#webpage",
    "url": "https://idigitaldisha.com/",
    "inLanguage": "en-US",
    "name": "Home",
    "isPartOf": { "@id": "https://idigitaldisha.com/#website" },
    "about": { "@id": "https://idigitaldisha.com//#organization" },
    "description": "iDigitalDisha is a leading digital marketing agency in India, offering a wide range of services such as SEO, PPC, social media marketing, ORM and more to help businesses improve their online presence. Our team of experts delivers tailored solutions to meet your business goals. Contact us today to learn more.",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://idigitaldisha.com/#organization",
        "url": "https://idigitaldisha.com/",
        "name": "iDigital Disha, India",
        "sameAs": []
      }
    ]
  }

  const Orgschema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "iDigital Disha",
    "url": "https://idigitaldisha.com/",
    "logo": "https://idigitaldisha.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnewlogo2.b4c12bbc.png&w=256&q=75",
    "sameAs": [
      "https://www.facebook.com/idigitaldisha",
      "https://www.instagram.com/idigitaldisha/",
      "https://www.linkedin.com/company/idigitaldisha/"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "408, 4th Avenue, Gaur City- 1",
      "addressLocality": "Greater Noida West",
      "addressRegion": "Uttar Pradesh",
      "postalCode": "201301",
      "addressCountry": "India"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "9971322654",
        "contactType": "Person",
        "email": "info@idigitaldisha.com",
        "areaServed": "IN",
        "availableLanguage": [
          "en",
          "hi"
        ]
      }
    ]
  }






  return (
    <Head>
      <title>{props.title}</title>
      <meta name='robots' content={meta.robots} />
      <meta content={meta.description} name='description' />
      <meta property='og:url' content={`${meta.url}${router.asPath}`} />
      <link rel='canonical' href={`${meta.url}${router.asPath}`} />
      {/* Open Graph */}
      <meta property='og:type' content={meta.type} />
      <meta property='og:site_name' content={meta.siteName} />
      <meta property='og:description' content={meta.description} />
      <meta property='og:title' content={meta.title} />
      <meta name='image' property='og:image' content={meta.image} />
      {/* Twitter */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@F2aldi' />
      <meta name='twitter:title' content={meta.title} />
      <meta name='twitter:description' content={meta.description} />
      <meta name='twitter:image' content={meta.image} />
      <script
        type="application/ld+json" class="aioseop-schema"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(Orgschema) }}
      />

      {
        meta.date && (
          <>
            <meta property='article:published_time' content={meta.date} />
            <meta
              name='publish_date'
              property='og:publish_date'
              content={meta.date}
            />
            <meta
              name='author'
              property='article:author'
              content={meta.author}
            />
          </>
        )
      }
      {/* Favicons */}
      {
        favicons.map((linkProps) => (
          <link key={linkProps.href} {...linkProps} />
        ))
      }
      {/* Windows 8 app icon */}
      <meta name='msapplication-TileColor' content='#F53838' />
      <meta
        name='msapplication-TileImage'
        content='/assets/newlogo2.png'
      />
      {/* Accent color on supported browser */}
      <meta name='theme-color' content='#F53838' />
    </Head >
  );
};

// Favicons, other icons, and manifest definition
const favicons = [
  {
    rel: 'apple-touch-icon',
    sizes: '57x57',
    href: '/assets/newlogo2.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '60x60',
    href: '/assets/newlogo2.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '72x72',
    href: '/assets/newlogo2.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '76x76',
    href: '/assets/newlogo2.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '114x114',
    href: '/assets/newlogo2.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '120x120',
    href: '/assets/newlogo2.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '144x144',
    href: '/assets/newlogo2.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '152x152',
    href: '/assets/newlogo2.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '180x180',
    href: '/assets/newlogo2.png',
  },
  {
    rel: 'mask-icon',
    href: '/assets/newlogo2.png',
    color: '#F59A9A',
  },
  {
    rel: 'icon',
    href: '/assets/newlogo2.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '16x16',
    href: '/assets/newlogo2.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '32x32',
    href: '/assets/newlogo2.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '96x96',
    href: '/assets/newlogo2.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '192x192',
    href: '/assets/newlogo2.png',
  },
  {
    rel: 'manifest',
    href: '/site.webmanifest',
  },
];

export default SeoHead;