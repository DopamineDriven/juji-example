import Link from 'next/link';
import { Fragment } from 'react';
import Head from 'next/head';
import { Meta, Navbar } from '@components/index';

export default function About() {
	const Welcome = () => (
		<div className='block mx-auto font-somaRoman min-w-full w-full pl-5'>
			Welcome to the about page. Go to the{' '}
			<Link href='/'>
				<a className=' text-tailwindBlue'>Home</a>
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
				<title>Juji About</title>
			</Head>
			<Nav />
			<Welcome />
		</Fragment>
	);
}
