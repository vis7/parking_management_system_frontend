import React, { useState } from 'react';
import axios from 'axios';

const Booking = () => {
  const [newObject, setNewObject] = useState({
    book_date: '',
    slot_space: '',
  });

  const handleChange = (event) => {
    setNewObject({ ...newObject, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // set the authorization token
      // get the authentication token and set it in header
      const token = JSON.parse(localStorage.getItem('token'));
      axios.defaults.headers.common['Authorization'] = `Token ${token}`;
      
      // make the POST request
      const response = await axios.post('http:///127.0.0.1:8000/booking/', newObject);
      console.log(response.data);
      // handle successful creation
    } catch (error) {
      console.log(error);
      // handle error
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Book Date:
          <input
            type="text"
            name="book_date"
            value={newObject.book_date}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Slot Space:
          <input
            type="text"
            name="slot_space"
            value={newObject.slot_space}
            onChange={handleChange}
          />
        </label>
        <br />

        <br />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default Booking;
