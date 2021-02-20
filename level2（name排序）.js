var arr = [{ id: 10, name: 'kc' },
{ id: 8, name: 'hy' },
{ id: 15, name: 'pipi' },
{ id: 2, name: 'mama' }];


function compare_name(a, b) {
    var p1 = a.name;
    var p2 = b.name;
    let temp;
    if (p1 < p2) {
        temp = -1;
    }
    else if (p1 > p2) {
        temp = 1;
    }
    else {
        temp = 0;
    }
    return temp;
}
console.log(arr.sort(compare_name));

