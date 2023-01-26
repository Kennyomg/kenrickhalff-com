import { createRef } from "react";
import { Cloud } from "../../types/common/interfaces";
import { CloudType } from "./enums";

export const clouds: Cloud[] = [
  {
    img: {
      url: '/Icons/AboutMe_v1.svg',
      alt: 'Picture of Kenrick Halff'
    },
    slug: '/about',
    title: 'About Me',
    type: CloudType.CONTENT,
    parent: false,
    private: false,
    ref: createRef()
  },
  {
    img: { 
      url: '/Icons/CV_v1.svg',
      alt: 'Resume'
    },
    slug: '/resume',
    title: 'Resume',
    type: CloudType.CONTENT,
    parent: false,
    private: false,
    ref: createRef(),
  },
  {
    img: { 
      url: '/Icons/CD_v1.svg',
      alt: 'Casual Development logo'
    },
    slug: '/casual-development',
    title: 'Casual Development',
    type: CloudType.CONTENT,
    parent: false,
    private: false,
    ref: createRef()
  },
  {
    img: { 
      url: '/Icons/Website_v1.svg',
      alt: 'Logaholic logo'
    },
    slug: '/blog/logaholic',
    title: 'Logaholic',
    type: CloudType.POST,
    parent: false,
    private: false,
    ref: createRef()
  },
  {
    img: { 
      url: '/Icons/Website_v1.svg',
      alt: 'Bizzmark logo'
    },
    slug: '/blog/bizzmark',
    title: 'Bizzmark',
    type: CloudType.POST,
    parent: false,
    private: false,
    ref: createRef()
  },
  {
    img: { 
      url: '/Icons/Website_v1.svg',
      alt: 'Jouw Omgeving logo'
    },
    slug: '/blog/jouw-omgeving',
    title: 'Jouw Omgeving',
    type: CloudType.POST,
    parent: false,
    private: false,
    ref: createRef()
  },
  {
    img: { 
      url: '/Icons/Website_v1.svg',
      alt: 'Comsys logo'
    },
    slug: '/blog/comsys',
    title: 'Comsys',
    type: CloudType.POST,
    parent: false,
    private: false,
    ref: createRef()
  },
  {
    img: { 
      url: '/Icons/Website_v1.svg',
      alt: 'Social Brothers logo'
    },
    slug: '/blog/social-brothers',
    title: 'Social Brothers',
    type: CloudType.POST,
    parent: false,
    private: false,
    ref: createRef()
  },
  {
    img: { 
      url: '/Icons/Website_v1.svg',
      alt: 'E-WISE logo'
    },
    slug: '/blog/e-wise',
    title: 'E-WISE',
    type: CloudType.POST,
    parent: false,
    private: false,
    ref: createRef()
  },
  {
    img: { 
      url: '/Icons/Games_v1.svg',
      alt: '2D Platformer'
    },
    slug: '/blog/2d-platformer-actionscript3',
    title: '2D Platformer',
    type: CloudType.POST,
    parent: false,
    private: false,
    ref: createRef()
  },
  {
    img: { 
      url: '/Icons/Games_v1.svg',
      alt: 'Claws of Shadow'
    },
    slug: '/blog/claws-of-shadow',
    title: 'Claws of Shadow',
    type: CloudType.POST,
    parent: false,
    private: false,
    ref: createRef()
  },
  {
    img: { 
      url: '/Icons/Games_v1.svg',
      alt: 'Fairwinds'
    },
    slug: '/blog/fairwinds',
    title: 'Fairwinds',
    type: CloudType.POST,
    parent: false,
    private: false,
    ref: createRef()
  },
  {
    img: { 
      url: '/Icons/Games_v1.svg',
      alt: 'Game Engine'
    },
    slug: '/blog/3d-game-engine',
    title: 'Game Engine',
    type: CloudType.POST,
    parent: false,
    private: false,
    ref: createRef()
  },
  {
    img: { 
      url: '/Icons/Website_v1.svg',
      alt: 'Kennick Games'
    },
    slug: '/blog/kennick-games',
    title: 'Kennick Games',
    type: CloudType.POST,
    parent: false,
    private: false,
    ref: createRef()
  },
  {
    img: { 
      url: '/Icons/Games_v1.svg',
      alt: 'CatRPG'
    },
    slug: '/blog/catrpg',
    title: 'CatRPG',
    type: CloudType.POST,
    parent: false,
    private: false,
    ref: createRef()
  },
  {
    img: { 
      url: '/Icons/Games_v1.svg',
      alt: 'Protect The Bees'
    },
    slug: '/blog/protect-the-bees',
    title: 'Protect The Bees',
    type: CloudType.POST,
    parent: false,
    private: false,
    ref: createRef()
  },
  {
    img: { 
      url: '/Icons/Games_v1.svg',
      alt: 'Corona Shopper'
    },
    slug: '/blog/corona-shopper',
    title: 'Corona Shopper',
    type: CloudType.POST,
    parent: false,
    private: false,
    ref: createRef()
  },
  {
    img: { 
      url: '/Icons/Apps_v1.svg',
      alt: 'Casual Happiness'
    },
    slug: '/blog/casual-happiness',
    title: 'Casual Happiness',
    type: CloudType.POST,
    parent: false,
    private: false,
    ref: createRef()
  }
]