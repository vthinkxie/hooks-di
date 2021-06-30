import { ReactElement } from "react";
import { useInject } from "./Injector";
import { MailService } from "./services/mail.service";

export function Page(): ReactElement {
  const mailService = useInject(MailService);
  return <div>{mailService.getCount()}</div>;
}
