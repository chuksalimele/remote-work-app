export var FakeOfficeMail = {
  getSuggestions(obj) {
    if (typeof obj === "number") {
      obj = { count: obj };
    }

    var objs = [];

    for (var i = 0; i < obj.count; i++) {
      var m = {
        id: i,
        fromId: "user_id" + 3,
        toId: "user_id" + 5,
        copiedIds: [3, 9, 5, 2, 7], // ids of users copied so they can view the suggestion
        commmentIds: [], //comments are messages sent by copied users. each comment must have an id
        subject: "This is message subject or title",
        message: "This is a suggestion or innovation",
        attachmentIds: [3, 5, 8, 3], //attachements are files. each attachment must have a id for accessinng
        time: new Date().getTime(),
      };
      objs.push(m);
    }

    return objs;
  },
  getComplaints(obj) {
    if (typeof obj === "number") {
      obj = { count: obj };
    }

    var objs = [];

    for (var i = 0; i < obj.count; i++) {
      var m = {
        id: i,
        fromId: "user_id" + 3,
        toId: "user_id" + 5,
        copiedIds: [3, 9, 5, 2, 7], // ids of users copied so they can view the suggestion
        commmentIds: [3, 7, 9], //comments are messages sent by copied users. each comment must have an id
        subject: "This is message subject or title",
        message: "This is a complaint",
        correspondenceIds: [2, 8, 9, 2], //correspondences are messages exchange between two persons. each correspondence must have and id
        attachmentIds: [3, 5, 8, 3], //attachements are files. each attachment must have a id for accessinng
        time: new Date().getTime(),
      };
      objs.push(m);
    }

    return objs;
  },

  getMemos(obj) {
    if (typeof obj === "number") {
      obj = { count: obj };
    }

    var objs = [];

    for (var i = 0; i < obj.count; i++) {
      var m = {
        id: i,
        fromId: "user_id" + 3,
        toId: "user_id" + 5,
        copiedIds: [3, 9, 5, 2, 7], // ids of users copied so they can view the suggestion
        commmentIds: [1, 4, 8], //comments are messages sent by copied users. each comment must have an id
        correspondenceIds: [2, 8, 9, 2], //correspondences are messages exchange between two persons. each correspondence must have and id
        subject: "This is message subject or title",
        message: "This is a memo",
        attachmentIds: [3, 5, 8, 3], //attachements are files. each attachment must have a id for accessinng
        time: new Date().getTime(),
      };
      objs.push(m);
    }

    return objs;
  },
  getQueries(obj) {
    if (typeof obj === "number") {
      obj = { count: obj };
    }

    var objs = [];

    for (var i = 0; i < obj.count; i++) {
      var m = {
        id: i,
        fromId: "user_id" + 3,
        toId: "user_id" + 5,
        copiedIds: [3, 9, 5, 2, 7], // ids of users copied so they can view the suggestion
        commmentIds: [1, 4, 8], //comments are messages sent by copied users. each comment must have an id
        correspondenceIds: [2, 8, 9, 2], //correspondences are messages exchange between two persons. each correspondence must have and id
        subject: "This is message subject or title",
        message: "This is a query",
        time: new Date().getTime(),
      };
      objs.push(m);
    }

    return objs;
  },
  getRequests(obj) {
    return _getSignatoryDocuments0(
      obj,
      true,
      ["initiate", "recommend", "approve"],
      [3, 6, 8]
    );
  },
  getSignatoryDocuments(obj) {
    return _getSignatoryDocuments0(
      obj,
      true,
      ["initiate", "recommend", "authorize", "approve", "post"],
      [0, 2, 5, 8, 7]
    );
  },

  _getSignatoryDocuments0(
    obj,
    is_sequence_document_process,
    signatory_ids_arr,
    signator_action_arr
  ) {
    if (typeof obj === "number") {
      obj = { count: obj };
    }
    var objs = [];
    //note these special signatory documens do not have attachments, copied user, comments and correspondences like
    //the other office mail messages.

    for (var i = 0; i < obj.count; i++) {
      var m = {
        id: i,
        fromId: "user_id" + 3, //the current user in the process sending the docuent to the next signatory
        toId: "user_id" + 5, //the next user to receive the document for action and signing
        subject: "This is message subject or title",
        message: "This is a signatory document",
        isSequence: is_sequence_document_process, //whether signatory document process is in sequential order
        signatoryIds: signatory_ids_arr, //array of ids of users who are signatories to the document
        signatoryActions: signator_action_arr, // action the user is to take e.g recommend, approve, authorize and post
        stageCompleted: 3, //stage of completion. if out of 5 signatories, 3 has taken action then the stage is 3
        timeCreated: new Date().getTime(), //time created
        timeDone: new Date().getTime(), //time all signatories finished action
      };
      objs.push(m);
    }

    return objs;
  },
};
