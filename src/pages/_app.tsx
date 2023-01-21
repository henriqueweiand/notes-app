import { DocumentProvider } from '@/containers/DocumentsProvider'
import type { AppProps } from 'next/app'
import { globalStyles } from "../styles/global"

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DocumentProvider>
      <Component {...pageProps} />
    </DocumentProvider>
  )
}
