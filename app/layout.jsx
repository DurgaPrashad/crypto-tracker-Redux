import { Providers } from "./providers"
import "./globals.css"

export const metadata = {
  title: "Crypto Price Tracker",
  description: "Real-time cryptocurrency price tracker",
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
