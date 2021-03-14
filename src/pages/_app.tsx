import { AppProps } from 'next/app';
import '../styles/global.scss';
import Layout from '../components/Layout';

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

// I give up on this project, its basically all css and that just isn't that fun
