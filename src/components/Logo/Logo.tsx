import React from 'react';
const Logo: React.FC = () => {
  const styles = {
      backgroundColor: 'blue',
      color: 'white',
      padding: '10px',
  };
  return (
    <div style={styles} className="header-logo">
        My Logo
    </div>
  );
};
export default Logo;
