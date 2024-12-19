import type { Metadata } from 'next'
import Header from './Components/Header'
import SideBar from './Components/Sidebar'

import './globals.css'

export const metadata: Metadata = {
  title: {
    default: "Pulse 🔥 Play",
    template: " %s | PulsePlay"
  },
  description: 'An amazing music streaming platform ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="favicon.svg" type="image/x-icon" />
      <body>
        <Header />
        <SideBar />
        {children}
      </body>
    </html>
  )
}