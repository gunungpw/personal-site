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
  download?: boolean;
};

export type Hero = {
  title?: string;
  text?: string;
  image?: Image;
  actions?: Link[];
};

export type Highlight = {
  title: string;
  text: string;
};

export type Work = {
  title: string;
  meta: string;
  description: string;
  href?: string;
};

export type Homepage = {
  highlights: Highlight[];
  work: Work[];
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
  homepage?: Homepage;
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
    title: 'Mechanical engineer, tooling & software',
    text: "I work where tooling meets software: jigs, fixtures, and machining processes, plus the desktop and web tools that keep production moving. Mechanical Engineering graduate of Gadjah Mada University, currently a production engineer in West Java.",
    actions: [
      {
        text: 'Download CV (PDF)',
        href: '/resume.pdf',
        download: true
      },
      {
        text: 'Get in Touch',
        href: '/contact/'
      }
    ]
  },
  homepage: {
    highlights: [
      {
        title: 'Tooling & fixtures',
        text: 'Jig and fixture design, tool and die making, and tool-room control for mass-produced tractors, harvesters, and trucks.'
      },
      {
        title: 'Machining & quality',
        text: 'CNC milling and turning, precision measurement, root-cause analysis, and ISO 9001 / 45001 practice on the shop floor.'
      },
      {
        title: 'Production software',
        text: 'Python and web tools that generate CNC programs, plan daily work, and put production data where operators can use it.'
      }
    ],
    work: [
      {
        title: 'Tool Room Design and Implementation',
        meta: 'CV. Karya Hidup Sentosa',
        description:
          'Centralised tool room for cutting tools, holders, and equipment, improving asset tracking and production speed in the Tool Making B section.'
      },
      {
        title: 'Daily Work Plan System (RKH)',
        meta: 'CV. Karya Hidup Sentosa',
        description:
          'Planning and time-tracking system for operator activities, with weekly reporting to support performance monitoring.'
      },
      {
        title: 'CNC Blanking Desktop Application',
        meta: 'Python · Tkinter',
        description:
          'Generates CNC tool paths for blanking raw material to drawing specification, replacing manual program writing.',
        href: 'https://github.com/gunungpw/cnc-blanking'
      }
    ]
  }
};

export default siteConfig;
