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

  var time = new Date().getTime();

  for (var i = number - 1; i > -1; i--) {
    var n = 1;
    time -= n * 60 * 60 * 1000;

    //var id = randomPickOne([0, 1]);

    var index = arr.length - 1;

    var id = arr[index] && arr[index].fromId === 0 ? 1 : 0;

    var obj = {
      fromId: id,
      toId: id === 0 ? 1 : 0,
      messageId: "chat_id_" + i,
      message: randomWords(5, 80, "a"),
      status: randomPickOne(["failed", "error", "sent", "seen", "delivered"]),
      time: time,
    };
    arr.push(obj);
  }

  return arr;
}
