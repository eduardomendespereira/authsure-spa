import Service from "./serviceBase";

class RealmService extends Service {
  constructor() {
    super();

    this.resource = "/realms";
  }

  async realms() {
    const requestUrl = this.resource;
    return await this.getAPI(requestUrl);
  }
}

export default RealmService;