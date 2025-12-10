import React from 'react';
import avatar from '../../assets/avatar.svg';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section style={{
        backgroundColor: '#1abc9c',
        color: 'white',
        padding: '100px 0 100px',
        textAlign: 'center',
        marginTop: '60px'
      }}>
        <div className="container">
          <img 
            src={avatar} 
            alt="Avatar" 
            style={{
              width: '200px',
              height: '200px',
              borderRadius: '50%',
              marginBottom: '20px'
            }}
          />
          <h1 style={{
            fontSize: '48px',
            marginBottom: '20px'
          }}>START FRAMEWORK</h1>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '30px'
          }}>
            <div style={{width: '100px', height: '2px', backgroundColor: 'white'}}></div>
            <i className="fas fa-star" style={{color: 'white', fontSize: '24px'}}></i>
            <div style={{width: '100px', height: '2px', backgroundColor: 'white'}}></div>
          </div>
          <p style={{
            fontSize: '24px',
            marginBottom: '30px'
          }}>Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </section>
    </div>  
  );
};

export default Home;