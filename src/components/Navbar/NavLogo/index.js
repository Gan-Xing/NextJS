import Link from 'next/link';
import Image from 'next/image';
import LogoSvg from '@/public/logo.svg';
import styles from '@/styles/Navbar.module.css';

const NavLogo = () => {
	return (
		<div className={styles.navLogo}>
			<Link href='/' passHref>
				<Image src={LogoSvg} alt='Logo' width={120} height={40} />
			</Link>
		</div>
	);
};

export default NavLogo;
