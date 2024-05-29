import { makeAutoObservable } from "mobx";
import { IClient } from '../api/types/client.response';

class SessionStore {
  loading: boolean = true;
  clients: IClient[] = [];

  constructor() {
    makeAutoObservable(this);
  }



  setLoading(loading: boolean) {
    this.loading = loading;
  }
  setClients(clients: IClient[]) {
    this.clients = clients;
  }
}

const sessionStore = new SessionStore();
export default sessionStore;
