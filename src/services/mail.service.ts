import { Injectable } from "injection-js";
import { HttpService } from "./http.service";

@Injectable()
export class MailService {
  constructor(public httpService: HttpService) {}
}
