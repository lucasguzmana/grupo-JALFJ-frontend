import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

function Login(props) {
  const [loading, setLoading] = useState(false);
  const username = useFormInput('');
  const password = useFormInput('');
  const [error, setError] = useState(null);

  // handle button click of login form
  const handleLogin = () => {
    setError(null);
    setLoading(true);
    axios.post('http://localhost:8080/users/signin', { username: username.value, password: password.value }).then(response => {
    setLoading(false);
    props.history.push('/user');
    }).catch(error => {
      setLoading(false);
      setError("Something went wrong. Please try again later.");
    });
  }

  return (
    <>
      <Navbar/>
      <section className="flex-container" id="cuerpo_3">
        Login<br /><br />
        <div>
          Username<br />
          <input type="text" {...username} autoComplete="new-password" />
        </div>
        <div style={{ marginTop: 10 }}>
          Password<br />
          <input type="password" {...password} autoComplete="new-password" />
        </div>
        {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
        <input type="button" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading} /><br />
      </section>
    </>
  );
}

const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  const handleChange = e => {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}

export default Login;