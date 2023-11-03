import Service from "./serviceBase";

class SessionService extends Service {
  constructor() {
    super();

    this.resource = "/sessions";
  }

  async sessions() {
    const requestUrl = this.resource;
    return await this.getAPI(requestUrl);
  }
}

export default SessionService;