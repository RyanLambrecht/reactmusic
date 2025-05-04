import React from 'react';

const Home = () => {
  return (
    <div>
      <div style={styles.banner}>
        Home
      </div>
      <div style={styles.content}>
        {/* Add your page content here */}
        Welcome to the Home Page!
      </div>
    </div>
  );
};

const styles = {
  banner: {
    position: 'fixed',
    top: 0,
    width: '100%',
    backgroundColor: 'purple',
    color: 'white',
    textAlign: 'center',
    padding: '20px 0',
    fontSize: '24px',
    fontWeight: 'bold',
    zIndex: 1000,
  },
  content: {
    marginTop: '80px', // Adjust this to avoid overlap with the fixed banner
    padding: '20px',
  },
};

export default Home;