import React from 'react';
import ProfileImage from './ProfileImage';
import UserInfo from './UserInfo';
import UserPosts from './UserPosts';

const ProfilePage = () => {
  const styles = {
    container: {
      maxWidth: '600px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }
  };

  return (
    <div style={styles.container}>
      <ProfileImage />
      <UserInfo />
      <UserPosts />
    </div>
  );
};

export default ProfilePage;