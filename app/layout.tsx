import './globals.css'
import { Inter } from 'next/font/google'
import { ohnoSoftie } from './fonts'
import Nav from './components/Nav'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Learn Ol Chiki',
  description: 'Learn the Ol Chiki script - the official writing system of the Santali language',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${ohnoSoftie.variable} antialiased`}>
        <div className="flex flex-col min-h-screen">
          <Nav />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
