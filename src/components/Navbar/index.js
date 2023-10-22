import NavLogo from '@/components/Navbar/NavLogo';
import NavList from '@/components/Navbar/NavList';
import styles from '@/styles/Navbar.module.css';
import { useState } from 'react';
import { FaBars, FaUser, FaShoppingCart } from 'react-icons/fa';

const navLinks = [
	{
		component: 'Home',
		url: '/'
	},
	{
		component: 'Path',
		url: '/path'
	},
	{
		component: 'Interview',
		url: '/interview'
	},
	{
		component: 'Projects',
		url: '/projects'
	},
	{
		component: 'Blog',
		url: '/blog'
	},
	{
		component: 'Resource',
		url: '/resource'
	},
	{
		component: 'About',
		url: '/about'
	},
	{
		component: <FaUser />,
		url: '/login'
	},
	{
		component: <FaShoppingCart />,
		url: '/cart'
	}
];

const Navbar = () => {
	const [isNavListVisible, setIsNavListVisible] = useState(true);

	const toggleNavList = () => {
		setIsNavListVisible(!isNavListVisible);
	};

	return (
		<nav className={styles.navbar}>
			<div className={styles.navbarContainer}>
				<NavLogo />
				<NavList navLinks={navLinks} isVisible={isNavListVisible} />
				<div
					className={ styles.hamburger }
					onClick={toggleNavList}>
					<FaBars />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
