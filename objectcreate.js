const friend = {
  isTall: false,
  printFriend: function () {
    console.log(
      `This friend is called ${this.name} and he is ${
        this.isTall ? 'tall' : 'not tall enough'
      }`
    );
  },
};
//Q: why does arrow function not work for printFriend?

const jamie = Object.create(friend);
jamie.name = 'Jamie';
jamie.isTall = true;
jamie.printFriend();

function doSomething() {}
console.log('doSomething prototype: ', doSomething.prototype);

const doSomethingArrowFunction = () => {};
console.log('doSomethingArrowFunction prototype :', doSomething.prototype);

const obj1 = Object.create(doSomething.prototype);
console.log('obj1: ', obj1);
obj1.what = 'run';

console.log(obj1);
