// stores/AuthStore.js
import { makeAutoObservable } from 'mobx';
import { subscription } from '../api/subscription';

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
  passwordSet: boolean;
}

interface Subscription {
  status: boolean;
  payer_id: string;
  plan: {
    key: string;
    name: string;
    period: string;
    price: number;
  };
  payment_service: string;
  started_at: number;
  expires_at: number;
}

class AuthStore {
  token = localStorage.getItem('authToken');
  user: User | null = JSON.parse(localStorage.getItem('user') || 'null');

  loading = false;
  subscription: Subscription | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  async init() {
    if (this.isAuthenticated && !this.subscription) {
      await subscription();
    }

  }

  get premium() {
    return this.subscription?.status;
  }

  get isAuthenticated() {
    return !!this.token;
  }

  get userInfo() {
    return this.user;
  }

  get isClient() {
    return this.user?.user_type === 0;
  }

  setSubscription(subscription: Subscription) {
    this.subscription = subscription;
  }

  setLoading(loading: boolean) {
    this.loading = loading;
  }

  updateUserInfo = (data: {
    first_name: string;
    last_name: string;
  }) => {
    const updatedUser = JSON.parse(JSON.stringify(this.user));
    updatedUser.first_name = data.first_name;
    updatedUser.last_name = data.last_name;
    localStorage.setItem('user', JSON.stringify(updatedUser));
    this.user = updatedUser;
  }

  login(token: string, user?: User) {
    this.token = token;
    localStorage.setItem('authToken', token);
    if (user) {
      this.user = user;
      localStorage.setItem('user', JSON.stringify(user));
    }
  }


  logout() {
    this.token = null;
    this.user = null;
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
  }
}

const authStore = new AuthStore();
export default authStore;
