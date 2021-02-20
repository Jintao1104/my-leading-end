var str = 'today is a happy day'
function change(str) {
    var arr, arr1 = [];
    arr = str.toLowerCase().split(" ");
    for (var i = 0; i < arr.length; i++) {
        arr1.push(arr[i][0].toUpperCase() + arr[i].substring(1));
    }
    return arr1.join(' ');
}
change(str);