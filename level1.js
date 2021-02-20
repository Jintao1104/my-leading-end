var n = 8;
var arr = new Array();
for (var i = 0; i < n; i++) {
    arr[i] = prompt();
}
function recur(arr) {
    var a = Array.from(new Set(arr))
    var t = new Array(a.length);
    for (var k = 0; k < a.length; k++) {
        t[k] = 0;
    }
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < a.length; j++) {
            if (arr[i] == a[j]) {
                t[j]++;
            }
        }
    }

    for (j = 0; j < t.length; j++) {
        if (t[j] > 1) {
            for (i = 0; i < t[j]; i++) {
                console.log(a[j])
            }
        }
    }
}
recur(arr);
function count(arr) {
    var a = Array.from(new Set(arr))
    var t = new Array(a.length);
    for (var k = 0; k < a.length; k++) {
        t[k] = 0;
    }
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < a.length; j++) {
            if (arr[i] == a[j]) {
                t[j]++;
            }
        }
    }
    console.log(a);
    console.log(t);
}
count(arr);