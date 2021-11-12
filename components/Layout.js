import Head from 'next/head';
import styles from '../styles/Layout.module.css';

export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
      </Head>
      <div className={styles.container}>{children}</div>
    </div>
  );
}

Layout.defaultProps = {
  title: "junior devleopers' meeting",
  description:
    'meet with people who are also self-taught developers, get guidance, coding experience, and even job opportunities',
  keywords: 'codenewby, junior developer',
};
