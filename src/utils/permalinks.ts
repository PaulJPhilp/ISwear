import slugify from 'limax';
import { SITE, BLOG } from '~/site.config';
import { trim } from '~/utils/utils';

export const trimSlash = (s: string) => trim(trim(s, '/'));
const createPath = (...params: string[]) => {
  const paths = params
    .map((el) => trimSlash(el))
    .filter((el) => !!el)
    .join('/');
  return '/' + paths + (SITE.trailingSlash && paths ? '/' : '');
};

const BASE_PATHNAME = SITE.base || '/';

export const cleanSlug = (text = '') =>
  trimSlash(text)
    .split('/')
    .map((slug) => slugify(slug))
    .join('/');

export const BLOG_BASE = cleanSlug(BLOG.list.pathname);
export const CATEGORY_BASE = cleanSlug(BLOG.category.pathname);
export const TAG_BASE = cleanSlug(BLOG.tag.pathname);

export const POST_PERMALINK_PATTERN = trimSlash(BLOG.post.permalink || `${BLOG_BASE}/%slug%`);

/** Get the canonical URL */
export const getCanonical = (path = ''): string | URL => {
  const url = String(new URL(path, SITE.site));
  if (SITE.trailingSlash && path && url.endsWith('/') === false) {
    return url + '/';
  }
  return url;
};

/** Get permalink for a specific page */
export const getPermalink = (slug = '', type = 'page'): string => {
  let permalink: string;

  switch (type) {
    case 'category':
      permalink = createPath(CATEGORY_BASE, cleanSlug(slug));
      break;

    case 'tag':
      permalink = createPath(TAG_BASE, cleanSlug(slug));
      break;

    case 'post':
      permalink = createPath(POST_PERMALINK_PATTERN.replace('%slug%', cleanSlug(slug)));
      break;

    case 'page':
    default:
      permalink = createPath(cleanSlug(slug));
      break;
  }

  return definitivePermalink(permalink);
};

/** Get home permalink */
export const getHomePermalink = (): string => getPermalink('/');

/** Get blog permalink */
export const getBlogPermalink = (): string => getPermalink(BLOG_BASE);

/** Get asset URL */
export const getAsset = (path: string): string =>
  '/' +
  [BASE_PATHNAME, path]
    .map((el) => trimSlash(el))
    .filter((el) => !!el)
    .join('/');

/** Get definitive permalink */
export const definitivePermalink = (permalink: string): string => createPath(BASE_PATHNAME, permalink);

/** Apply getPermalink to menu items */
export const applyGetPermalinks = (menu: object = {}) => {
  const newMenu = structuredClone(menu);

  const applyToItem = (item: any) => {
    if (item.href) {
      item.href = getPermalink(item.href);
    }
    if (item.link) {
      item.link = getPermalink(item.link);
    }
    if (Array.isArray(item.items)) {
      item.items.forEach(applyToItem);
    }
  };

  Object.values(newMenu).forEach(applyToItem);

  return newMenu;
};
