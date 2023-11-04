import Service from "./serviceBase";

class ClientService extends Service {
  constructor() {
    super();

    this.resource = "/clients";
  }

  async clients(page, c) {
    const requestUrl = this.resource;
    return await this.getAPI(requestUrl, page, c);
  }
}

export default ClientService;