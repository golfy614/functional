function Student(name) {
    this.name = name;
    this.sayHello = function() {
      return 'Hello guest!, I\'m ' + this.name;
    }
  }
  
  var john = new Student('john');
  console.log(john.sayHello())
  console.log(john.name)