import { randomPickN } from "../../util/Util";
import { pageRoutes } from "../../models/PageRoutes";

export default function fakeRecentLinks(number) {
  console.warn(
    "WARNING!!",
    "Calling fakeRecentLinks! Are you still testing? If not then please call appropriate function."
  );

  return randomPickN(pageRoutes, number);
}
