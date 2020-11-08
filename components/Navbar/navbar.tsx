import { FC, Fragment } from 'react';
import Link from 'next/link';
import s from './navbar.module.css';
import NewlineLogo from '../Logo/navbar-logo';

interface NavRef {
	href: string;
	label: string;
}

const links: NavRef[] = [
	{
		href: '/',
		label: 'Home'
	},
	{
		href: '/about',
		label: 'About'
	},
	{
		href: '/books',
		label: 'Books'
	}
];
interface NavbarProps {
	className?: string;
}

interface NavBarFC extends FC<NavbarProps> {}

const Navbar: NavBarFC = ({ className }) => {
	const classNameParent = className;
	const navList = links.map(link => (
		<Fragment key={link.label}>
			<li key={link.href} className='inline-block mx-4'>
				<Link href={link.href} as={`${link.href}`} passHref key={link.label}>
					<a
						className={s.link}
						key={'/' + link.href}
						aria-label={`link to ${link.label}`}
					>
						{link.label}
					</a>
				</Link>
			</li>
		</Fragment>
	));
	return (
		<Fragment>
			<div className={classNameParent}>
				<div className='flex justify-between align-center text-black flex-row py-2 px-4 md:pb-6 relative'>
					<div className='flex flex-1 items-center'>
						<Link href='/'>
							<a className={s.logo} aria-label='logo link to home'>
								<NewlineLogo width='5vw' height='5vw' />
							</a>
						</Link>
						<nav className='space-x-4 mx-3 block'>
							<ul>{navList}</ul>
						</nav>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Navbar;
