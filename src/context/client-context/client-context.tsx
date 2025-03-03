import { createContext, PropsWithChildren } from "react";

type Client = {
  email: string;
  name: string;
  password: string;
}

const ClientContext = createContext<Client | null>({
  email: '',
  name: '',
  password: ''
});


export const ClientProvider: React.FC<PropsWithChildren> = ({ children }) => {

  return <ClientContext.Provider value={null}>
    {children}
  </ClientContext.Provider>
}