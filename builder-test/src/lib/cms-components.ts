"use client"

import { Builder } from '@builder.io/react';
import AllArtists from '@/components/allArtists/allArtists';
import Card from '@/components/card/card';

Builder.registerComponent(AllArtists, {
  name: 'All Artists'
});

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