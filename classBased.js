class Phone {
  constructor(number) {
    this.number = number;
  }

  call(number) {
    console.log('Calling ', this.number);
  }
}

class SmartPhone extends Phone {
  constructor(number, email) {
    super(number);
    this.email = email;
  }

  sendEmail(email) {
    console.log('Emailing ', this.email);
  }
}

var iPhone = new SmartPhone(8393030322, 'mail@mail.ne.jp');
iPhone.call(3);
iPhone.sendEmail();
