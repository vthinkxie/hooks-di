import { Injectable } from "injection-js";
import { HttpServiceAbstract } from "./http.service.abstract";

@Injectable()
export class MailService {
  getCount(): number {
    return this.httpService.getCount();
  }

  constructor(public httpService: HttpServiceAbstract) {}
}
