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
  async getSession(payload) {
    const requestUrl = `${this.resource}/${payload}`;
    return await this._http.get(requestUrl);
  }
  async updateSession(payload) {
    return await this.update(payload, payload.id);
  }
}

export default SessionService;