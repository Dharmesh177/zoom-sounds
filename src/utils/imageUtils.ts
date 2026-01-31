/**
 * Converts an S3 key to a full CloudFront CDN URL.
 * If the key is already a full URL, returns it as-is.
 */
export function getImageUrl(key: string | undefined | null): string {
  if (!key) return '';
  
  // If already a full URL, return as-is
  if (key.startsWith('http://') || key.startsWith('https://')) {
    return key;
  }
  
  const cdnUrl = import.meta.env.VITE_CDN_DOMAIN_URL || '';
  // Ensure no double slashes
  const cleanKey = key.startsWith('/') ? key.slice(1) : key;
  return `${cdnUrl}/${cleanKey}`;
}
