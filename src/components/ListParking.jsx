import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ListParking = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // get the authentication token and set it in header
      const token = JSON.parse(localStorage.getItem('token'));
      axios.defaults.headers.common['Authorization'] = `Token ${token}`;

      const result = await axios(
        'http://127.0.0.1:8000/booking/'
      );
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Parking Data</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.book_date} {item.slot_space}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListParking;