import React from 'react';
import { useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';  // Updated import
import '../styles/Landing.css';

const Illustration = new URL('../images/realm-mainlogo.png', import.meta.url);
const realm = new URL('../images/realm-logo1.png', import.meta.url);

function LandingPage() {
  const navigate = useNavigate();  // Updated hook
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const containerStyle = isSmallScreen ? 'illutrator-contain small-screen' : 'illutrator-contain';

  const handleAccessAccount = () => {
    navigate('/sign-in');  // Updated navigation
  };

  return (
    <div className='main'>
      <div className='admin-land'>
        <div className='ban-title'>
          <h3>
            TOWARDS <span> BLUE </span> MONITORING
          </h3>
          <p className='banner'>
            Real-time Aqualert Monitoring helps you monitor water status. We provide data results, analytics and other
            information you need, pertaining to the quality of your water source.
          </p>
          <button className='btn' onClick={handleAccessAccount}> ACCESS ACOUNT </button>
        </div>
        <div className={containerStyle}>
          <img className='pic' src={Illustration} alt='icon' />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
