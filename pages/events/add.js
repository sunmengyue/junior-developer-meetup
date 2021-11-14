import { useState } from 'react';
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';
import Layout from '@/components/Layout';
import { API_URL } from '@/config/index';
import styles from '@/styles/Form.module.css';
import EventPage from './[slug]';

export default function AddPage() {
  const [values, setValues] = useState({
    name: '',
    hosts: '',
    address: '',
    date: '',
    time: '',
    description: '',
  });

  const router = useRouter();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const hasEmptyFields = Object.values(values).some(
      (inputVal) => inputVal === '',
    );

    if (hasEmptyFields) {
      toast.error('Please fill in all fields');
    }

    const res = await fetch(`${API_URL}/events/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });

    if (!res.ok) {
      toast.error('Something went wrong');
    } else {
      const evt = await res.json();
      router.push(`/events/${evt.slug}`);
    }
  };

  return (
    <Layout title="Add New Event">
      <Link href="/events"> ← Go Back</Link>
      <h1>Add events page</h1>
      <ToastContainer autoClose={2500} />
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.grid}>
          <div>
            <label htmlFor="name">Event name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={values.name}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="hosts">Event Hosts</label>
            <input
              type="text"
              id="hosts"
              name="hosts"
              value={values.hosts}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="address">Event Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={values.address}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="date">Event Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={values.date}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="time">Event Time</label>
            <input
              type="text"
              id="time"
              name="time"
              value={values.time}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div>
          <label htmlFor="description">Events Description</label>
          <textarea
            type="text"
            name="description"
            id="description"
            value={values.description}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <input type="submit" value="Add Event" className="btn" />
      </form>
    </Layout>
  );
}
