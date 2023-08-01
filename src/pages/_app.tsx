export default function RootLayout({ Component, pageProps }) {
  return (
    <main>
      <Component {...pageProps} />
    </main>
  )
}
