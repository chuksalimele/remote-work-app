import { randomPickOne } from "../../util/Util";

export default function fakeEventsAndReminders(number) {
  console.warn(
    "WARNING!!",
    "Calling fakeEventsAndReminders! Are you still testing? If not then please call appropriate function."
  );
  var arr = [];

  for (var i = 0; i < number; i++) {
    var time = new Date().getTime();
    if (i <= 5) {
      time -= (i + 1) * 1000;
    } else if (i <= 10) {
      time -= (i + 1) * 60 * 1000;
    } else if (i <= 20) {
      time -= (i + 1) * 60 * 60 * 1000;
    } else if (i <= 30) {
      time -= (i + 1) * 24 * 60 * 60 * 1000;
    } else if (i <= 40) {
      time -= (i + 1) * 7 * 24 * 60 * 60 * 1000;
    } else if (i <= 50) {
      time -= (i + 1) * 30 * 24 * 60 * 60 * 1000;
    } else {
      time -= (i + 1) * 365 * 24 * 60 * 60 * 1000;
    }

    var startTime = time - 60 * 1000;
    var endTime = startTime + randomPickOne([40, 68, 205, 320]) * 1000;
    var obj = {
      event: {
        startTime: startTime,
        endTime: endTime,
        description: randomPickOne([
          `Traditional marriage ceremony of Faith${i} and Oke${i}`,
          `NDIC Examination ${i}`,
          `Board Meeting ${i}`,
        ]),
        location: randomPickOne([
          "Warri",
          "40 Effurun Sapele Road",
          "Lagos Eko Hotel",
          "Sapele",
        ]),
      },
      reminder: {
        time: time,
        description: randomPickOne([
          "Discuss with the CRM on Failed Transfer",
          "Inform Head Finance errors  detected",
          "Call Ovie",
          "Send email to EbillsPay",
        ]),
      },
    };
    arr.push(obj);
  }

  return arr;
}
