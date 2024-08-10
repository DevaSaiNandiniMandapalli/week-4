
function varExample() {
    if (true) {
        var x = 10;
        console.log("Inside block: x =", x); 
    }
    console.log("Outside block: x =", x); 
}
varExample();


function letExample() {
    if (true) {
        let y = 20;
        console.log("Inside block: y =", y); 
    }

}
letExample();
function constExample() {
    const z = 30;
    console.log("z =", z); 
}
constExample();
