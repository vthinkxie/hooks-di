import { ReactElement, useEffect } from "react";
import { useInject } from "./Injector";
import { MailService } from "./services/mail.service";

export function PageOne(): ReactElement {
  const mailService = useInject(MailService);
  useEffect(() => {
    mailService.httpService.count += 1;
    console.log(mailService.httpService.count);
  }, [mailService]);
  return <div>{mailService.httpService.count}</div>;
}
