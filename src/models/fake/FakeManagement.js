export var FakeManagement = {
  getTasks(obj) {
    if (typeof obj === "number") {
      obj = { count: obj };
    }

    var objs = [];

    for (var i = 0; i < obj.count; i++) {
      var m = {
        id: i,
        name: "name" + i,
        deadline: new Date().getTime(),
        createdById: i + 3,
        participantIds: [2, 5, 8, 3, 7],
        responsiblePersonId: i + 1,
        status: "status" + i,
        projectId: i,
        createdTime: new Date().getTime(),
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
  },
  getProjects(obj) {
    if (typeof obj === "number") {
      obj = { count: obj };
    }

    var objs = [];

    for (var i = 0; i < obj.count; i++) {
      var m = {};
      objs.push(m);
    }

    return objs;
  },
  getWorkgroups(obj) {
    if (typeof obj === "number") {
      obj = { count: obj };
    }

    var objs = [];

    for (var i = 0; i < obj.count; i++) {
      var m = {};
      objs.push(m);
    }

    return objs;
  },
};
