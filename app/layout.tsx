import './globals.css'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: 'CineCritic - Review de filmes.',
  description: 'Em desenvolvimento(Clone)',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        {children}
        </body>
    </html>
  )
}
