var arr = [{ id: 10, name: 'kc' },
{ id: 8, name: 'hy' },
{ id: 15, name: 'pipi' },
{ id: 2, name: 'mama' }];

function compare_id(a, b) {
    var t1 = a.id;
    var t2 = b.id;
    let temp;
    if (t1 > t2) {
        temp = -1;
    }
    else if (t1 < t2) {
        temp = 1;
    }
    else {
        temp = 0;
    }
    return temp;
}
console.log(arr.sort(compare_id));