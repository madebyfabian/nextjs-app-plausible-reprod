import { AppProps } from 'next/app'
import PlausibleProvider from 'next-plausible'

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<PlausibleProvider domain="example.com" enabled={true}>
			<Component {...pageProps} />
		</PlausibleProvider>
	)
}
