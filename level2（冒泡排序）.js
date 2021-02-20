
var p = prompt("输入元素个数：");
var arr = new Array(p);
for (var i = 0; i < p; i++) {
    arr[i] = prompt("请输入第" + (i + 1) + "个元素");
    arr[i] = Number(arr[i]);
}
console.log(arr);
function Sorting(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    console.log(arr);
}
Sorting(arr);
