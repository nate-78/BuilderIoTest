"use client"

import { Builder } from '@builder.io/react';
import AllArtists from '@/components/allArtists/allArtists';
import Card from '@/components/card/card';
import Cta from '@/components/cta/cta';

Builder.registerComponent(AllArtists, {
  name: 'All Artists'
});

Builder.registerComponent(Cta, {
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

Builder.registerComponent(Card, {
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