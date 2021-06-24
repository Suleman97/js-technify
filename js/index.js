var mark_height, jhon_height, mark_weight, jhon_weight;

mark_height = 1.73736;
jhon_height = 1.95448;

mark_weight = 75;
jhon_weight = 99;

var mark_BMI, jhon_BMI;

mark_BMI = mark_weight / (mark_height * mark_height);

jhon_BMI = jhon_weight / (jhon_height * jhon_height);

// var greater_BMI = mark_BMI > jhon_BMI;

// if (greater_BMI === true) greater_BMI;
// else greater_BMI;

// console.log('is marks BMI is higher than jhnos? :' + greater_BMI);

// jhon_avg = (97 + 134 + 105) / 3;

// mike_avg = (97 + 134 + 105) / 3;

// marry_avg = (97 + 134 + 105) / 3;

// // is_greater = true;

// // is_greater
// //   ? console.log('mike team is on top with the avg of ' + mike_avg)
// //   : console.log('mike team is on last with the avg of ' + jhon_avg);

// if (jhon_avg > mike_avg && jhon_avg > marry_avg) {
//   console.log('Jhon team is on last with the avg of ' + jhon_avg);
// } else if (marry_avg > jhon_avg && marry_avg > mike_avg) {
//   console.log('Marry team avg of ' + marry_avg);
// } else if (mike_avg > jhon_avg && mike_avg > marry_avg) {
//   console.log('mike team is on last with the avg of ' + mike_avg);
// } else {
//   console.log('match is draw');
// }

function tipCalculator(bill) {
  if (bill < 50) {
    const tip = (bill * (20 / 100)).toFixed(2);
    console.log('the tip of $' + bill + ' is ' + tip);
    return tip;

  } else if (bill >= 50 || bill < 200) {
    const tip = (bill * (15 / 100)).toFixed(2);
    console.log('the tip of $' + bill + ' is ' + tip)
    return tip;
  } else {
    const tip = (bill * (10 / 100)).toFixed(2);
    console.log('the tip of $' + bill + ' is ' + tip);
    return tip;
  }
}

const totalTip = [];
// tipCalculator(48)\
// totalTip[0] = tipCalculator(48)

totalTip.push(tipCalculator(48));
totalTip.push(tipCalculator(124));
totalTip.push(tipCalculator(268));
// console.log(totalTip)

numbers = totalTip.map(Number);
console.log(numbers);

// console.log(numbers[0])
bill1 = numbers[0] + 48;
bill2 = numbers[1] + 124;
bill3 = numbers[2] + 268;
// console.log(bill1)

const totalBill = [];
totalBill.push(bill1, bill2, bill3);
console.log(totalBill);
