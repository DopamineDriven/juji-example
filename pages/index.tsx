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

	const Landing = () => (
		<div className='block mx-auto font-somaRoman min-w-full w-full pl-5'>
			You're signed in as {name} and you're {status} go to the{' '}
			<Link href='/about'>
				<a className=' text-tailwindBlue'>About</a>
			</Link>{' '}
			page.
		</div>
	);

	const Nav = () => (
		<div className='flex mx-5 my-5 min-w-full w-full'>
			<Navbar className='min-w-full w-full border-b-2 border-afWhite -mx-5 bg-jujiHeaderAndIconGreen z-10' />
		</div>
	);

	return (
		<Fragment>
			<Meta />
			<Head>
				<title>Juji Example</title>
			</Head>
			<Nav />
			<Landing />
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
		},
		revalidate: 10
	};
};

export default Index;
