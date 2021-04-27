# CARNN

As easy way to get the cardinal numbers names!


### Install

```
npm install carnn --save

```


### Usage:

##### carnn(number, language);

- Number
    Receive an Integer, String or an Array with Strings or Integers 
    containing only numbers.

- Language
    Receive a String containing language identifier (optional)
    If no value was provided, default language will be loaded : "en-us"
    Supported values:
        "en-us",
        "pt-br"
    


```javascript
const carnn = require('carnn');

console.log(carnn(3));
// output: three
console.log(carnn("6", "en-us")); 
// output: six
console.log(carnn([3,6,9])); 
// output: [three, six, nine]
console.log(carnn(["3","6","9"], "en-us")); 
// output: [three, six, nine]
console.log(carnn(["3",6,"9"], "pt-br")); 
// output: [três, seis, nove]

```
 * To avoid precision loss using large Integers you can simply use Strings.
 * To use default language ignores the param or use empty Strings.



#### Max Number 999 Millinillions
updates coming soon

