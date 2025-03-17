import React from 'react';

const Usercard = () => {
  const profilePhoto = 'https://via.placeholder.com/150';
  const name = 'John Doe';
  const mail = 'john.doe@example.com';
  const phoneNumber = '+1 234 567 890';
  const address = '123 Main St, New York, NY 10001';

  return (
    <div style={styles.card}>
      <img src={profilePhoto} alt="Profile" style={styles.profilePhoto} />
      <h3 style={styles.name}>{name}</h3>
      <p style={styles.detail}><strong>Email:</strong> {mail}</p>
      <p style={styles.detail}><strong>Phone:</strong> {phoneNumber}</p>
      <p style={styles.detail}><strong>Address:</strong> {address}</p>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    width: '300px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
  },
  profilePhoto: {
    width: '100%',
    borderRadius: '8px',
  },
  name: {
    margin: '16px 0 8px',
    fontSize: '24px',
    color: '#333',
  },
  detail: {
    margin: '8px 0',
    fontSize: '16px',
    color: '#666',
  },
};

export default Usercard;
