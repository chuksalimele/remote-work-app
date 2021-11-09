import { pageRoutes } from "../models/PageRoutes";

export function invertBgColor(theme) {
  return {
    bgcolor: `${theme.palette.primary.main}`,
    "*": {
      //all children
      color: "#eee",
      fontWeight: "bold",
    },
  };
}

export function getUserById(id) {
  return; // TODO
}
export function getProjectById(id) {
  return; // TODO
}
export function avatarBgColor(name) {
  return "green"; //TODO - randomly pick from a set of color grouped by letter determined by the first letter of the name
}

export function getPageUrl(name) {
  var r = pageRoutes.find((obj) => obj.name === name);
  return r ? r.url : "UNKNOWN_URL";
}
export function userFullName(user, includeTitle) {
  if (!user) return "";
  var title = includeTitle && user.title ? user.title : "";
  var firstName = user.firstName ? user.firstName : "";
  var lastName = user.lastName ? user.lastName : "";
  return `${title} ${firstName} ${lastName}`.trim();
}

export function getUserFullNameById(id, includeTitle) {
  var user = getUserById(id);
  return userFullName(user, includeTitle);
}

export const isString = (v) => typeof v === "string";
export const isFunction = (v) => typeof v === "function";
export const isObject = (v) => typeof v === "object";
