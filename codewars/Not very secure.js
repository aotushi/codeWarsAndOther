/**
 * @time 2022/03/15
 * @name Not very secure
 * @link https://www.codewars.com/kata/526dbd6c8c0eb53254000110/train/javascript
 * @desc
 *  
 */

const alphanumeric = str => {
  return [...str].every(item => /[\d]/.test(item) || /[a-zA-Z]/.test(item));
}