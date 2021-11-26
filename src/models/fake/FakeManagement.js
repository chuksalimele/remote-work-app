import { randomPickOne } from "../../util/Util";

export function fakeTasks(obj) {
  console.warn(
    "WARNING!!",
    "Calling fakeTasks! Are you still testing? If not then please call appropriate function."
  );

  if (typeof obj === "number") {
    obj = { count: obj };
  }

  var objs = [];

  for (var i = 0; i < obj.count; i++) {
    var m = {
      id: i, //task id
      name: "Task_" + i,
      deadline: new Date().getTime(),
      createdById: i + 3,
      participantIds: [2, 5, 8, 3, 7],
      commentIds: [1, 3, 2, 5, 6, 7, 9], //comments on this tasks
      responsiblePersonId: i + 1,
      status: randomPickOne([
        "inprogress",
        "completed",
        "deffered",
        "cancelled",
      ]),
      projectId: i, // id of project this task belongs to - NOTE: not all task belong to a project
      createdTime: new Date().getTime(),
      resumeTime: new Date().getTime(), //resumption time for the case of deffered (paused) task
      modifiedTime: new Date().getTime(),
      closedTime: new Date().getTime(),
      estimatedTimeRequired: 3300,
      trackTimeSpent: 4400,
      score: 8,
      responsiblePersonMayChangeDeadline: true,
      timeSpent: 5500,
      tag: "tag" + i,
      lead: "lead" + i,
      contact: "contact" + i,
      company: "company" + i,
      deal: "deal" + i,
    };

    objs.push(m);
  }

  return objs;
}
export function fakeProjects(obj) {
  console.warn(
    "WARNING!!",
    "Calling fakeProjects! Are you still testing? If not then please call appropriate function."
  );
  if (typeof obj === "number") {
    obj = { count: obj };
  }

  var objs = [];

  for (var i = 0; i < obj.count; i++) {
    var m = {
      id: i, //project id
      managerId: i, //project manager id (user id of project manager)
      name: "Project_" + i,
      deadline: new Date().getTime(),
      createdById: i + 3,
      memberIds: [2, 5, 8, 3, 7],
      commentIds: [3, 6, 7, 9, 10], //comments on this project
      taskIds: [1, 2, 3, 4, 6, 7, 8, 9], //tasks in this project
      status: randomPickOne([
        "inprogress",
        "completed",
        "deffered",
        "cancelled",
      ]),
      createdTime: new Date().getTime(),
      resumeTime: new Date().getTime(), //resumption time for the case of deffered (paused) project
      closedTime: new Date().getTime(),
      estimatedTimeRequired: 3300,
      trackTimeSpent: 4400,
      score: 8,
      timeSpent: 5500,
      tag: "tag" + i,
      lead: "lead" + i,
      contact: "contact" + i,
      company: "company" + i,
    };
    objs.push(m);
  }

  return objs;
}

export function fakeWorkgroups(obj) {
  console.warn(
    "WARNING!!",
    "Calling fakeWorkgroups! Are you still testing? If not then please call appropriate function."
  );

  if (typeof obj === "number") {
    obj = { count: obj };
  }

  var objs = [];

  for (var i = 0; i < obj.count; i++) {
    var m = {
      name: "Workgroup_" + i,
      description: "This workgroup description " + i,
      createBy: 1, //id of user who create the workgroup - He automatically becomes an admin like in WhatsApp
      adminIds: [0, 3, 4, 5, 6], //id of members who are admins
      taskIds: [2, 5, 7, 8, 9], //tasks created for  memmbers of this workgroup to participant in
      projectIds: [0, 2, 4, 7, 9], //projects created for  memmbers of this workgroup to participant in
      commentIds: [1, 4, 6, 7, 5], //ids all messages sent to this workgroup channel e.g from the chat section
      memberIds: [2, 5, 8, 3, 7], //members of this workgroup
      files: [1, 2, 5, 7, 8, 9], //ids that point to unique file path that only members of this group can access
      createdTime: new Date().getTime(),
    };
    objs.push(m);
  }

  return objs;
}
