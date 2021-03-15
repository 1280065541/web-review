//实现Object.create
function create(proto) {
    function Fn() {}
    Fn.prototype = proto
    Fn.prototype.constructor = Fn
    return new Fn()
}

const person = {
    isHuman: false,
    printIntroduction: function() {
      console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    }
  };
  

console.log(create(person))