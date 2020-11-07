import 'styles/index.css';
import { AppProps, NextWebVitalsMetric } from 'next/app';

function App({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
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
