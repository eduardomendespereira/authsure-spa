import Service from "./serviceBase";

class GroupService extends Service {
  constructor() {
    super();

    this.resource = "/groups";
  }

  async groups(page, c) {
    const requestUrl = this.resource;
    return await this.getAPI(requestUrl, page, c);
  }
}

export default GroupService;