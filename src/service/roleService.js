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
  async updateRole(payload) {
    return await this.update(payload, payload.id);
  }
}

export default RoleService;