import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from './AuthContext';
import Footer from './Footer';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:5000/login', {
        firstName: formData.firstName,
        lastName: formData.lastName,
        username: formData.username,
        email: formData.email,
        password: formData.password,
      });

      const access_token = response.data.token; 
      login(access_token);

  // Redirect to "myAccount"
  navigate('/myAccount');
  
    } catch (error) {
      console.error('Error during POST request:', error);
      // Handle error: you can show an error message to the user or perform other actions
    }
  };

  return (
    <div className = 'content-container'>
      <div  className = "home-container">
        <div className="signup-card">
          <h2>Create an Account</h2>
          <form onSubmit={handleSubmit}>
          <label>
              First Name:
              <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
            </label>
            <br />
            <br />
            <label>
              Last Name:
              <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
            </label>
            <br />
            <br />
            <label>
              Username:
              <input type="text" name="username" value={formData.username} onChange={handleChange} />
            </label>
            <br />
            <br />
            <label>
              Email:
              <input type="email" name="email" value={formData.email} onChange={handleChange} />
            </label>
            <br />
            <br />
            <label>
              Password:
              <input type="password" name="password" value={formData.password} onChange={handleChange} />
            </label>
            <br />
            <br />
            <div className = 'button-container'>
            <button type="submit">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignupForm;
