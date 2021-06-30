import { HttpServiceAbstract } from "./http.service.abstract";

export class HttpNewService extends HttpServiceAbstract {
  getCount(): number {
    return 100;
  }
}
