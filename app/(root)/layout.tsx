import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import ClientOnly from '@/components/ClientOnly';
import OfferBar from '@/components/OfferBar';
import NavBar from '@/components/NavBar';

import '../globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SHOP.CO',
  description: 'Shop Latest Fashions.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientOnly>
          <OfferBar/>
          <NavBar/>
          {children}
        </ClientOnly>      
      </body>
    </html>
  )
}
