import { randomPickN } from "../../util/Util";

export default function fakeRecentActivities(number) {
  console.warn(
    "WARNING!!",
    "Calling fakeRecentActivities! Are you still testing? If not then please call appropriate function."
  );

  var arr = [];
  var n5 = 10;
  var n10 = 10;
  var n20 = 10;
  var n30 = 10;
  var n40 = 10;
  var n50 = 10;
  var n60 = 10;

  for (var i = 0; i < number; i++) {
    var time = new Date().getTime();

    if (i <= 5) {
      time -= --n5 * 1000;
    } else if (i <= 10) {
      time -= --n10 * 60 * 1000;
    } else if (i <= 20) {
      time -= --n20 * 60 * 60 * 1000;
    } else if (i <= 30) {
      time -= --n30 * 24 * 60 * 60 * 1000;
    } else if (i <= 40) {
      time -= --n40 * 7 * 24 * 60 * 60 * 1000;
    } else if (i <= 50) {
      time -= --n50 * 30 * 24 * 60 * 60 * 1000;
    } else {
      time -= --n60 * 365 * 24 * 60 * 60 * 1000;
    }

    var obj = {
      description: "This is activity " + i,
      time: time,
    };
    arr.push(obj);
  }

  return arr;
}
