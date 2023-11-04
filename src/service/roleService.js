import Service from "./serviceBase";

class RoleService extends Service {
  constructor() {
    super();

    this.resource = "/roles";
  }

  async roles(page, c) {
    const requestUrl = this.resource;
    return await this.getAPI(requestUrl, page, c);
  }
}

export default RoleService;