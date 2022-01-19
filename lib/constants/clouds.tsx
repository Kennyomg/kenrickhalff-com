import { createRef } from "react";
import { Cloud } from "../../types/common/interfaces";
import { CloudType } from "./enums";

export const clouds: Cloud[] = [
  {
    img: {
      url: '/kenrick.png',
      alt: 'Picture of Kenrick Halff'
    },
    slug: '/about',
    title: 'About Kenrick',
    type: CloudType.CONTENT,
    parent: false,
    private: false,
    ref: createRef()
  },
  {
    img: { 
      url: '/resume.png',
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
      url: '/casual-development.png',
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
      url: '/logaholic.png',
      alt: 'Logaholic logo'
    },
    slug: '/blog/logaholic',
    title: 'Logaholic - Work XP',
    type: CloudType.POST,
    parent: false,
    private: false,
    ref: createRef()
  },
  {
    img: { 
      url: '/bizzmark.png',
      alt: 'Bizzmark logo'
    },
    slug: '/blog/bizzmark',
    title: 'Bizzmark - Work XP',
    type: CloudType.POST,
    parent: false,
    private: false,
    ref: createRef()
  },
  {
    img: { 
      url: '/jouw-omgeving.png',
      alt: 'Jouw Omgeving logo'
    },
    slug: '/blog/jouw-omgeving',
    title: 'Jouw Omgeving - Work XP',
    type: CloudType.POST,
    parent: false,
    private: false,
    ref: createRef()
  },
  {
    img: { 
      url: '/comsys.png',
      alt: 'Comsys logo'
    },
    slug: '/blog/comsys',
    title: 'Comsys - Work XP',
    type: CloudType.POST,
    parent: false,
    private: false,
    ref: createRef()
  },
  {
    img: { 
      url: '/social-brothers.png',
      alt: 'Social Brothers logo'
    },
    slug: '/blog/social-brothers',
    title: 'Social Brothers - Work XP',
    type: CloudType.POST,
    parent: false,
    private: false,
    ref: createRef()
  },
  {
    img: { 
      url: '/2d-platformer.png',
      alt: '2D Platformer'
    },
    slug: '/blog/2d-platformer-actionscript3',
    title: '2D Platformer - Game',
    type: CloudType.POST,
    parent: false,
    private: false,
    ref: createRef()
  },
  {
    img: { 
      url: '/claws-of-shadow.png',
      alt: 'Claws of Shadow'
    },
    slug: '/blog/claws-of-shadow',
    title: 'Claws of Shadow - Game',
    type: CloudType.POST,
    parent: false,
    private: false,
    ref: createRef()
  },
  {
    img: { 
      url: '/fairwinds.png',
      alt: 'Fairwinds'
    },
    slug: '/blog/fairwinds',
    title: 'Fairwinds - Game',
    type: CloudType.POST,
    parent: false,
    private: false,
    ref: createRef()
  },
  {
    img: { 
      url: '/3d-game-engine.png',
      alt: '3D Game Engine'
    },
    slug: '/blog/3d-game-engine',
    title: '3D Game Engine',
    type: CloudType.POST,
    parent: false,
    private: false,
    ref: createRef()
  },
  {
    img: { 
      url: '/kennick-games.png',
      alt: 'Kennick Games'
    },
    slug: '/blog/kennick-games',
    title: 'Kennick Games - Website',
    type: CloudType.POST,
    parent: false,
    private: false,
    ref: createRef()
  },
  {
    img: { 
      url: '/catrpg.png',
      alt: 'CatRPG'
    },
    slug: '/blog/catrpg',
    title: 'CatRPG - Game/Tech Demo',
    type: CloudType.POST,
    parent: false,
    private: false,
    ref: createRef()
  },
  {
    img: { 
      url: '/protect-the-bees.png',
      alt: 'Protect The Bees'
    },
    slug: '/blog/protect-the-bees',
    title: 'Protect The Bees - Game',
    type: CloudType.POST,
    parent: false,
    private: false,
    ref: createRef()
  },
  {
    img: { 
      url: '/corona-shopper.png',
      alt: 'Corona Shopper'
    },
    slug: '/blog/corona-shopper',
    title: 'Corona Shopper - Game',
    type: CloudType.POST,
    parent: false,
    private: false,
    ref: createRef()
  },
  {
    img: { 
      url: '/casual-happiness.png',
      alt: 'Casual Happiness'
    },
    slug: '/blog/casual-happiness',
    title: 'Casual Happiness - WebApp',
    type: CloudType.POST,
    parent: false,
    private: false,
    ref: createRef()
  }
]