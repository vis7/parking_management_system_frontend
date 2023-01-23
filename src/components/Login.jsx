import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const [token, setToken] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      delete axios.defaults.headers.common["Authorization"];
      const response = await axios.post('http:///127.0.0.1:8000/accounts/login/', { username, password });
      const token = response.data['token'];
      console.log(response.data);
      console.log(response.data['token'])
      console.log(token)
      localStorage.setItem('token', JSON.stringify(token));

      // Redirect the user to a protected page
      this.props.history.push('/');

    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      </label>
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;

