import React, { useState, useEffect } from 'react';
import Suggestion from './Suggestions';


export default function AutoComplete() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState('');
  const [param, setParam] = useState('');
  const [showDropDown, setShowDropDown] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);

  async function fetchUsers() {
    try {
      setLoading(true);
      const res = await fetch('https://dummyjson.com/users');
      const data = await res.json();

      if (data?.users?.length) {
        setUsers(data.users.map((user) => user.firstName));
        setLoading(false);
        setErr('');
      }
    } catch (error) {
      setLoading(false);
      console.error(error);
      setErr(error.message || 'Something went wrong');
    }
  }

  function handleChange(event) {
    const query = event.target.value.toLowerCase();
    setParam(query);

    if (query.length > 1) {
      const filteredData = users.filter((item) =>
        item.toLowerCase().includes(query)
      );
      setFilteredUsers(filteredData);
      setShowDropDown(true);
    } else {
      setShowDropDown(false);
    }
  }
  
  function handleClick(event){
    setShowDropDown(false);
    setParam(event.target.innerText)
    setFilteredUsers([]);
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return <div>Loading..., please wait!</div>;
  }

  if (err) {
    return <div>{err}</div>;
  }

  return (
    <div className="container">
      <input
        name="search-users"
        value={param}
        placeholder="Search users here..."
        onChange={handleChange}
      />
      {showDropDown && <Suggestion data={filteredUsers} handleClick={handleClick} />}
    </div>
  );
}
