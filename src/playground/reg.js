const passwordUpperCase = /^[A-Z]{2,}/g;
const passwordSymbols = /\W{2,}/;
const passwordNumber = /\d{3,}/;
const passwordLowerCase = /[a-z]/;

let errors = ["", "", ""];

let ans = errors.every(err => {
  return err === "";
});

console.log(ans);
