import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Domain Hijack Detector — Catch Registrar Search Hijacking',
  description: 'Monitor domain availability across registrars and detect when they register domains you searched for. Protect your domain ideas from search hijacking.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="14ee9c88-b3f5-4cd7-82b7-b27e300bc3fc"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
