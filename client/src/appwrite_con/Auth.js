import { Client, Account, ID } from "appwrite";
import config from "../config/AppWriteConfig";

export class AuthService {
  // client and account credentials
  client = new Client();
  account;

  // constructor
  constructor() {
    this.client.setEndpoint(config.appwrite_url).setProject(config.appwrite_project_id);
    this.account = new Account(this.client);
  }

  // to create an account
  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );

      if (userAccount) {
        return await this.login({ email, password });
      } else {
        console.log(userAccount);
        throw new Error("Couldn't create account");
      }
    } catch (error) {
      throw error;
    }
  }

  // to login the user
  async login({ email, password }) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      console.log("Appwrite logout Error", error.message);
    }
  }

  // to get the current working user
  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("appwrite service", error);
    }
    return null;
  }
}

const authService = new AuthService();
export default authService;