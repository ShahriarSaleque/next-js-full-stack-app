import { ReactNode } from 'react';
import '../styles/globals.css';

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

        <main className="app">{children}</main>
      </body>
    </html>
  )
}

export default RootLayout
