import './App.css';
import 'tailwindcss/tailwind.css';

import React, { useState } from 'react';

function App() {
  const [displayText, setDisplayText] = useState(false);

  const handleClick = () => {
    setDisplayText(true);
  };

  return (
    <div style={{ backgroundColor: 'beige' }}>
      <div className="banner">
        <div className="logo-container">
          <img src="statefarmlogo.png" alt="Logo" className="logo" />
        </div>
      </div>
      <div>
        <div className="profile-info">
          <img className="profile-icon" src="profileicon.png" />
          <h1 className="profile-name">Jane Doe</h1>
        </div>
        <div>
          <p className="profile-in">Email: abcde@gmail.com | Phone: (123) 456-7890</p>
        </div>
      </div>
      
      <div className="flex justify-center items-center">
        <div className="mr-8">
          <h1 className="header">Grover's Insights</h1>
          <div className="flex items-center">
          <img 
              className="profile-in" 
              src="grover.png" 
              alt="Circle Background" 
              width="200" 
              height="200" 
              onClick={handleClick} // Added onClick event to the image
              style={{ cursor: 'pointer' }} // Added cursor style to indicate it's clickable
            />
            <div className="grover-grey-rectangle">File uploaded: Claim 14224.pdf</div>
            {displayText && (
              <div className="grover-green-rectangle">
                Upon analyzing the data provided, it appears that there's a recurring pattern in the claims regarding a leaking roof, despite our humidity sensors reporting no significant changes in the moisture levels. The lack of corresponding data indicating repairs or remedial action suggests a possible attempt to exploit the insurance policy. This consistent reporting of the same issue without any observable improvements or evidence of repair raises concerns of potential insurance fraud.  We recommend further investigation into the validity of these claims to prevent potential fraudulent activities.
              </div>
            )}
          </div>
        </div>
      </div>



      <h1 className="header">Sensor Graphs</h1>
      <div className="flex justify-center mt-8">
        <img className='profile-in mr-8' src="humidity.png" style={{ width: '31%', height: 'auto' }} />
        <img className='profile-in mr-8' src="temp.png" style={{ width: '31%', height: 'auto' }} />
        <img className='profile-in' src="motion.png" style={{ width: '31%', height: 'auto' }} />
      </div>

      <h1 className="header">Previous User Claims</h1>
      <div className="justify-center mt-8">
        <div className="claim-info">
          <p className="text-gray-700 text-center">Claim ID: 26654</p>
          <p className="text-gray-700 text-center">Claim Description: Leaky roof resulting in water damage</p>
          <p className="text-gray-700 text-center">Claim Date: 01/26/24</p>
        </div>
        <div className="claim-info">
          <p className="text-gray-700 text-center">Claim ID: 26578</p>
          <p className="text-gray-700 text-center">Claim Description: Broken fence due to hailstorm</p>
          <p className="text-gray-700 text-center">Claim Date: 08/15/23</p>
        </div>
        <div className="claim-info">
          <p className="text-gray-700 text-center">Claim ID: 36591</p>
          <p className="text-gray-700 text-center">Claim Description: Leaky roof resulting in water damage</p>
          <p className="text-gray-700 text-center">Claim Date: 03/27/23</p>
        </div>
      </div>
      
    </div>
  );
}

export default App;
