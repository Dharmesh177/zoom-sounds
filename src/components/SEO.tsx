import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogType?: string;
  ogImage?: string;
  structuredData?: object;
}

const SEO = ({
  title = "ZS India (ZSIndia) | Zoom Sounds – Premium Audio Systems Manufacturer",
  description = "ZS India (also known as ZSIndia and Zoom Sounds) is a leading professional audio systems manufacturer in Surat, Gujarat with 20+ years expertise. Premium sound equipment, DJ systems, home theaters & professional audio solutions.",
  keywords = "ZS India, zs india, ZSIndia, zsindia, Zoom Sounds, zoomsound, ZSAcoustics, ZS Acoustics, zsacoustics, sound manufacturer surat, audio systems manufacturer gujarat",
  canonicalUrl = "https://www.zsindia.com/",
  ogType = "website",
  ogImage = "https://zsindia.s3.us-east-1.amazonaws.com/SiteImages/zsindia-logo.png",
  structuredData,
}: SEOProps) => {
  useEffect(() => {
    document.title = title;

    const metaTags = [
      { name: 'description', content: description },
      { name: 'keywords', content: keywords },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:type', content: ogType },
      { property: 'og:url', content: canonicalUrl },
      { property: 'og:image', content: ogImage },
      { property: 'twitter:title', content: title },
      { property: 'twitter:description', content: description },
      { property: 'twitter:image', content: ogImage },
    ];

    metaTags.forEach(({ name, property, content }) => {
      const attribute = name ? 'name' : 'property';
      const value = name || property;
      let element = document.querySelector(`meta[${attribute}="${value}"]`);

      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, value!);
        document.head.appendChild(element);
      }

      element.setAttribute('content', content);
    });

    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', canonicalUrl);

    if (structuredData) {
      const scriptId = 'structured-data-page';
      let script = document.getElementById(scriptId);

      if (!script) {
        script = document.createElement('script');
        script.id = scriptId;
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }

      script.textContent = JSON.stringify(structuredData);
    }
  }, [title, description, keywords, canonicalUrl, ogType, ogImage, structuredData]);

  return null;
};

export default SEO;
