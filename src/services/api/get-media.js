/*
 * __author__ = 'Kanishka Mohan Madhuni <kmmadhuni@gmail.com>'
 * __copyright__ = 'Copyright (C) 2018 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

import axios from '../axios/axios';

const getMedia = (callback) => {
  axios.get('/medias/')
    .then(res => {
      // console.log(res.data);
      callback(res.data);
    })
    .catch(err => {
      callback({
        status: 'error',
        data: err
      });
    });
};

export default getMedia;