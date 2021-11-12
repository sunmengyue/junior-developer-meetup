import { useRouter } from 'next/router';
import Layout from '@/components/Layout';

export default function EventPage() {
  const router = useRouter();
  console.log(router);
  return <Layout>My Event</Layout>;
}
