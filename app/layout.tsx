import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/app/components/Navbar'


const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">   
      <body className={inter.className}>
        <main className="bg-gray-100 min-h-screen w-screen">
          <div className="max-w-screen-2xl m-auto bg-white">
            <Navbar />
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
