export const SITE = {
  name: 'I Swear It Happened Just Like This',
  site: 'https://paulphilp.com',
  base: '/',
  trailingSlash: false,
};

export const BLOG = {
  disabled: false,
  postsPerPage: 4,
  
  list: {
    pathname: 'post', // blog main path
  },
  
  post: {
    permalink: 'post/%slug%', // variables: %slug%
  },
  
  category: {
    pathname: 'category', // Category main path /category/some-category
  },
  
  tag: {
    pathname: 'tag', // Tag main path /tag/some-tag
  },
};
