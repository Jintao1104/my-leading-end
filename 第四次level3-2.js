function Animal() {
    this.species = "动物";
}
function Cat(name, color) {
    this.name = name;
    this.color = color;
}
var cat1 = new Cat('xiaoming', 'red');

Animal.apply(cat1);
console.log(cat1);