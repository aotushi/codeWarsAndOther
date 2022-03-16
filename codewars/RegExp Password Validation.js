/**
 * @time 2022/03/15
 * @name RegExp Password Validation
 * @link https://www.codewars.com/kata/52e1476c8147a7547a000811/train/javascript
 * @desc
 *  
 */

const validate = psd => {
  return /(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])^[0-9a-zA-Z]{6,}$/.test(psd);
}

// other recommend solution

function validate2(psd) {
  return  /^[0-9a-zA-Z]{6,}$/.test(psd) &&
          /[a-z]+/           .test(psd) &&
          /[A-Z]+/           .test(psd) &&
          /[0-9]+/           .test(psd);            
}

function validate3(psd) {
  return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,}$/.test(psd);
}