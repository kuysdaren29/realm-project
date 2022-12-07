import React from 'react'
import './Landing.css'



const Illustration = new URL('../images/icon11.png', import.meta.url)
const realm = new URL('../images/realm-logo1.png', import.meta.url)

function LandingPage() {

  return (
    <div className='main'>
      <nav> 
      <img className='logo' src={realm} alt='realm-icon'/>
         </nav> 
       <div className='admin-land'>
          <div className='ban-title'>
            <h3> TOWARDS 
              <span> BLUE </span> MONITORING </h3>
                <p className='banner'>Real-time Aqualert Monitoring helps you monitor water status. 
                      We provide data results, analytics and other information you need, pertaining to 
                      the quality of your water source. </p> 
                    <button className='btn'> ACCESS ACOUNT </button>
                </div>
            <div className='illutrator-contain'>
            <img className='pic' src={Illustration} alt='icon'/> </div>
    </div>
    </div>
          
  )
}

export default LandingPage