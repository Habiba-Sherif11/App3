import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    userName: '',
    userAge: '',
    userEmail: '',
    userPassword: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <section className="section">
      <div className="container">
        <h2>CONTACT SECTION</h2>
        
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="userName"
              value={formData.userName}
              onChange={handleChange}
              className="form-control"
              placeholder="userName"
              required
            />
          </div>
          
          <div className="form-group">
            <input
              type="number"
              name="userAge"
              value={formData.userAge}
              onChange={handleChange}
              className="form-control"
              placeholder="userAge"
              required
            />
          </div>
          
          <div className="form-group">
            <input
              type="email"
              name="userEmail"
              value={formData.userEmail}
              onChange={handleChange}
              className="form-control"
              placeholder="userEmail"
              required
            />
          </div>
          
          <div className="form-group">
            <input
              type="password"
              name="userPassword"
              value={formData.userPassword}
              onChange={handleChange}
              className="form-control"
              placeholder="userPassword"
              required
            />
          </div>
          
          <button type="submit" className="btn">send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;