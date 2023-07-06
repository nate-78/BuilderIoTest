"use client"

import Image from 'next/image'
import styles from './page.module.css'
import { builder, BuilderComponent } from '@builder.io/react'

builder.init('aec0025c19714040a9b33f7105687769');

export default function Home(props: any) {
  return (
    <main className={styles.main}>

      {props.content && 
        <div>Hero will go here</div>
      }

      <BuilderComponent model="home-hero" />

      <div className={styles.description}>
        <p>
          This is the Home Page.  We&apos;re using Builder.io to help us edit the other pages.
        </p>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
    </main>
  )
}
