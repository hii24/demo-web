import { makeAutoObservable } from "mobx";
import { IClient } from '../api/types/client.response';

class SessionStore {
  loading: boolean = true;
  clients: IClient[] = [];
  resources: any = [];

  constructor() {
    makeAutoObservable(this);
  }

  setLoading(loading: boolean) {
    this.loading = loading;
  }
  setResources(resources: any) {
    this.resources = resources;
  }
  setClients(clients: IClient[]) {
    this.clients = clients;
  }
}

const sessionStore = new SessionStore();
export default sessionStore;
