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
      url: '/moon.png',
      alt: 'The moon in a cloud'
    },
    slug: '/blog/first-post',
    title: 'The Moon',
    type: CloudType.NAV,
    parent: false,
    private: false,
    ref: createRef(),
  },
  {
    img: { 
      url: '/stars.png',
      alt: 'The stars in a cloud'
    },
    slug: '/the-stars',
    title: 'The Stars',
    type: CloudType.CONTENT,
    parent: false,
    private: false,
    ref: createRef(),
    content: <div><h1>This is the stars content page!</h1><sub>neat, right?</sub></div>
  },
  {
    img: { 
      url: '/twinkling.png',
      alt: 'Twinkling in a cloud'
    },
    slug: '/twinkling',
    title: 'Twinkling',
    type: CloudType.POST,
    parent: false,
    private: false,
    ref: createRef(),
    content: <div><h1>This is the twinkling post page!</h1><sub>Let&apos;s go!</sub></div>
  }
]