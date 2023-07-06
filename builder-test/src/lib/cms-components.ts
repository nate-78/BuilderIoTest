"use client"

import { Builder } from '@builder.io/react';
// import AllArtists from '@/components/allArtists/allArtists';
// import Card from '@/components/card/card';
// import Cta from '@/components/cta/cta';
// import Button from '@/components/button/button';
import dynamic from 'next/dynamic';

Builder.registerComponent(dynamic(() => import('../components/allArtists/allArtists')), {
  name: 'All Artists'
});

Builder.registerComponent(dynamic(() => import('../components/button/button')), {
  name: 'Button',
  inputs: [
    {
      name: 'buttonLink', type: 'string',
    }, 
    {
      name: 'buttonText', type: 'string'
    }
  ]
})

Builder.registerComponent(dynamic(() => import('../components/cta/cta')), {
  name: 'CallToAction',
  inputs: [
    {
      name: 'title', type: 'string', defaultValue: 'CTA Headline'
    }, 
    {
      name: 'content', type: 'richText'
    },
    {
      name: 'image', type: 'file', allowedFileTypes: ['jpeg', 'png', 'mp4', 'gif', 'pdf', 'svg']
    },
    { name: 'callToActionLink', type: 'string', defaultValue: '/example' },
    { name: 'callToActionLinkText', type: 'string', defaultValue: 'Click' }
  ],
})

Builder.registerComponent(dynamic(() => import('../components/card/card')), {
  name: 'Info Card',
  inputs: [
    { name: 'title', type: 'string', defaultValue: 'This is the card\'s headline.' },
    {
      name: 'content',
      type: 'richText',
      defaultValue: 'This is the card\'s body.',
    },
  ],
});