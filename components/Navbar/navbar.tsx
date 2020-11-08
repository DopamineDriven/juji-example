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
		label: 'About Juji'
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
						<nav className={css.nav}>
							<ul className={css.ul}>{navList}</ul>
							<div className={css.divGreatGrandChild}>
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
