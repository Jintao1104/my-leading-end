var str = "I'm?���going�??�to�?�take�??�a?�trip�?�to��?daocheng�?�on��May Day.";
var index = str.search(/��[?]/);
index = index + 3;
str = str.replace(str[index], str[index].toUpperCase());
str = str.replace(/[\�\?]/g, " ");
str = str.replace(/\s+/g, " ");
console.log(str);