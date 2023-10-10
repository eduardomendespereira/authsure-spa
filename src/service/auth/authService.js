import Service from "../Service";

class AuthService extends Service {
  constructor() {
    super();

    this.resource = "/login";
  }

  async login(payload) {
    const requestUrl = this.resource;
    return await this.insert(payload);
  }
}

export default new AuthService();
