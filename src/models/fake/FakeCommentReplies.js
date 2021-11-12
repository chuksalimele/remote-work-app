import {
  randomPickN,
  randomPickOne,
  randomWords,
  serialNumbers,
} from "../../util/Util";

export default function fakeCommentReplies(number) {
  var arr = [];
  for (var i = 0; i < number; i++) {
    var time = new Date().getTime();
    if (i <= 5) {
      time += (i + 1) * 1000;
    } else if (i <= 5) {
      time += (i + 1) * 60 * 1000;
    } else if (i <= 10) {
      time += (i + 1) * 60 * 60 * 1000;
    } else if (i <= 20) {
      time += (i + 1) * 24 * 60 * 60 * 1000;
    } else if (i <= 30) {
      time += (i + 1) * 7 * 24 * 60 * 60 * 1000;
    } else if (i <= 40) {
      time += (i + 1) * 30 * 24 * 60 * 60 * 1000;
    } else {
      time += (i + 1) * 365 * 24 * 60 * 60 * 1000;
    }

    var id = randomPickOne([0, 1]);
    var obj = {
      fromId: id,
      toId: id === 0 ? 1 : 0,
      message: randomWords(5, 40, "c"),
      replyIds: randomPickN(serialNumbers(1, 10), 7),
      likeIds: randomPickN(serialNumbers(1, 10), 7),
      dislikeIds: randomPickN(serialNumbers(1, 10), 7),
      status: randomPickOne(["failed", "error", "sent", "seen"]),
      time: time,
    };
    arr.push(obj);
  }

  return arr;
}
