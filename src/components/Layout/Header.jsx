import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav style={{
      backgroundColor: '#2c3e50',
      color: 'white',
      padding: '20px 0',
      position: 'fixed',
      width: '100%',
      top: 0,
      zIndex: 100
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <Link to="/" style={{
            fontSize: '24px',
            fontWeight: 'bold',
            color: 'white',
            textDecoration: 'none'
          }}>
            START FRAMEWORK
          </Link>
          <div style={{
            display: 'flex',
            gap: '30px'
          }}>
            <Link to="/about" style={{
              color: 'white',
              textDecoration: 'none',
              fontWeight: '500'
            }}>ABOUT</Link>
            <Link to="/portfolio" style={{
              color: 'white',
              textDecoration: 'none',
              fontWeight: '500'
            }}>PORTFOLIO</Link>
            <Link to="/contact" style={{
              color: 'white',
              textDecoration: 'none',
              fontWeight: '500'
            }}>CONTACT</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;