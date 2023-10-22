import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Content from '@/components/Content';
import Footer from '@/components/Footer';
import styles from '@/styles/Home.module.css';

const Home = () => {
	return (
		<>
			<Head>
				<title>My Website</title>
				<meta name='description' content='Welcome to my website' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<div className={styles.container}>
				<Navbar />
				<Content />
				<Footer />
			</div>
		</>
	);
};

export default Home;
