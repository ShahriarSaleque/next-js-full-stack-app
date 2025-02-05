import { ReactNode } from 'react';
import '../styles/globals.css';
import Nav from '@components/Nav';

// needed for SEO optimization
export const metadata = {
  label: "Next js app",
  description: "Full stack next js app",
}


const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>

        

        <main className="app">
          <Nav />
          {children}
          </main>
      </body>
    </html>
  )
}

export default RootLayout
