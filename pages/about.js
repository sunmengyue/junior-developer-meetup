import Link from 'next/link';
import Layout from '../components/Layout';

export default function AboutPage() {
  return (
    <Layout title="About junior dev meeting" description="about this event">
      <h1>
        This is an app for self-taught developers to meetup and gain expierence
        in coding
      </h1>
      <p>Version: 1.0.0</p>
      <Link href="/">Home</Link>
    </Layout>
  );
}
