function Phone(number) {
  this.number = number;
}

Phone.prototype.call = function (number) {
  console.log('Calling ', number);
};

var samsung = new Phone(3839272911);

function SmartPhone(number, email) {
  Phone.call(this, number);
  this.email = email;
}

SmartPhone.prototype = Object.create(Phone.prototype);
SmartPhone.prototype.constructor = SmartPhone;
SmartPhone.prototype.sendEmail = function (email) {
  console.log('Emailing ', email);
};

var iPhone = new SmartPhone(8393030322, 'mail@mail.ne.jp');
iPhone.call(3);
