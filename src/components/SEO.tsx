import { useSEO } from "@/hooks/useSEO";

interface SEOProps {
  title: string;
  description: string;
  canonical: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  schema?: object | object[];
}

export default function SEO(props: SEOProps) {
  useSEO(props);
  return null;
}
