const readline = require("readline/promises");

const  prompt = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})

const points = (speed) => {
    //If the speed is less than 70, it should print "Ok"
    //If the speed is grater than 70, and by what range it should print the demerit points
    //If the speed increases by 5km
    let speed = prompt("Please enter your speed")
    if (speed < 70) {
    console.log("Ok")
    } else {
        let balance = (speed - 70);
        let points = Math.floor(balance/ 5);
        if (points > 12) {
        console.log("License suspended") 
        } else {
            console.log(points)
        }
    }
}
// get user input
readline.question("Please enter the speed: ", speed => {
    points(speed)
    readline.close()
})