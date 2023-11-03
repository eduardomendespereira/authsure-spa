import Service from "./Service";

class UserService extends Service {
  constructor() {
    super();

    this.resource = "/users";
  }

  async users() {
    const requestUrl = this.resource;
    return await this.getAPI(requestUrl);
  }
}

export default UserService;