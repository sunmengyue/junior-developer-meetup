import qs from 'qs';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Layout from '@/components/Layout';
import { API_URL } from '@/config/index';
import EventItem from '@/components/EventItem';

export default function SearchPage({ events }) {
  const router = useRouter();

  return (
    <Layout title={`Search Results for ${router.query.term}`}>
      <Link href="/"> ← Go Back</Link>
      <h1>Search Results</h1>
      {events.length === 0 ? (
        <h3>No events to show</h3>
      ) : (
        events.map((evt) => <EventItem evt={evt} key={evt.id} />)
      )}
    </Layout>
  );
}

export async function getServerSideProps({ query: { term } }) {
  const query = qs.stringify({
    _where: {
      _or: [
        { name_contains: term },
        { hosts_contains: term },
        { description_contains: term },
        { address_contains: term },
      ],
    },
  });
  const res = await fetch(`${API_URL}/events?${query}`);
  const events = await res.json();

  return {
    props: { events },
  };
}
