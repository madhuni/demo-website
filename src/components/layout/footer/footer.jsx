/*
 * __author__ = 'Kanishka Mohan Madhuni <kmmadhuni@gmail.com>'
 * __copyright__ = 'Copyright (C) 2018 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

import React from 'react';
import { NavLink } from 'react-router-dom';

import './footer.css';

import logoWithName from '../../../assets/images/logo/logo-with-name-white.svg';
import iso from './assets/images/iso-white.png';
import makeInIndia from './assets/images/make-in-india.svg';
import startupIndia from './assets/images/startup-india.svg';

/* Importing social media icons */
import facebook from './assets/images/social-media-icons/facebook.svg';
import insta from './assets/images/social-media-icons/instagram.png';
import linkedin from './assets/images/social-media-icons/linkedin.svg';
import twitter from './assets/images/social-media-icons/twitter.svg';
import youtube from './assets/images/social-media-icons/youtube.svg';

import Logo from '../logo/logo';
const footer = (props) => {
  return (
  <footer className="footer">
    <div className="container container--footer">
      <div className="footer-box">
        <div className="logo-col">
          <Logo url={logoWithName} width={80} height={80} id={"footer-logo"}/>
          <div className="govt-initiative">
            <img src={makeInIndia} alt="Make In India" className="make-in-india-logo"/>
            <img src={iso} alt="Iso" className="iso-logo"/>
            <img src={startupIndia} alt="Startup India" className="startup-india-logo" />
          </div>
        </div>
        <div className="footer-col-divider" content="company-items">
          <div className="footer-title">Company</div>
          <ul className="links-list">
            <li className="link-item">
              <NavLink to="/" exact>Home</NavLink>
            </li>
            <li className="link-item">
              <NavLink to="/about">About Us</NavLink>
            </li>
            <li className="link-item">
              <NavLink to="/media">Media</NavLink>
            </li>
            <li className="link-item">
              <NavLink to="/blogs">Blogs</NavLink>
            </li>
            <li className="link-item">
              <NavLink to="/careers">Careers</NavLink>
            </li>
            <li className="link-item">
              <NavLink to="/contact">Contact Us</NavLink>
            </li>
          </ul>
        </div>
        <div className="footer-col-divider" content="product-items">
          <div className="footer-title">Products</div>
          <ul className="links-list">
            <li className="link-item">
              <NavLink to='/products/halo'>Halo</NavLink>
            </li>
            <li className="link-item">
              <NavLink to='/products/ray'>Ray</NavLink>
            </li>
            <li className="link-item">
              <NavLink to='/products/pentagram'>Pentagram</NavLink>
            </li>
          </ul>
        </div>
        <div className="footer-col-divider" content="social-media">
          <div className="footer-title">Connect with us</div>
          <ul className="links-list" type="social-media-list">
            <li className="link-item link-item--social-media">
              <a href="https://www.facebook.com/etherealmachines" target="_blank">
                <img src={facebook} alt="Facebook" width="30" height="30" />
              </a>
            </li>
            <li className="link-item link-item--social-media">
              <a href="https://www.instagram.com/ethereal_machines/" target="_blank">
                <img src={insta} alt="Instagram" width="30" height="30" />
              </a>
            </li>
            <li className="link-item link-item--social-media">
              <a href="https://twitter.com/etherealmachine" target="_blank">
                <img src={twitter} alt="Twitter" width="30" height="30" />
              </a>
            </li>
            <li className="link-item link-item--social-media">
              <a href="https://www.linkedin.com/company/etherealmachines/" target="_blank">
                <img src={linkedin} alt="Linkedin" width="30" height="30" />
              </a>
            </li>
            <li className="link-item link-item--social-media">
              <a href="https://www.youtube.com/channel/UCW8I3771Afa4v_KkATxw2EA" target="_blank">
                <img src={youtube} alt="YouTube" width="30" height="30" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright-box">
        Copyright &copy; 2018. Ethereal Machines Pvt Ltd. All rights reserved
      </div>
    </div>
  </footer>
  );
};

export default footer;