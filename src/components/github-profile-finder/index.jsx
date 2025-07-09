import { useState, useEffect } from 'react';
import User from './userData';
import './style.css';

export default function GithubProfileFinder() {
  const [username, setUsername] = useState('Andrenz');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchGithubData() {
    try {
      setLoading(true);
      const res = await fetch(`https://api.github.com/users/${username}`);
      const data = await res.json();
      if (data) {
        setUserData(data);
      }
    } catch (error) {
      console.error('Failed to fetch GitHub data:', error);
    } finally {
      setLoading(false);
    }
  }

  function handleSubmit() {
    fetchGithubData();
  }

  useEffect(() => {
    fetchGithubData();
  }, []);

  if (loading) return <div>Loading..! Please wait</div>;

  return (
    <div className='container'>
      <div className='input-wrapper'>
        <input
          name='search-by-username'
          type='text'
          placeholder='Search by GitHub username'
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>

      {userData && <User user={userData} />}
    </div>
  );
}
