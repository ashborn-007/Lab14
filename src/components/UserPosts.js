import React from 'react';

const UserPosts = () => {
  const styles = {
    container: {
      margin: '20px 0'
    },
    heading: {
      borderBottom: '1px solid #eee',
      paddingBottom: '10px'
    },
    post: {
      margin: '15px 0',
      padding: '10px',
      backgroundColor: '#f9f9f9',
      borderRadius: '5px'
    },
    title: {
      fontWeight: 'bold',
      marginBottom: '5px'
    }
  };

  const posts = [
    {
      id: 1,
      title: 'First Post',
      body: 'This is my first post content.'
    },
    {
      id: 2,
      title: 'Second Post',
      body: 'This is my second post content.'
    }
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Recent Posts</h2>
      
      {posts.map(post => (
        <div key={post.id} style={styles.post}>
          <h3 style={styles.title}>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default UserPosts;