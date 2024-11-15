import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Interests',
      links: [
        {
          text: 'Effect',
          href: getPermalink('/homes/effect'),
        },
        {
          text: 'Patterns',
          href: getPermalink('/homes/patterns'),
        },
        {
          text: 'Music',
          href: getPermalink('/homes/music'),
        },
      ],
    },
    {
      text: 'Paul',
      links: [
        {
          text: 'Services',
          href: getPermalink('/services'),
        },
        {
          text: 'About Paul',
          href: getPermalink('/about'),
        },
        {
          text: 'Contact',
          href: getPermalink('/contact'),
        }
      ],
    },

    {
      text: 'Blog',
      links: [
        {
          text: 'Blog',
          href: getBlogPermalink(),
        }
      ],
    },
  ]
};

export const footerData = {
  links: [


  ],
  secondaryLinks: [

  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ]
};