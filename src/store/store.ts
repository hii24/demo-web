// stores/AuthStore.js
import { makeAutoObservable } from "mobx";

interface User {
  uid: string;
  email: string;
  registered: boolean;
  emailVerified: boolean;
  photoUrl: string;
  user_type: number;
  first_name: string;
  last_name: string;
  title: string;
  practise_name: string;
}

class AuthStore {
  token = localStorage.getItem("authToken");
  user: User | null = JSON.parse(localStorage.getItem("user") || "null");

  constructor() {
    makeAutoObservable(this);
  }

  get isAuthenticated() {
    return !!this.token;
  }

  get userInfo() {
    return this.user;
  }

  login(token: string, user: User) {
    this.token = token;
    this.user = user;
    localStorage.setItem("authToken", token);
    localStorage.setItem("user", JSON.stringify(user));
  }

  logout() {
    this.token = null;
    this.user = null;
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
  }
}

const authStore = new AuthStore();
export default authStore;
