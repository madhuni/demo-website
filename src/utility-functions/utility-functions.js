/*
 * __author__ = 'Kanishka Mohan Madhuni <kmmadhuni@gmail.com>'
 * __copyright__ = 'Copyright (C) 2018 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

export const stringUppercase = (value) => {
  return value.charAt(0).toUpperCase() + value.substr(1);
};

export const clearSelectField = (elementClass) => {
  const options = document.querySelectorAll(elementClass);
  for (let i = 0, l = options.length; i < l; i++) {
    options[i].value = '';
  }
};