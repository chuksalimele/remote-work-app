import { fakeUsers } from "../models/fake/FakeUsers";

export default new (function () {
  //state
  this.INITIAL = 1;
  this.SIGNUP_STAGE = 2;
  this.AUTHENTICATED = 3;

  //signup stage
  this.REQUIRE_USERNAME = 0;
  this.REQUIRE_PASSWORD = 0;
  this.REQUIRE_FULLNAME = 0;

  this.state = function () {
    return this.AUTHENTICATED; //TODO
  };
  this.stage = function () {};

  this.fakeAuthUser = null;

  this.AuthUser = function () {
    if (!this.fakeAuthUser) {
      //TODO - REMOVE AFTER TESTING
      this.fakeAuthUser = fakeUsers(1)[0];
    }
    //TODO - get real user
    return this.fakeAuthUser;
  };

  return this;
})();
