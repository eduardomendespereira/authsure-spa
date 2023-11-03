import Service from "./serviceBase";

class ClientService extends Service {
  constructor() {
    super();

    this.resource = "/clients";
  }

  async clients() {
    const requestUrl = this.resource;
    return await this.getAPI(requestUrl);
  }
}

export default ClientService;