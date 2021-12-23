import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  const meta = pageProps.fontMatter
  return <Layout meta={meta}><Component {...pageProps} /></Layout>
}

export default MyApp
