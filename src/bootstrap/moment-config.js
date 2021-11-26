import moment from "moment/min/moment-with-locales";
import Moment from "react-moment";
import parseFormat from "moment-parseformat";

// Set the update interval. This will update the mounted
// instances every 30 seconds.
Moment.startPooledTimer(30000);

// Sets the moment instance to use.
Moment.globalMoment = moment;

// Set the locale for every react-moment instance to French.
Moment.globalLocale = "en";

// 'Thu 06-Feb-21 9:20pm' gives ddd DD-MMM-YY h:mma
//var derivedFormatFromSample = parseFormat("Thu 06-Feb-21 9:20pm");//Deprecated Don't do this - causes unexpected result globally

// Set the output format for every react-moment instance.
//Moment.globalFormat = derivedFormatFromSample;//Deprecated Don't do this - causes unexpected result globally

// Set the timezone for every instance.
//Moment.globalTimezone = "America/Los_Angeles";

// Set the output timezone for local for every instance.
Moment.globalLocal = true;

// Use a <span> tag for every react-moment instance.
//Moment.globalElement = "span";

// Upper case all rendered dates.
/*Moment.globalFilter = (d) => {
  return d.toUpperCase();
};*/
