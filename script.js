// // function declartion 
// function callName(name) {
//     console.log(`my name is ${name}`);
// }

// // function xepression 
// let callRollNo = function (rollNo) {
//     console.log(`your roll number is ${rollNo}`);
// }
// // Arrow fucntion 
// const calAge = birthYear => 2037 - birthYear;
// console.log(calAge(2020));

// // chhallenge 
// function calcAverage(socre1, score2, score3) {
//     let avgScore = (socre1 + score2 + score3) / 3;
//     return avgScore;
// }

// function checkWinner(avgDolphins, avgkoolas) {
//     if (avgDolphins > 2 * avgkoolas) {
//         console.log(`Dolphins win , final score is ${avgDolphins} and for koalas is ${avgkoolas}`);
//     } else if (avgkoolas > 2 * avgDolphins) {
//         console.log(`Koalas win , final score is ${avgkoolas} and for koalas is ${avgDolphins}`);
//     } else {
//         console.log("none scored twice the other team");
//     }
// }

// // let dolphins = calcAverage(44, 23, 71);
// // let koalas = calcAverage(65, 54, 49);
// let dolphins = calcAverage(85, 54, 41);
// let koalas = calcAverage(23, 34, 27);
// checkWinner(dolphins, koalas);

// array methods 

// challeneg 2 array
let bills = [125, 555, 44];
let tips = [];
let totals = [];
for (let n = 0; n < bills.length; n++) {
    let tip;
    let total;
    function calTip(bill) {
        if (bills[n] <= 300 && bills[n] >= 50) {
            tip = bills[n] * 0.15;
            total = bills[n] + tip;
            tips.push(tip);
            totals.push(total);
        }
        else {
            tip = bills[n] * 0.2;
            total = bills[n] + tip;
            tips.push(tip);
            totals.push(total);
        }
    }
    calTip(bills[n]);

}
console.log(tips);
console.log(totals);

const profile = {
    firstName: "Deepak",
    lastName: "Singh",
    pincode: "143001",
    friends: ["aman", "bhavesh", "chandan", "derek"]
}
console.log(profile);
console.log(`${profile['firstName']} has ${profile.friends.length} friends and his best friend is ${profile.friends[0]} `);

const mark = {
    name: "mark",
    height: 1.69,
    mass: 78,
    calclBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }

};
mark.calclBMI();
console.log(mark.bmi);

let temp = [17, 21, 23];
for (let n = 0; n < temp.length; n++) {
    console.log(`...${temp[n]}ºC in ${n} days`);
};