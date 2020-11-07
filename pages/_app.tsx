import 'styles/index.css';
import { AppProps, NextWebVitalsMetric } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '@lib/apollo';

function App({ Component, pageProps }: AppProps) {
	const apolloClient = useApollo(pageProps.initialApolloState);
	return (
		<ApolloProvider client={apolloClient}>
			<Component {...pageProps} />
		</ApolloProvider>
	);
}

export function reportWebVitals(metric: NextWebVitalsMetric) {
	console.debug(metric);
}

export default App;

/*
  // Expand on extending metric reports in a later module
  const { id, label, startTime, value, name } = metric;
  console.log('Metrics', [
    id,
    startTime,
    name,
    label,
    value
  ]);
*/
