import { fakeProjects } from "../models/fake/FakeManagement";
import { fakeUsers } from "../models/fake/FakeUsers";
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

var _fakeUsers = fakeUsers(20);
var _fakeProjects = fakeProjects(20);

export function getUserById(id) {
  // TODO - real implementation
  if (!_fakeUsers) {
    _fakeUsers = fakeUsers(20);
  }
  var user = _fakeUsers.find((obj) => obj.id === id);
  return user; // TODO
}
export function getProjectById(id) {
  // TODO - real implementation
  if (!_fakeProjects) {
    _fakeProjects = fakeProjects(20);
  }
  var project = _fakeProjects.find((obj) => obj.id === id);
  return project;
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

export function randomPickN(arr, pickCount) {
  if (pickCount < 1) return [];

  var count = pickCount > arr.length ? arr.length : pickCount;

  var picked = [];
  var clone = [...arr]; //copy
  while (picked.length !== count) {
    clone = clone.filter((p) => {
      var index = picked.findIndex((n) => n === p);
      return index === -1;
    });

    var randIndex = randInt(0, clone.length - 1);
    picked.push(clone[randIndex]);
  }

  return picked;
}

export function randomPickOne(arr) {
  return randomPickN(arr, 1)[0];
}

export function serialNumbers(start, end) {
  var arr = [];
  for (var i = start; i < end + 1; i++) {
    arr.push(i);
  }
  return arr;
}

export function randomWords(maxLetters, WordCount, character) {
  var sentence = "";
  for (var i = 0; i < WordCount + 1; i++) {
    var letterCount = randInt(1, maxLetters);
    for (var k = 0; k < letterCount; k++) {
      sentence += character;
    }

    sentence += " ";
  }

  return sentence;
}

export function randInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + 1) + min;
}
