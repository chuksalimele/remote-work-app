import { FakeUser } from "../models/fake/FakeUser";

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

  this.AuthUser = function name() {
    //TODO - get real user
    return FakeUser.getUsers(1)[0];
  };

  return this;
})();
