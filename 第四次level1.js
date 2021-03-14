const us = {
    name: "John",
    years: 30
}

const a = {
    name,
    years,
    isAdmin = false
} = us;
console.log(a);
