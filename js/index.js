var mark_height, jhon_height, mark_weight, jhon_weight;

mark_height = 1.73736;
jhon_height = 1.95448;

mark_weight = 75;
jhon_weight = 99;

var mark_BMI, jhon_BMI;

mark_BMI = mark_weight / (mark_height * mark_height);

jhon_BMI = jhon_weight / (jhon_height * jhon_height);

var greater_BMI = mark_BMI > jhon_BMI;

if (greater_BMI === true) greater_BMI;
else greater_BMI;

console.log('is marks BMI is higher than jhnos? :' + greater_BMI);

jhon_avg = (97 + 134 + 105) / 3;

mike_avg = (97 + 134 + 105) / 3;

marry_avg = (97 + 134 + 105) / 3;

// is_greater = true;

// is_greater
//   ? console.log('mike team is on top with the avg of ' + mike_avg)
//   : console.log('mike team is on last with the avg of ' + jhon_avg);

if (jhon_avg > mike_avg && jhon_avg > marry_avg) {
  console.log('Jhon team is on last with the avg of ' + jhon_avg);
} else if (marry_avg > jhon_avg && marry_avg > mike_avg) {
  console.log('Marry team avg of ' + marry_avg);
} else if (mike_avg > jhon_avg && mike_avg > marry_avg) {
  console.log('mike team is on last with the avg of ' + mike_avg);
} else {
  console.log('match is draw');
}
