import React from 'react';
import { useAuth } from './AuthContext';
import { jwtDecode } from 'jwt-decode';
import Footer from './Footer';

const MyAccount = () => {
    const { token } = useAuth();
  
    // Extract username from the user object
    const decodedToken = jwtDecode(token);
    const username = decodedToken.user.firstName
  
    return (
      <div className = "content-container">
        <div className="home-container">
          <div className="mypage-container">
            <h2>Welcome, {username}!</h2>
          </div>
        </div>
        <Footer />
      </div>

    );
  };
  
  export default MyAccount;