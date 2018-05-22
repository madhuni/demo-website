import React from 'react';
import { NavLink } from 'react-router-dom';

import './nav-list.css';

import NavItem from './components/nav-item/nav-item';
import SubList from './components/sub-list/sub-list';
import SubListItem from './components/sub-list/sub-list-item/sub-list-item';
import halo from '../../assets/images/halo-wireframe.svg';
import ray from '../../assets/images/ray-wireframe.svg';
import pentagram from '../../assets/images/pentagram-wireframe.svg';

const navList = (props) => {
  return (
    <ul className="nav-list">
      <NavItem linkType={'text'} navLink={true} address={'/'} name={'Home'} {...props}/>
      <NavItem linkType={'text'} navLink={false} address={'#product-sub-list'} name={'Products'}>
        <SubList id={'product-sub-list'}>
          <SubListItem url={halo} width={100} height={100} link={'/products/halo'} {...props}>
            <span className="subtitle">Halo</span>
            <div className="caption">5-axis 3D Printer and CNC</div>
          </SubListItem>
          <SubListItem url={ray} width={100} height={100} link={'/products/ray'} {...props}>
            <span className="subtitle">Ray</span>
            <div className="caption">A Smart Dual Extruder 3D Printer</div>
          </SubListItem>
          <SubListItem url={pentagram} width={100} height={100} link={'/products/pentagram'} {...props}>
            <span className="subtitle">Pentagram</span>
            <div className="caption">5-axis CNC</div>
          </SubListItem>
        </SubList>
      </NavItem>
      <NavItem linkType={'text'} navLink={true} address={'/about'} name={'About Us'} {...props}/>
      <NavItem linkType={'text'} navLink={true} address={'/media'} name={'Media'} {...props}/>
      <NavItem linkType={'text'} navLink={true} address={'/blogs'} name={'Blogs'} {...props}/>
      <NavItem
        linkType={'img'}
        img={{
          url: 'https://avatars0.githubusercontent.com/u/13901302?s=400&u=e0b3a498eda561b52664c58db8ce33cef508abd4&v=4',
          alt: 'User',
          width: 40,
          height: 40
        }}
        navLink={false}
        address={'#user-sub-list'}
      >
        <SubList type={"left"} id={'user-sub-list'}>
          <SubListItem url={halo} width={30} height={30} link={'#halo'}>
            <span className="subtitle">Dashboard</span>
          </SubListItem>
          <SubListItem url={ray} width={30} height={30} link={'#ray'}>
            <span className="subtitle">Log Out</span>
          </SubListItem>
        </SubList>
      </NavItem>
    </ul>
  );
};

export default navList;