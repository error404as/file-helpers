'use strict';

function loadProfile(name) {
   var _ref = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

   var age = _ref.age;
   var city = _ref.city;
   var phone = _ref.phone;
   // `named params`
   console.log(age + ', ' + phone);
}
loadProfile('John', { age: 20, phone: 'no', city: 'Minsk' });
