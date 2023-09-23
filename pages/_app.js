import '@/styles/globals.css'

export default function App({ Component, pageProps }) {

  const getLayaout = Component.getLayaout || ((page) => page)

  // return <Component {...pageProps} />
  return getLayaout(<Component {...pageProps} />)
}
