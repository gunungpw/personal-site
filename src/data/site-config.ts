export type Image = {
  src: string;
  alt?: string;
  caption?: string;
};

export type Link = {
  text: string;
  href: string;
};

export type Hero = {
  title?: string;
  text?: string;
  image?: Image;
  actions?: Link[];
};

export type Subscribe = {
  title?: string;
  text?: string;
  formUrl: string;
};

export type SiteConfig = {
  logo?: Image;
  title: string;
  subtitle?: string;
  description: string;
  image?: Image;
  headerNavLinks?: Link[];
  footerNavLinks?: Link[];
  socialLinks?: Link[];
  hero?: Hero;
  subscribe?: Subscribe;
  postsPerPage?: number;
  projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
  title: 'Personal Journal',
  subtitle: 'Digital Archive',
  description: 'Gunung P.W Personal Notes',
  headerNavLinks: [
    {
      text: 'Home',
      href: '/'
    },
    // {
    //     text: 'Projects',
    //     href: '/projects'
    // },
    {
      text: 'Blog',
      href: '/blog'
    },
    {
      text: "Contact",
      href: "/contact"
    }
    // {
    //     text: 'Tags',
    //     href: '/tags'
    // }
  ],
  footerNavLinks: [
    // {
    //     text: 'About',
    //     href: '/about'
    // },
    // {
    //     text: 'Contact',
    //     href: '/contact'
    // },
  ],
  socialLinks: [
    {
      text: 'Github',
      href: 'https://github.com/gunungpw'
    },
    {
      text: 'Twitter',
      href: 'https://x.com/gunungpw'
    },
    {
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/gunungpw/'
    }
  ],
  hero: {
    title: 'Hi There',
    text: "I'm **Gunung Pambudi Wibisono**, a Mechanical Engineer and Software Developer.",
    // image: {
    //   src: '/hero.jpeg',
    //   alt: 'A person sitting at a desk in front of a computer'
    // },
    actions: [
      {
        text: 'Get in Touch',
        href: '/contact'
      }
    ]
  },
  postsPerPage: 8,
  projectsPerPage: 8
};

export default siteConfig;
