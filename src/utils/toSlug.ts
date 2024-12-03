/**
 * Converts a string to a kebab-case slug
 * @param str The string to convert
 * @returns The kebab-case slug
 */
export const toSlug = (str: string): string => {
  return str
    .toLowerCase()
    .replace(/[']/g, '') // Remove apostrophes first
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
};
