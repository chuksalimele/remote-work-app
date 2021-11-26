import { randomPickOne, randomWords } from "../../util/Util";

export default function fakeChats(number) {
  var arr = [];
  var n5 = 10;
  var n10 = 10;
  var n20 = 10;
  var n30 = 10;
  var n40 = 10;
  var n50 = 10;
  var n60 = 10;

  for (var i = number - 1; i > -1; i--) {
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

    //var id = randomPickOne([0, 1]);

    var index = arr.length - 1;

    var id = arr[index] && arr[index].fromId === 0 ? 1 : 0;

    var obj = {
      fromId: id,
      toId: id === 0 ? 1 : 0,
      message: randomWords(2, 2, "a"),
      status: randomPickOne(["failed", "error", "sent", "seen", "delivered"]),
      time: time,
    };
    arr.push(obj);
  }

  return arr;
}
