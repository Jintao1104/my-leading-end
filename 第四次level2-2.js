var arr = [1, [2, [3, [4, 5]]], 6];
function arr_to_fall(arr) {
    arr1 = arr.toString().split(',');
    for (var k in arr1) {
        arr1[k] = parseInt(arr1[k]);
    }
    return arr1;
}
var even2 = arr_to_fall(arr);
console.log(even2);