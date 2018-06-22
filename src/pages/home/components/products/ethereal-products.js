/*
 * __author__ = 'Kanishka Mohan Madhuni <kmmadhuni@gmail.com>'
 * __copyright__ = 'Copyright (C) 2018 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

import ray from '../../assets/ray.png';
import halo from '../../assets/halo.png';
import pentagram from '../../assets/pentagram.png';

const etherealProducts = [
  {
    id: 1,
    url: '/products/ray',
    name: 'Ethereal Ray',
    imgUrl: ray,
    width: '250',
    description: 'A smart Dual Extruder 3D Printer'
  },
  {
    id: 2,
    url: '/products/halo',
    name: 'Ethereal Halo',
    imgUrl: halo,
    width: '300',
    description: '5-Axis 3D Printer and CNC'
  },
  {
    id: 3,
    url: '/products/pentagram',
    name: 'Ethereal Pentagram',
    imgUrl: pentagram,
    width: '300',
    description: '5-Axis CNC'
  }
];

export default etherealProducts;