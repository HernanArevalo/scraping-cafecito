import type { Metadata } from 'next'
import {  Kanit } from 'next/font/google'
import './globals.css'
import 'animate.css';


export const metadata: Metadata = {
  title: 'Cafecito Alert',
  description: 'Cafecito Alert',
}


const kanit = Kanit({ 
  weight: ['100','300','400', '500', '700', '800', '900'],
  subsets:['latin']
})


export default function RootLayout({children}: { children: React.ReactNode}) {

  return (
    <html lang="en">
      <body className={kanit.className}>
      {children}
      </body>
    </html>
  )
}
