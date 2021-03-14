function Animal() {
    this.species = "动物";
}
function Cat(name, color) {
    this.name = name;
    this.color = color;
}
Cat.prototype = new Animal();
var cat1 = new Cat('xiaoming', 'red');
console.log(cat1.species);
console.log(cat1.name);
console.log(cat1.color);