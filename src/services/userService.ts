import { UserType } from "./types/userService.types";

export const getRandomUserApi = (): Promise<UserType> => {
  return fetch("https://randomuser.me/api/?results=1&nat=us", {
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
};
