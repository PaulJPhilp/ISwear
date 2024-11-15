import type { Config } from './vendor/integration/utils/configBuilder';

const config: Config = {
  apps: {
    blog: {
      isEnabled: true,
      postsPerPage: 6,
      isRelatedPostsEnabled: true,
      relatedPostsCount: 3,
      post: {
        isEnabled: true,
        permalink: '/blog/%slug%',
        robots: {
          index: true,
          follow: true,
        },
      },
      list: {
        isEnabled: true,
        pathname: 'blog',
        robots: {
          index: true,
          follow: true,
        },
      },
      category: {
        isEnabled: true,
        pathname: 'category',
        robots: {
          index: true,
          follow: true,
        },
      },
      tag: {
        isEnabled: true,
        pathname: 'tag',
        robots: {
          index: true,
          follow: true,
        },
      },
    },
  },
};

export default config;
