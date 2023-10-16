import React from 'react';
import facebook from './assets/icons8-facebook-50.png';
import instagram from './assets/instagram.png';
import linkedIn from './assets/linkedin.png';
import twitter from './assets/twitter.png';
import './Footer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

const Footer = () => {
  return (
    <div className="footer">
          <div className="footer-col">
              <h4>Social Media</h4>
                {/* <div className="social-media-links">  */}
                    <a href="url" target="_blank">
                      <img src={facebook} alt="Facebook"/>
                    </a>
                    <a href="url" target="_blank">
                      <img src={instagram} alt="Instagram" height="50px" width="50px"/>
                    </a>    
                    <a href="url" target="_blank">
                      <img src={twitter} alt="LinkedIn"/>
                    </a>
                    <a href="url" target="_blank">
                      <img src={linkedIn} alt="Instagram" height="50px" width="50px"/>
                    </a>  
              {/* </div> */}
          </div>
          <div className="footer-col">
              <h4>sharing is caring</h4>
              <ul>
                <li>Über uns</li>
                <li>Blog</li>
                <li>Zertifikate</li>
                <li>Newsletter</li>
              </ul>

          </div>
          <div className='footer-col'> 
            <h4>Service</h4>

          </div>
          <div className="footer-col">
            <h4>Hilfe</h4>

          </div>
    </div>
  
  )
}

export default Footer