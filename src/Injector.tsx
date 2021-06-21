import { createContext, FC, useContext, useRef } from "react";
import {
  Injector,
  Provider,
  ReflectiveInjector,
  Type,
  InjectionToken,
} from "injection-js";
import "@abraham/reflection";

const InjectorContext = createContext<Injector>(Injector.NULL);
const Root: FC<{ providers: Provider[] }> = ({ children, providers }) => {
  const rootInjector = useRef(ReflectiveInjector.resolveAndCreate(providers));
  return (
    <InjectorContext.Provider value={rootInjector.current}>
      {children}
    </InjectorContext.Provider>
  );
};

const Child: FC<{
  providers: Provider[];
}> = ({ children, providers }) => {
  const rootInjector = useContext(InjectorContext) as ReflectiveInjector;
  const childInjector = useRef(rootInjector.resolveAndCreateChild(providers));
  return (
    <InjectorContext.Provider value={childInjector.current}>
      {children}
    </InjectorContext.Provider>
  );
};

export const InjectorContainer = {
  Root,
  Child,
};

export function useInject<T>(
  token: Type<T> | InjectionToken<T>,
  notFoundValue?: T
): T {
  return useContext(InjectorContext).get(token) || notFoundValue!;
}
