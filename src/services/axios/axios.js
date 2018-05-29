/*
 * __author__ = 'Kanishka Mohan Madhuni <kmmadhuni@gmail.com>'
 * __copyright__ = 'Copyright (C) 2018 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

 import axios from 'axios';

 const instance = axios.create({
   baseURL: 'https://api.etherealmachines.com/v1'
 });

 export default instance;