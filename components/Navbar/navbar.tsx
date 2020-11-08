import { FC, Fragment } from 'react';
import Link from 'next/link';
import css from './navbar.module.css';
import JujiLogo from '../Logo/navbar-logo';
import NavbarUserButton from './navbar-user-buttons';

interface NavRef {
	href: string;
	label: string;
}

const links: NavRef[] = [
	{
		href: '/about',
		label: 'About'
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
			<li key={link.href} className={css.listItem}>
				<Link href={link.href} as={`${link.href}`} passHref key={link.label}>
					<a
						className={css.link}
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
			<div
				className={
					classNameParent +
					'bg-jujiHeaderAndIconGreen transform -translate-y-5 select-none'
				}
			>
				<div className={css.divChild}>
					<div className={css.divGrandChild}>
						<Link href='/'>
							<a className={css.logo} aria-label='logo link to home'>
								<JujiLogo
									width='5vw'
									height='5vw'
									classNameStroke={css.logoStroke}
									classNamePath={css.logoPath}
								/>
							</a>
						</Link>
						<nav className='space-x-4 mx-3 grid grid-cols-2 w-full min-w-full'>
							<ul className='col-span-1'>{navList}</ul>
							<div className='col-span-1 z-10'>
								<NavbarUserButton />
							</div>
						</nav>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Navbar;
