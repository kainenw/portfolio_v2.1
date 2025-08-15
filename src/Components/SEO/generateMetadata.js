const generateMetadata = ({
  title,
  description,
  image,
  url,
  type = 'website',
  article = null,
}) => {
  const siteTitle = 'Kainen White | Product & UX Designer';
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const defaultDescription = 'The design portfolio of Kainen White, a product and UX designer creating user-centered digital experiences that drive business growth.';
  const pageDescription = description || defaultDescription;
  const defaultImage = 'https://kainenwhite.com/headshot.webp';
  const pageImage = image || defaultImage;
  const siteUrl = 'https://kainenwhite.com';
  const pageUrl = url ? `${siteUrl}${url}` : siteUrl;

  const metadata = {
    title: fullTitle,
    description: pageDescription,
    openGraph: {
      title: fullTitle,
      description: pageDescription,
      type,
      url: pageUrl,
      images: [{ url: pageImage, width: 1200, height: 630 }],
      siteName: 'Kainen White Portfolio'
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: pageDescription,
      images: [pageImage]
    },
    alternates: { canonical: pageUrl }
  };

  if (type === 'article' && article) {
    metadata.openGraph.publishedTime = article.datePublished;
    metadata.openGraph.modifiedTime = article.dateModified || article.datePublished;
    metadata.openGraph.authors = ['Kainen White'];
    if (article.tags) {
      metadata.openGraph.tags = article.tags;
    }
  }

  return metadata;
};

export default generateMetadata;
