
# site-responsiveness :computer:
a clean npm tool to check if the site is using media queries to make it responsive

[![site-responsiveness](https://flat.badgen.net/npm/v/site-responsiveness)](https://www.npmjs.com/package/site-responsiveness) [![site-responsiveness](https://flat.badgen.net/packagephobia/install/site-responsiveness)](https://packagephobia.now.sh/result?p=site-responsiveness)
# Installation
 ``$ npm i site-responsiveness``

# how to

```javascript
const responsiveCheck = require('site-responsiveness');
let isThisSiteResponsive = responsiveCheck('example.com');
```
returns object in case of success
```javascript
{ isResponsive: false, timeTaken: '2.046 seconds' }
```
returns string or null in case of error

# License
MIT

# Credits
[Twitter](https://twitter.com/iMultiThinker) [Github](https://github.com/Multi-Thinker)
