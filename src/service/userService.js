import Service from "./serviceBase";

class UserService extends Service {
  constructor() {
    super();

    this.resource = "/users";
  }

  async users(page, c) {
    const requestUrl = this.resource;
    return await this.getAPI(requestUrl, page, c);
  }
}

export default UserService;