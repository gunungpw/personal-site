export type Image = {
  src: string;
  alt?: string;
  caption?: string;
  width?: number;
  height?: number;
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

export type SiteConfig = {
  logo?: Image;
  title: string;
  subtitle?: string;
  description: string;
  email?: string;
  image?: Image;
  headerNavLinks?: Link[];
  footerNavLinks?: Link[];
  socialLinks?: Link[];
  hero?: Hero;
};

const siteConfig: SiteConfig = {
  title: 'Gunung Pambudi Wibisono',
  subtitle: 'gunungpw - personal site',
  description:
    'Mechanical engineer with experience in machining, jig and fixture design, and industrial equipment maintenance.',
  email: 'gunungpambudiw@gmail.com',
  image: {
    src: '/og.png',
    alt: 'Gunung Pambudi Wibisono — Mechanical Engineer',
    width: 1200,
    height: 630
  },
  headerNavLinks: [
    {
      text: 'Home',
      href: '/'
    },
    {
      text: 'Resume',
      href: '/resume/'
    },
    {
      text: 'Contact',
      href: '/contact/'
    }
  ],
  footerNavLinks: [],
  socialLinks: [
    {
      text: 'GitHub',
      href: 'https://github.com/gunungpw'
    },
    {
      text: 'X',
      href: 'https://x.com/gunungpw'
    },
    {
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/gunungpw/'
    }
  ],
  hero: {
    title: 'Hi There',
    text: "I am a Mechanical Engineering with experience and expertise in machining, jig and fixture design, measuring tools, materials engineering, robotics, and industrial equipment maintenance and inspection. Additionally, I possess competencies in desktop and web application programming, which support my ability to develop efficient and innovative technical solutions. With this background, I am ready to contribute professionally to engineering projects that require precision, creativity, and a technology-driven approach.",
    actions: [
      {
        text: 'Get in Touch',
        href: '/contact/'
      }
    ]
  }
};

export default siteConfig;
