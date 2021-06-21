import { ReactElement } from "react";
import { useInject } from "./Injector";
import { MailService } from "./services/mail.service";

export function PageTwo(): ReactElement {
  const mailService = useInject(MailService);
  return <div>{mailService.httpService.count}</div>;
}
