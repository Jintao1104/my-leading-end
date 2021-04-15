var j = 0;
for (var i = 0; i <= 5; i++) {
    setTimeout(function () {
        console.log(new Date, j++);
    }, 1000 * i);

}
if (i == 0) {
    console.log(new Date, i);
}