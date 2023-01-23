import React from 'react';
// import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Logout = () => {
  // const history = useNavigate();

  const handleClick = async (e) => {
    // get the authentication token and set it in header
    const token = JSON.parse(localStorage.getItem('token'));
    axios.defaults.headers.common['Authorization'] = `Token ${token}`;
    
    const response = await axios.get('http:///127.0.0.1:8000/accounts/logout/');
    console.log(response.data);
    // localStorage.removeItem('token');
    
  }

  return (
    <button onClick={handleClick}>Logout</button>
  );
}

export default Logout;
