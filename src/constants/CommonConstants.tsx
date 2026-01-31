export const QUERY_TYPES = [
  "product_inquiry",
  "request_quotation",
  "technical_support",
  "installation_services",
  "warranty_service",
  "business_partnership",
  "feedback",
  "other",
];

export const QUERY_TYPE_LABELS: Record<string, string> = {
  product_inquiry: "Product Inquiry",
  request_quotation: "Request Quotation",
  technical_support: "Technical Support",
  installation_services: "Installation Services",
  warranty_service: "Warranty & Service",
  business_partnership: "Business Partnership",
  feedback: "Feedback",
  other: "Other",
};

export const CDN_BASE_URL = import.meta.env.VITE_CDN_DOMAIN_URL;
export const S3_BASE_URL = `${CDN_BASE_URL}/SiteImages`;
