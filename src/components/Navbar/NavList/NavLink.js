import Link from 'next/link';
import styles from '@/styles/Navbar.module.css';

const NavLink = ({ component, url }) => {
	return (
		<Link className={styles.navLink} href={url}>
			{component}
		</Link>
	);
};

export default NavLink;
