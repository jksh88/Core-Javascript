function Phone(number) {
  var result = {};
  result.number = number;
  Object.assign(result, phoneMethods);
  return result;
}

var phoneMethods = {};
phoneMethods.call = function call(number) {
  console.log('Calling ' + this.number);
};

var myNumber = Phone(7708881551);
console.log(myNumber);

function SmartPhone(number, email) {
  var result = Phone(number);
  result.email = email;
  Object.assign(result, smartPhoneMethods);
  return result;
}

var smartPhoneMethods = {};
smartPhoneMethods.sendEmail = function (email) {
  console.log('Emailing ' + email);
};

var iPhone = SmartPhone(4043214507, 'email@email.com');
iPhone.sendEmail('jojo@mail.net');
iPhone.call();
