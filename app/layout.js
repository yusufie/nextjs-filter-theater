
import React from 'react'
import './globals.css'
import { Inter } from 'next/font/google'

import Header from './components/header/header'
import Navbar from './components/navbar/navbar'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Events',
  description: 'Events website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      
        <Header />
        <Navbar />

        {children}
      </body>
    </html>
  )
}
