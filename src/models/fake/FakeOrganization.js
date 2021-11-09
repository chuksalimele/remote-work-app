export var FakeOrganization = {
  get() {
    return {
      name: "Organization Name",
      description: "brief description of this orgnizaation",
      chairmanId: 4, //id of chairman,
      directorIds: [3, 6, 8, 2, 7], //ids of directors
    };
  },

  getBranches(obj) {
    if (typeof obj === "number") {
      obj = { count: obj };
    }

    var obj = [];

    for (var i = 0; i < obj.count; i++) {
      var m = {
        id: i,
        name: "branch name " + i,
        address: "address" + 3, //address location of branch
        description: "This is some details about this branch" + 4, //description about the branch and what they do
        headId: 0, //id of head of branch
        deptIds: [3, 6, 8, 9], //ids of departments in branch
      };
      obj.push(m);
    }

    return obj;
  },

  getDepartments(obj) {
    if (typeof obj === "number") {
      obj = { count: obj };
    }

    var obj = [];

    for (var i = 0; i < obj.count; i++) {
      var m = {
        id: i,
        name: "department name " + i,
        code: "code" + 3, //some companies have code that refer to department e.g ESR103
        description: "This is some details about this department" + 4, //description about the department and what they do
        headId: 0, //id of head of department
        memberIds: [2, 6, 8, 9], //ids of users  that are staff or members in this department
        deptIds: [2, 4, 8, 9, 3], // ids of departments under this department or unit (as some may call it)
      };
      obj.push(m);
    }

    return obj;
  },
};
