export var FakeUser = {
  getUsers(obj) {
    if (typeof obj === "number") {
      obj = { count: obj };
    }

    var objs = [];

    for (var i = 0; i < obj.count; i++) {
      var m = {
        id: i,
        title: "Mr.",
        firstName: "FirstName" + i,
        lastName: "LastName" + i,
        email: "email" + i,
        dob: new Date().getTime(),
        photoUrl: "",
        staffId: "staffId" + i,
        organization: "organization" + i,
        branch: "branch" + i,
        designation: "designation" + i,
        awards: ["award1", "award2", "award3"], //awards earned in this organization
        achievements: ["achievements3", "achievements3", "achievements3"], //achievements in this organization
        academicTitle: "B.Eng, Msc",
        bio: "This is my biography",
        messageIds: [6, 8, 9, 3, 2], // ids of all messages  sent from or to this user. Note both chat, comment, replies. All message sent from and also sent to this user
        attachmentIds: [7, 0, 2, 4, 9], //similarly, ids of all attachment (files) sent from and to this user
        taskIds: [4, 3, 6, 2, 9], // ids of all tasks connected to this user. whether actively acting or just following or observingg
        projectIds: [4, 3, 6, 2, 9], // ids of all projecs this userr belong to. Whether actively acting or just following or observingg
        workgroupIds: [4, 3, 6, 2, 9], // ids of all workground this user belong to.
        files: [4, 3, 6, 2, 9], // ids of all files this user can view.
        audioCallIds: [3, 6, 3, 2, 6], //ids of all audio calls of this user
        videoCallIds: [3, 6, 3, 2, 6], //ids of all video calls of this user
      };
      objs.push(m);
    }

    return objs;
  },
};
