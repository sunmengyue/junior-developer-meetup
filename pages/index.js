import Head from 'next/head';
import Layout from '@/components/Layout';
export default function Home() {
  return (
    <Layout>
      <Head>
        <title>junior's meeting</title>
        <meta
          name="description"
          content="welcome to junior developers' meeting"
        />
      </Head>
    </Layout>
  );
}
