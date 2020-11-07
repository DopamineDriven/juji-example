import { Fragment } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useViewerQuery, ViewerDocument } from '../lib/viewer.graphql';
import { initializeApollo } from '../lib/apollo';
import { Meta, Navbar } from '../components/index';
import { GetStaticProps } from 'next';

const Index = () => {
	const { viewer } = useViewerQuery().data!;
	const { name, status } = viewer;
	return (
		<Fragment>
			<Meta />
			<Head>
				<title>Juji Example</title>
			</Head>
			<div className='flex mx-5 my-5 min-w-full w-full'>
				<Navbar className='min-w-full w-full border-b-2 -mx-5' />
			</div>
			<div className='block mx-auto font-somaRoman min-w-full w-full'>
				You're signed in as {name} and you're {status} go to the{' '}
				<Link href='/about'>
					<a>about</a>
				</Link>{' '}
				page.
			</div>
		</Fragment>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const apolloClient = initializeApollo();

	await apolloClient.query({
		query: ViewerDocument
	});

	return {
		props: {
			initialApolloState: apolloClient.cache.extract()
		}
	};
};

export default Index;
