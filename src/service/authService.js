import Service from "./serviceBase";

class AuthService extends Service {
  constructor() {
    super();

    this.resource = "auth/login";
  }

  async login(payload) {
    const requestUrl = this.resource;
    return await this.insert(payload);
  }
}

export default new AuthService();
