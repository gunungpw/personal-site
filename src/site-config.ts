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
  title: 'Gunung Pambudi Wibisono',
  subtitle: 'Digital Archive',
  description: 'Gunung P.W Personal Notes',
  headerNavLinks: [
    {
      text: 'Home',
      href: '/'
    },
    // {
    //   text: 'Projects',
    //   href: '/projects'
    // },
    {
      text: 'Resume',
      href: '/resume'
    },
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
    text: "I am a Mechanical Engineering graduate from Gadjah Mada University with experience and expertise in machining, jig and fixture design, measuring tools, materials engineering, robotics, and industrial equipment maintenance and inspection. Additionally, I possess competencies in desktop and web application programming, which support my ability to develop efficient and innovative technical solutions. With this background, I am ready to contribute professionally to engineering projects that require precision, creativity, and a technology-driven approach.",
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
  postsPerPage: 5,
  projectsPerPage: 5
};

export default siteConfig;
