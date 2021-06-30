import { ReactElement } from "react";
import "./App.css";
import { InjectorContainer } from "./Injector";
import { HttpService } from "./services/http.service";
import { MailService } from "./services/mail.service";
import { Page } from "./Page";
import { HttpNewService } from "./services/http-new.service";
import { HttpServiceAbstract } from "./services/http.service.abstract";

export function App(): ReactElement {
  return (
    <InjectorContainer.Root
      providers={[
        { provide: HttpServiceAbstract, useClass: HttpService },
        MailService,
      ]}
    >
      <InjectorContainer.Child
        providers={[
          { provide: HttpServiceAbstract, useClass: HttpNewService },
          MailService,
        ]}
      >
        <Page />
      </InjectorContainer.Child>
      <Page />
    </InjectorContainer.Root>
  );
}
