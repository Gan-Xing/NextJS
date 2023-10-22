import NavLink from './NavLink';
import styles from '@/styles/Navbar.module.css';

const NavList = ({ navLinks, isVisible }) => {
	return (
		<div
			className={`${styles.navList} ${
				isVisible ? styles.showNavList : styles.hideNavList
			}`}>
			{navLinks.map((link) => (
				<NavLink
					key={link.url}
					component={link.component}
					url={link.url}
				/>
			))}
		</div>
	);
};

export default NavList;
