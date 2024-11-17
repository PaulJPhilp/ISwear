export const SITE = {
  name: 'I Swear It Happened Like This',
  site: 'https://paulphilp.com',
  base: '/',
  trailingSlash: false,
};

export const BLOG = {
  disabled: false,
  postsPerPage: 4,
  
  list: {
    pathname: 'blog', // blog main path, you can change this to "articles" (/articles)
  },
  
  post: {
    permalink: 'blog/%slug%', // variables: %slug%
  },
  
  category: {
    pathname: 'category', // Category main path /category/some-category
  },
  
  tag: {
    pathname: 'tag', // Tag main path /tag/some-tag
  },
};
