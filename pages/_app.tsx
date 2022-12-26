import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Page from '../components/Page/Page'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  )
}
