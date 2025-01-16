import Head from 'next/head'

export default function RootLayout({ children }) {
  return (
    <html>
      <Head>
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://codelabarchive.vercel.app" />
        <meta property="og:title" content="Codelab Archives" />
        <meta property="og:description" content="Archive of Codelab Davis projects and resources" />
        <meta property="og:image" content="https://codelabarchive.vercel.app/static/images/social-banner.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://codelabarchive.vercel.app" />
        <meta name="twitter:title" content="Codelab Archives" />
        <meta name="twitter:description" content="Archive of Codelab Davis projects and resources" />
        <meta name="twitter:image" content="https://codelabarchive.vercel.app/static/images/social-banner.png" />
      </Head>
      {children}
    </html>
  )
} 