import Service from "./serviceBase";

class RealmService extends Service {
  constructor() {
    super();

    this.resource = "/realms";
  }

  async realms(page, c) {
    const requestUrl = this.resource;
    return await this.getAPI(requestUrl, page, c);
  }
}

export default RealmService;