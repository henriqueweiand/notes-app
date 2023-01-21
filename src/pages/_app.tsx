import { TopicProvider } from '@/containers/TopicsProvider'
import type { AppProps } from 'next/app'
import { globalStyles } from "../styles/global"

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <TopicProvider>
      <Component {...pageProps} />
    </TopicProvider>
  )
}
