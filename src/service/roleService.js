import Service from "./serviceBase";

class RoleService extends Service {
  constructor() {
    super();

    this.resource = "/roles";
  }

  async roles() {
    const requestUrl = this.resource;
    return await this.getAPI(requestUrl);
  }
}

export default RoleService;