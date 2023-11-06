import Service from "./serviceBase";

class SessionService extends Service {
  constructor() {
    super();

    this.resource = "/sessions";
  }

  async sessions(page, c) {
    const requestUrl = this.resource;
    return await this.getAPI(requestUrl, page, c);
  }
}

export default SessionService;