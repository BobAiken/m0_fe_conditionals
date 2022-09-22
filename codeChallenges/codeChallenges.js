
//Spicy
var goodDrivingRecord = false
var isOver25 = false

if (goodDrivingRecord === true && isOver25 === true) {
  console.log("They should get a discount on a car rental")
} else if (goodDrivingRecord === true || isOver25 === true) {
  console.log("They should pay full price")
} else {
  console.log("They need to have someone else sign")
}
