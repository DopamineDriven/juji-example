import { FC, Fragment } from 'react';
import Link from 'next/link';
import css from './navbar-user.module.css';

interface NavbarUserButtonProps {
	className?: string;
}

interface UserNavbarFC extends FC<NavbarUserButtonProps> {}

const NavbarUserButton: UserNavbarFC = ({ className }) => {
	const classNameParent = className;
	return (
		<Fragment>
			<div className={classNameParent}>
				<ul className={css.ul}>
					<li className={css.liOne}>
						<Link href={'/about'} passHref>
							<a className={css.linkLogIn} aria-label={`link to Sign Up`}>
								Log In
							</a>
						</Link>
					</li>
					<li className={css.liTwo}>
						<Link href={'/'} passHref>
							<a className={css.linkSignUp} aria-label={`link to Sign Up`}>
								<p className={css.pStyle}>Sign Up</p>
							</a>
						</Link>
					</li>
				</ul>
			</div>
		</Fragment>
	);
};

export default NavbarUserButton;
