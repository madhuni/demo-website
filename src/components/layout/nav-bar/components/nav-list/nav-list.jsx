import React from 'react';

import './nav-list.css';

import SubList from './components/sub-list/sub-list';
import SubListItem from './components/sub-list/sub-list-item/sub-list-item';
import halo from '../../assets/images/halo-wireframe.svg';
import ray from '../../assets/images/ray-wireframe.svg';
import pentagram from '../../assets/images/pentagram-wireframe.svg';

const navList = (props) => {
  return (
    <ul className="nav-list">
      <li className="nav-item">
        <div className="item-name flex-row">
          <a href="#" className="item-link">Home</a>
        </div>
      </li>
      <li className="nav-item">
        <div className="item-name flex-row">
          <a href="#product-sub-list" className="item-link">Products</a>
        </div>
        <SubList id={'product-sub-list'}>
          <SubListItem url={halo} width={100} height={100} link={'#halo'}>
            <span className="subtitle">Halo</span>
            <div className="caption">5-axis 3D Printer and CNC</div>
          </SubListItem>
          <SubListItem url={ray} width={100} height={100} link={'#ray'}>
            <span className="subtitle">Ray</span>
            <div className="caption">A Smart Dual Extruder 3D Printer</div>
          </SubListItem>
          <SubListItem url={pentagram} width={100} height={100} link={'#pentagram'}>
            <span className="subtitle">Pentagram</span>
            <div className="caption">5-axis CNC</div>
          </SubListItem>
        </SubList>
      </li>
      <li className="nav-item">
        <div className="item-name flex-row">
          <a href="#" className="item-link">About Us</a>
        </div>
      </li>
      <li className="nav-item">
        <div className="item-name flex-row">
          <a href="#" className="item-link">Media</a>
        </div>
      </li>
      <li className="nav-item">
        <div className="item-name flex-row">
          <a href="#" className="item-link">Blogs</a>
        </div>
      </li>
      <li className="nav-item" type="user">
        <div className="item-name flex-row">
          <a href="#user-sub-list" className="item-link">
            <img src="https://avatars0.githubusercontent.com/u/13901302?s=400&u=e0b3a498eda561b52664c58db8ce33cef508abd4&v=4" alt="User" width="40" height="40" className="avatar"/>
          </a>
        </div>
        <SubList type={"left"} id={'user-sub-list'}>
          <SubListItem url={halo} width={30} height={30} link={'#halo'}>
            <span className="subtitle">Dashboard</span>
          </SubListItem>
          <SubListItem url={ray} width={30} height={30} link={'#ray'}>
            <span className="subtitle">Log Out</span>
          </SubListItem>
        </SubList>
      </li>
    </ul>
  );
};

export default navList;