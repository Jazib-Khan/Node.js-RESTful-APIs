
const p = Promise.reject('reson for rejection...');
p.catch(error => console.log(error));