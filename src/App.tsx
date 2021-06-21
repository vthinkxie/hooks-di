import { ReactElement, useState } from "react";
import "./App.css";
import { InjectorContainer } from "./Injector";
import { HttpService } from "./services/http.service";
import { MailService } from "./services/mail.service";
import { PageOne } from "./PageOne";
import { PageTwo } from "./PageTwo";
import { PeopleService } from "./services/people.service";
import { HttpNewService } from "./services/http-new.service";

export function App(): ReactElement {
  const [flag, setFlag] = useState(false);
  return (
    <InjectorContainer.Root
      providers={[HttpService, MailService, PeopleService]}
    >
      <button type="button" onClick={() => setFlag(!flag)}>
        Toggle
      </button>
      <InjectorContainer.Child
        providers={[
          { provide: HttpService, useClass: HttpNewService },
          MailService,
        ]}
      >
        {flag && <PageOne />}
      </InjectorContainer.Child>

      <PageTwo />
    </InjectorContainer.Root>
  );
}
