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
				<ul className='container relative grid grid-cols-2 justify-between w-full min-w-full transform translate-x-16'>
						<li className='inline-block mx-4 text-right col-span-1'>
							<Link href={'/about'} passHref>
								<a className={css.linkLogIn} aria-label={`link to Sign Up`}>
									Log In
								</a>
							</Link>
						</li>
						<li className='inline-block mx-4 text-left col-span-1'>
							<Link href={'/'} passHref>
								<a className={css.linkSignUp} aria-label={`link to Sign Up`}>
									<p className="mx-2 my-1">Sign Up</p>
								</a>
							</Link>
						</li>
					</ul>
			</div>
		</Fragment>
	);
};

export default NavbarUserButton;
