import Layout from '@/components/Layout';
import { API_URL, PER_PAGE } from '@/config/index';
import EventItem from '@/components/EventItem';
import Pagination from '@/components/Pagination';

export default function EventsPage({ events, page, total }) {
  return (
    <Layout>
      <h1>Events</h1>
      {events.length === 0 ? (
        <h3>No events to show</h3>
      ) : (
        events.map((evt) => <EventItem evt={evt} key={evt.id} />)
      )}
      <Pagination page={page} total={total} />
    </Layout>
  );
}

// server side rendering
export async function getServerSideProps({ query: { page = 3 } }) {
  // calculate start num
  const startNum = +page === 1 ? 0 : (+page - 1) * PER_PAGE;

  // Fetch total Events Number
  const numRes = await fetch(`${API_URL}/events/count`);
  const total = await numRes.json();

  // Fetch Events
  const res = await fetch(
    `${API_URL}/events?_sort=date:ASC&_limit=${PER_PAGE}&_start=${startNum}`,
  );
  const events = await res.json();

  return {
    props: { events, page: +page, total },
  };
}
