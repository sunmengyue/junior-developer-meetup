import Link from 'next/link';
import Layout from '@/components/Layout';
import styles from '@/styles/404.module.css';
import { FaExclamationTriangle } from 'react-icons/fa';

export default function NotFoundPage() {
  return (
    <Layout title="Page not found">
      <div className={styles.error}>
        <h1>
          <FaExclamationTriangle />
          <span>404</span>
        </h1>
        <h4>Sorry, there is nothing here</h4>
        <Link href="/">Go back home</Link>
      </div>
    </Layout>
  );
}
