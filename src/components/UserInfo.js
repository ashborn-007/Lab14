import React from 'react';

const UserInfo = () => {
  const styles = {
    container: {
      textAlign: 'center',
      margin: '20px 0'
    },
    name: {
      fontSize: '24px',
      fontWeight: 'bold'
    },
    email: {
      color: '#666'
    },
    bio: {
      marginTop: '10px'
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.name}>Srijan Pandit</h2>
      <p style={styles.email}>srijancode@gmail.com</p>
      <p style={styles.bio}>Full Stack Developer trying to explore other stuff.</p>
    </div>
  );
};

export default UserInfo;