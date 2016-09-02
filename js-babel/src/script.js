function loadProfile(name, {age, city, phone} = {}){   // `named params`
   console.log(age+', '+phone);
}
loadProfile('John', { age:20, phone: 'no', city:'Minsk' });
