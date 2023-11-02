import Service from "../Service";

class RealmsService extends Service {
  constructor() {
    super();

    this.resource = "/realms";
  }

  async realms() {
    const requestUrl = this.resource;
    return await this.getAPI(requestUrl);
  }
}

export default RealmsService;