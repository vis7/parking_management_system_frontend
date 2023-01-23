import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [newObject, setNewObject] = useState({
    username: '',
    email: '',
    password: '',
    confirm_password: '',
  });

  const handleChange = (event) => {
    setNewObject({ ...newObject, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // make the POST request
      delete axios.defaults.headers.common["Authorization"];
      const response = await axios.post('http:///127.0.0.1:8000/accounts/registration/', newObject);
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
          username:
          <input
            type="text"
            name="username"
            value={newObject.username}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          email:
          <input
            type="text"
            name="email"
            value={newObject.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          password:
          <input
            type="password"
            name="password"
            value={newObject.password}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          confirm password:
          <input
            type="password"
            name="confirm_password"
            value={newObject.confirm_password}
            onChange={handleChange}
          />
        </label>

        <br />
        <button type="submit">signup</button>
      </form>
    </div>
  );
};

export default Signup;
