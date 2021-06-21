// eslint-disable-next-line max-classes-per-file
import { ReflectiveInjector, Injectable } from "injection-js";
import "@abraham/reflection";

class Http {}

@Injectable()
class Service {
  constructor(private http: Http) {}
}

const injector = ReflectiveInjector.resolveAndCreate([Http, Service]);

console.log(injector.get(Service) instanceof Service);
