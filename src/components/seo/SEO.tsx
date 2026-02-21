import Head from 'next/head';
import { useRouter } from 'next/router';

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  article?: boolean;
  noindex?: boolean;
}

const siteConfig = {
  name: 'GET for Digital Solutions',
  url: 'https://getfordigital.com',
  defaultImage: '/images/og-image.png',
  twitterHandle: '@getfordigital',
};

export const SEO = ({ 
  title, 
  description, 
  image = siteConfig.defaultImage,
  article = false,
  noindex = false,
}: SEOProps) => {
  const router = useRouter();
  const fullUrl = `${siteConfig.url}${router.asPath}`;
  const fullImageUrl = image.startsWith('http') ? image : `${siteConfig.url}${image}`;
  
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title} | {siteConfig.name}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Open Graph */}
      <meta property="og:type" content={article ? 'article' : 'website'} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:site_name" content={siteConfig.name} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={fullImageUrl} />
      <meta property="twitter:site" content={siteConfig.twitterHandle} />
      
      {/* Canonical */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      
      {/* Theme Color */}
      <meta name="theme-color" content="#0A0A0A" />
    </Head>
  );
};

export default SEO;
