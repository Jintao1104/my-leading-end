var arr = [1, [2, [3, [4, 5]]], 6];
function delayering(a) {
    var b = []
    a.map(
        function v(item) {
            function c(item) {
                if (Array.isArray(item)) {
                    b = b.concat(delayering(item))
                }
                else {
                    b.push(item)
                }
            }
            return c(item)
        }
    )
    return b
}
console.log(delayering(arr));
