import { craftNovaApi } from "@/lib/api-instance";
import { User } from "./types";
import { AxiosError } from "axios"; 

export class UserService {
  private static instance: UserService;
  private readonly BASE_PATH = "/api/users";

  private constructor() {}

  public static getInstance(): UserService {
    if (!UserService.instance) {
      UserService.instance = new UserService();
    }
    return UserService.instance;
  }

  async syncUser(userData: Partial<User>): Promise<User> {
    try {
      const { data } = await craftNovaApi.post<User>(
        `${this.BASE_PATH}/sync`,
        userData
      );
      return data; 
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async getUserById(id: string): Promise<User> {
    try {
      const { data } = await craftNovaApi.get<User>(`${this.BASE_PATH}/${id}`);
      return data; 
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async updatePreferences(id: string, preferences: object): Promise<User> {
    try {
      const { data } = await craftNovaApi.patch<User>(
        `${this.BASE_PATH}/${id}/preferences`,
        preferences
      );
      return data; 
    } catch (error) {
      throw this.handleError(error);
    }
  }

  private handleError(error: unknown): APIError {
    if (error instanceof AxiosError) {
      return {
        message: error.response?.data?.error || "An error occurred",
        status: error.response?.status || 500,
      };
    }
    return {
      message: "An unexpected error occurred",
      status: 500,
    };
  }
}

export const userService = UserService.getInstance();
