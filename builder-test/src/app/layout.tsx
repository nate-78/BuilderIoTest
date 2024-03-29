import './globals.css'
import { Inter } from 'next/font/google'
import '../lib/cms-components'
import Header from '@/components/header/header'
import Footer from '@/components/footer/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="content">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
